/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.NoResultException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
 
@SuppressWarnings({"unchecked","rawtypes"})
@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler
{
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<GisueResponse> handleAllExceptions(Exception ex, WebRequest request) {
        return new ResponseEntity(GisueResponse.getInstance().setError("Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
    }
 
    @ExceptionHandler(NoResultException.class)
    public final ResponseEntity<GisueResponse> handleUserNotFoundException(NoResultException ex, WebRequest request) {
        return new ResponseEntity(GisueResponse.getInstance().setError("Record Not Found"), HttpStatus.NOT_FOUND);
    }
    
	@Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

	    BindingResult result = ex.getBindingResult();
	    List<FieldError> fieldErrors = result.getFieldErrors();

		List<Map> list = new ArrayList();
		for (FieldError ef : fieldErrors) {
	    	Map<String, String> node = new HashMap();
	    	node.put("message", ef.getDefaultMessage());
	    	node.put("field", ef.getField());
	    	node.put("code", ef.getCode());
	    	list.add(node);
        }
        return new ResponseEntity(GisueResponse.getInstance().setData(list).setError("Validation Failed"), HttpStatus.BAD_REQUEST);
    }
}