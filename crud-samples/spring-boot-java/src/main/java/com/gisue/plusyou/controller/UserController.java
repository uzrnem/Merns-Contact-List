/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.controller;

import java.util.Date;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.gisue.plusyou.model.User;
import com.gisue.plusyou.util.EncryptPassword;
import com.gisue.plusyou.util.GisueResponse;
import com.gisue.plusyou.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@PersistenceContext
	private EntityManager entityManager;
	
	@Autowired
	EncryptPassword encryptPassword;

	@Value("${app.jwt.credentials.secretkey}")
	private String jwtKey;
	@Value("${app.jwt.credentials.tokenTitle}")
	private String tokenTitle;

	@RequestMapping(value="login", method=RequestMethod.POST)
	public GisueResponse login(@RequestBody Map<String, String> json) throws ServletException {
		if(json.get("username") == null || json.get("password") == null) {
			return GisueResponse.getInstance().setError("Please fill in username and password");
		}

		String userName = json.get("username");
		String password = json.get("password");

		User user = getUserByName(userName);
		if(user == null) {
			return GisueResponse.getInstance().setError("User name not found.");
		}

		String pwd = user.getPassword();

		if (!encryptPassword.matches(password, pwd)) {
			return GisueResponse.getInstance().setError("Invalid login. Please check your username and password");
		}

		return GisueResponse.getInstance().setData(user).set("token", generateToken(userName, user.getUserId()));

	}

	@RequestMapping(value="/register", method = RequestMethod.POST)
	public GisueResponse registerUser(@Valid @RequestBody User user) {

		User user1 = getUserByName(user.getUserName());
		if(user1 != null) {
			return GisueResponse.getInstance().setError("User name is taken");
		}
		user.setPassword(encryptPassword.encode(user.getPassword()));

		User u = userRepository.save(user);
		return GisueResponse.getInstance().setData(u).set("token", generateToken(u.getUserName(), u.getUserId()));
	}
	
	public User getUserByName(String userName) {
		try {
			return (User) entityManager.createQuery("SELECT u from User u where u.userName = :name")
					.setParameter("name", userName)
	                .getSingleResult();
		} catch(NoResultException nre) {
			return null;
		}
	}

	public String generateToken(String userName, int id) {
		String jwt = Jwts.builder().setSubject(userName).claim("id", id).setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, jwtKey).compact();
		return tokenTitle + " " + jwt;
	}
}
