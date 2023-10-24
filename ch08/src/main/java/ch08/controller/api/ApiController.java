package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 안녕 : )";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>ajax 연습</h1><p> html 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1);
		vo.setName("yoncho");
		vo.setContents("dd");
		
		return JsonResult.success(vo);
	}
}
