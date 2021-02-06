/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.gisue.plusyou.config.JwtFilter;

@SpringBootApplication
public class PlusyouApplication {

	@Value("${app.jwt.credentials.secretkey}")
	private String secretkey;
	@Value("${app.jwt.credentials.tokenTitle}")
	private String tokenTitle;

	@Bean
	public FilterRegistrationBean jwtFilter() {
		JwtFilter jwtFilter = new JwtFilter();
		jwtFilter.setJwtCredentials(secretkey, tokenTitle);
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(jwtFilter);
		registrationBean.addUrlPatterns("/contact/*");
		return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(PlusyouApplication.class, args);
	}

}
