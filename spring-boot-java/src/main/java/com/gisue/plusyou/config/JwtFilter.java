/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

public class JwtFilter extends GenericFilterBean
{
	private String secretkey;
	private String tokenTitle;

	@Override
    public void doFilter(
    		final ServletRequest req,
            final ServletResponse res,
            final FilterChain chain
    ) throws IOException, ServletException {

        final HttpServletRequest request = (HttpServletRequest) req;
        final HttpServletResponse response = (HttpServletResponse) res;
        final String authHeader = request.getHeader("authorization");
        if ("OPTIONS".equals(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            chain.doFilter(req, res);
        } else {
            if (authHeader == null || !authHeader.startsWith(tokenTitle+" ")) {
                throw new ServletException("Missing or invalid Authorization header");
            }
            final String token = authHeader.substring(tokenTitle.length() + 1);
            try {
                final Claims claims = Jwts.parser().setSigningKey(secretkey).parseClaimsJws(token).getBody();
                int userId = (Integer) claims.get("id");
                request.setAttribute("user_id", userId);
            } catch (final SignatureException e) {
                throw new ServletException("Invalid token.");
            }
            chain.doFilter(req, res);
        }
    }

	public void setJwtCredentials(String secretkey, String tokenTitle) {
		this.secretkey = secretkey;
		this.tokenTitle = tokenTitle;
	}
}
