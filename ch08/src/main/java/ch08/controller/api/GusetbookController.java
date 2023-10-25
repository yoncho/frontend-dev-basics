package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GusetbookController {
	
	@PostMapping
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		vo.setNo(1);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@GetMapping
	public JsonResult ex02(Long sno) {
		List<GuestbookVo> list = new ArrayList<>();
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(10);
		vo1.setName("dooly1");
		vo1.setContents("hello hoiit!!");
		list.add(vo1);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(10);
		vo2.setName("dooly2");
		vo2.setContents("hello123123132");
		list.add(vo2);
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(10);
		vo3.setName("dooly3");
		vo3.setContents("hello wadfsafsdafsaf");
		list.add(vo3);
		
		return JsonResult.success(list);
	}
	
}
