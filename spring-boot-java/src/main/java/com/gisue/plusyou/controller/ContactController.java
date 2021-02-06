/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.http.HttpStatus;

import com.gisue.plusyou.util.GisueResponse;
import com.gisue.plusyou.model.Contact;
import com.gisue.plusyou.repository.ContactRepository;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/contact")
public class ContactController {
	
	@Autowired
	ContactRepository cr;
	
    @PersistenceContext
    private EntityManager entityManager;
	
	@RequestMapping(method=RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public GisueResponse put(@Valid @RequestBody Contact contact, @RequestAttribute("user_id") int userId) {
		contact.setUserId(userId);
		cr.save(contact);
		return GisueResponse.getInstance().setData(contact);
	}

	@RequestMapping(value="/{cid}", method=RequestMethod.GET)
	public GisueResponse get(@PathVariable("cid") int id, @RequestAttribute("user_id") int userId) {
		Contact c = getContactOfUser(id, userId);
		if (c == null) {
			return GisueResponse.getInstance().setError("No Content");
		} else {
			return GisueResponse.getInstance().setData(c);
		}
	}

	@RequestMapping(value="/{cid}", method=RequestMethod.POST)
	public GisueResponse post(@PathVariable("cid") int id, @Valid @RequestBody Contact contact, @RequestAttribute("user_id") int userId) {
		Contact c = getContactOfUser(id, userId);
		if (c == null) {
			return GisueResponse.getInstance().setError("No Content");
		} else {
			contact.setcId(id);
			cr.save(contact);
			return GisueResponse.getInstance().setData(contact);
		}
	}
	
	@RequestMapping(value="/{cid}", method=RequestMethod.DELETE)
	public GisueResponse delete(@PathVariable("cid") int id, @RequestAttribute("user_id") int userId){
		Contact c = getContactOfUser(id, userId);
		if (c == null) {
			return GisueResponse.getInstance().setError("No Content");
		} else {
			cr.delete(c);
			return GisueResponse.getInstance().setMessage("Item Deleted");
		}
	}

	@RequestMapping(method=RequestMethod.GET)
	public GisueResponse list(
			@RequestAttribute("user_id") int userId,
			@RequestParam(name = "filter", defaultValue = "{}") String filter,
			@RequestParam(name = "page", defaultValue = "1") Integer pageNumber,
			@RequestParam(name = "limit", defaultValue = "10") Integer pageSize) {
		ObjectMapper mapper = new ObjectMapper();
        
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Contact> query = builder.createQuery(Contact.class);
	    
	    Root<Contact> contact = query.from(Contact.class);

        List<Predicate> predicates = new ArrayList<>();
        predicates.add(builder.equal(contact.get("userId"),userId));
        try {
            Map<String, String> map = mapper.readValue(filter, Map.class);
            Map<String, String> columns = new HashMap<String, String>(){{
            	put("firstName", "like");
            	put("lastName", "like");
            	put("email", "like");
            	put("mobile", "like");
            }};
            for (Map.Entry<String, String> entry : map.entrySet()) {
                if (columns.containsKey(entry.getKey())) {
                	if (columns.get(entry.getKey()) == "like") {
                        predicates.add(builder.like(contact.get(entry.getKey()), "%" + entry.getValue() + "%"));
                	} else {
                        predicates.add(builder.equal(contact.get(entry.getKey()), entry.getValue()));
                	}
                }
            }
        } catch (IOException e) { System.out.println(e.getMessage());  }

        query.select(contact)
            .where(predicates.toArray(new Predicate[predicates.size()]));
 
        List<Contact> list = entityManager.createQuery(query)
            .setFirstResult((pageNumber-1) * pageSize)
            .setMaxResults(pageSize)
            .getResultList();
        return GisueResponse.getInstance().setData(list).set("total", list.size());
	}
	
	public Contact getContactOfUser(int id, int userId) {
		return (Contact) entityManager.createQuery("SELECT c from Contact c where c.cId = ?1 and c.userId = ?2")
				.setParameter(1, id)
				.setParameter(2, userId)
                .getSingleResult();
	}
}
/* This Type of mapping is breaking
 * @GetMapping @RequestMapping("/{cid}/") get(id) {}
 * @PostMapping @RequestMapping("/{cid}/") post(id) {}
 */