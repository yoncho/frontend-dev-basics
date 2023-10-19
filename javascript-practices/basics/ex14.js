/**
 * URL 다루기
 * 
 * 
 */

var url = "http://www.naver.com/user?name=둘리&email=dooly@naver.com";

// 예1) 리다이렉트
//  window.location.href = url; 
// 예2) ajax통신
//      $.ajax(url)
//      fetch(url, {option... })
//      

//1. escape: URL 전부를 encoding 사용(x), deprecated
var url2 = escape(url);
console.log(url2);

//2. encodeURI: URL 전체 중 파라미터만 encoding한다. url 전체를 encoding 해야 하는 경우(o) 
var url3 = encodeURI(url);
console.log(url3);

//3. encodeURIComponent: URL 중에 값만 encoding해야하는 경우 사용한다.
var url4 = encodeURIComponent(url);
console.log(url4);

//4. encodeURIComponent 사용 예
// 만들어야 하는 url = "http://www.naver.com/user?name=둘리&email=dooly@naver.com";

var url = "http://www.naver.com/user";
var formData = {
    name: "둘리",
    email: "dooly@naver.com"
}

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));
console.log(`${url}?${toQueryString(formData)}`);
