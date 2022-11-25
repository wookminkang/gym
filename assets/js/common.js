


// 메인 유저 이미지 클릭시 
function mainUserClickMoreBtnCss()
{
    $(".userMoreBox").addClass("show");
}

function mainUserClickMoreBtnCss_remove()
{
    $(".userMoreBox").removeClass("show");
}

// 메인 더보기 클릭시
function mainMoreBtnCss()
{
    $(".moreBtn_list").addClass("show");
}

function mainMoreBtnCss_remove()
{
    $(".moreBtn_list").removeClass("show");
}



// 메인페이지 회원 몸무게 목표
function userWeight()
{
    $(function() {
        $('.chart').easyPieChart({
          // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
          barColor: '#fff',
          // The color of the track for the bar, false to disable rendering.
          trackColor: '#444',
          // The color of the scale lines, false to disable rendering.
          scaleColor: '#dfe0e0',
          // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
          lineCap: 'round',
          // Width of the bar line in px.
          lineWidth: 5,
          // Size of the pie chart in px. It will always be a square.
          size: 160,
          // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
          animate: 2000,
          // Callback function that is called at the start of any animation (only if animate is not false).
          onStart: $.noop,
          // Callback function that is called at the end of any animation (only if animate is not false).
          onStop: $.noop
        });
        $('.updatePieCharts').on('click', function(e) {
          e.preventDefault();
          var newValue = Math.floor(100 * Math.random());
          $('.chart').data('easyPieChart').update(newValue);
          $('span', $('.chart')).text(newValue);
        });
      });
}



// 사진 업로드
var setPreview = function (opt){
	var inputFile = opt.inputFile.get(0);
	var img = opt.img.get(0);
	// FileReader
	if (window.FileReader) {
	// image 파일만
	if (!inputFile.files[0].type.match(/image\//)) return;
	// preview
	try {
		var reader = new FileReader();
		reader.onload = function(e){
		img.src = e.target.result;
		// img.style.width  = opt.w + 'px';
		// img.style.height = opt.h + 'px';
		img.style.display = '';
		}
		reader.readAsDataURL(inputFile.files[0]);
	} catch (e) {
	// exception...
	}
	// img.filters (MSIE)
	} else if (img.filters) {
	inputFile.select();
	inputFile.blur();
	var imgSrc = document.selection.createRange().text;

	img.style.width  = opt.w + 'px';
	img.style.height = opt.h + 'px';
	img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";
	img.style.display = '';
	// no support
	} else {
	// Safari5, ...
	}
}

$(function(){
	$('.img_upload').change(function(){
		var opt = {
			inputFile: $(this),
			img: $($(this).attr('img_target')),
			w: $($(this).attr('img_target')).width(),
			h: $($(this).attr('img_target')).height()
		};
		setPreview(opt);
	});
});



// 자주 묻는 질문 아코디언 메뉴 활성화
function accordion ()
{
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		
		if (panel.style.display === "block") {
		panel.style.display = "none";
		} else {
		panel.style.display = "block";
		}
	});
	}
}