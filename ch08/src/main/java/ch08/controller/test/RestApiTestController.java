package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RestApiTestController {
	
	
	@RequestMapping("/test/rest")
	public String test() {
		return "rest-test";
	}
	
}
