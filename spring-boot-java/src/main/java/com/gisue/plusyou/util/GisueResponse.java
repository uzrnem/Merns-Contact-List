/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.util;

public class GisueResponse extends java.util.HashMap<String, Object> {
	
	/**
	 * Auto generated key
	 */
	private static final long serialVersionUID = 3171801492586595144L;
	
	public GisueResponse() {
		put("success", Boolean.TRUE);
	}
	
	public static GisueResponse getInstance() {
		GisueResponse gRes = new GisueResponse();
		return gRes;
	}
	
	public GisueResponse set(String s, Object o) {
		put(s, o);
		return this;
	}
	
	public GisueResponse setData(Object o) {
		put("data", o);
		return this;
	}
	
	public GisueResponse setError(String o) {
		put("success", Boolean.FALSE);
		put("error", o);
		return this;
	}
	
	public GisueResponse setMessage(String o) {
		put("message", o);
		return this;
	}
}