$(function () {
        var initNo = 1;
        var sWidth = 120;
        var sHeight = 458;
        var lWidth = 360;
        var lHeight = 500;

        //初始化
        function init(){
            var $midDiv = $('#item'+initNo);
            $midDiv.addClass('on').css({
                width: lWidth,
                height: lHeight,
                marginTop: (sHeight-lHeight)/2
            });
            $midDiv.find('.s-mask').hide();
            $midDiv.find('.s-pic').show();
        }

        function animate (index) {
            var $midDiv = $('#item'+index);
            $midDiv.find('.s-mask').fadeOut();
            $midDiv.find('.s-pic').fadeIn();
            $midDiv.addClass('on').stop().animate({
                width: lWidth,
                height: lHeight,
                marginTop: (sHeight-lHeight)/2
            },500).siblings($midDiv).removeClass('on').stop().animate({
                width: sWidth,
                height: sHeight,
                marginTop: 0
            },500,function(){
                $(this).find('.s-pic').fadeOut();
                $(this).find('.s-mask').fadeIn();
            });
        }
        init();
        $('.s-item').hover(function(){
            var divID = $(this).attr('id');
            var idNo = parseInt( divID.substring(divID.length-1,divID.length) );
            animate(idNo);
        })
    });