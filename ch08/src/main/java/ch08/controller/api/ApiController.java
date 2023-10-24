package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping(value="/text", method=RequestMethod.GET)
	public String text() {
		return "Text 안녕 : )";
	}
	
	@ResponseBody
	@RequestMapping(value="/html", method=RequestMethod.GET)
	public String html() {
		return "<h1>ajax 연습</h1><p> html 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1);
		vo.setName("yoncho");
		vo.setContents("dd");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post01", method=RequestMethod.POST)
	public JsonResult post01(GuestbookVo vo) {
		//service -> repository : db insert 성공한 후, | 어떤 상황이든 꼭 json 응답해줘야함
		vo.setNo(1);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method=RequestMethod.POST)
	public JsonResult post02(@RequestBody GuestbookVo vo) {
		//service -> repository : db insert 성공한 후, | 어떤 상황이든 꼭 json 응답해줘야함
		vo.setNo(1);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
