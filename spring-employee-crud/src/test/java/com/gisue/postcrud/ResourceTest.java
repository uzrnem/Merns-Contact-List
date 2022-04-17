package com.gisue.postcrud;

import static org.hamcrest.CoreMatchers.any;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import com.gisue.postcrud.controller.HomeController;
import com.gisue.postcrud.model.Employee;
import com.gisue.postcrud.service.EmployeeService;

@SpringBootTest
public class ResourceTest {

    @Test
    public void testHomeController() {
        HomeController homeController = new HomeController();
        String result = homeController.home();
        assertEquals(result, "Hello World!");
    }

    @Test
    public void testMockito() {
    	String expectedResult = "Hello World!";
    	EmployeeService service = Mockito.mock(EmployeeService.class);

		when(service.test()).thenReturn(expectedResult);
        HomeController homeController = new HomeController();
        assertEquals(homeController.home(), expectedResult);
    }

    @SuppressWarnings("deprecation")
	@Test
    public void testAdd() {
    	Employee e = mock(Employee.class);
    	EmployeeService service = Mockito.mock(EmployeeService.class);
		when(service.save(any())).thenReturn(true);
        HomeController homeController = new HomeController();
        assertEquals(homeController.add(), "Added");
    }
}