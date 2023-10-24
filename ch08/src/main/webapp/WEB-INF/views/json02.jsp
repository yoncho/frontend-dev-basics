<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
//DOM Load Event
// 1. load 			  : dom과 cssom, image 다 로딩되었을 때
// 2. DomContentLoaded: dom만 로딩되었을 때
window.addEventListener('DOMContentLoaded', function(){
	document
		.getElementsByTagName('button')[0]
		.addEventListener('click', function(){
			var xhr = new XMLHttpRequest();
			
			xhr.addEventListener('readystatechange', function(){
				if(this.readState === XMLHttpRequest.UNSENT){ // readstate = 0
					/* request가 초기화 되기 전*/
					console.log("state:unsent");
				}else if (this.readState === XMLHttpRequest.OPENED){ // readstate = 1
					/* 서버와 연결 성공*/
					console.log("state:opened");
				}else if (this.readState === XMLHttpRequest.HEADERS_RECEIVED){ // readstate = 2
					/* 서버가 request를 받음*/
					console.log("state:header-received");
				}else if (this.readState === XMLHttpRequest.LOADING){ // readstate = 3
					/* response를 처리 중*/
					console.log("state:loading");
				}else if (this.readState === XMLHttpRequest.DONE){ // readstate = 4
					/* response를 처리 끝*/
					console.log("state:done");
				
					console.log(this.status);
					if(this.status !== 200){
						console.error(this.state);
						return;
					}
					
					console.log(this.responseText, typeof(this.responseText));
					var response = JSON.parse(this.responseText);
					
					if(response.result !== "success"){
						console.error(response.message);
						return;
					}
					
					var vo = response.data;
					var htmls = "";
					htmls += ("<h3>" + vo.no + "</h3>");
					htmls += ("<h4>" + vo.name + "</h4>");
					htmls += ("<h5>" + vo.contents + "</h5>");
					
					document.getElementById('data').innerHTML = htmls;
					console.log(response);
				}
			});
			
			xhr.open('get', '${pageContext.request.contextPath}/api/json', true/*async*/); 
			xhr.send();
		});
});
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data: XMLHttpRequest 직접 사용하기 </h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>