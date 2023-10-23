var imageViewer ={
	init: function(){
		var isSlideShow = false;
		var _this = this;
		$('#btn-change').click(function(){
			_this.changeImage();
		});
		$('#btn-slideshow').click(function(){
			isSlideShow = !isSlideShow;
			$(this).text(isSlideShow ? '슬라이드쇼 중지':'슬라이드쇼 시작');
			if (isSlideShow){
				_this.startSlideShow();
			}else{
				_this.stopSlideShow();
			}
		});
	},
	_images : [ 
		"국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg" 
	],
	changeImage: function(){
		var index = Math.floor( Math.random() * (this._images.length-1)  ) + 1;
		var info = this._images[index].split(":");
		
		$('#image').attr("src", '/ch07/images/' + info[1]);
		$('#image').attr("alt", info[0]);
		console.log(info[0], info[1]);
	},
	slideShow:null,
	startSlideShow: function(){
		var _this = this;
		this.slideShow = setInterval(function(){
			_this.changeImage();
		}, 1000);		
	},
	stopSlideShow: function(){
		clearInterval(this.slideShow);
	}
}