$(function () {
    $(window).on('resize', function () {
        var $clientW = $(window).width();
        var isShowBigImage = $clientW >= 640;
        var $allItems = $('#lk_carousel .item');
        $allItems.each(function (index, item) {
            var src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
            var imgUrl = 'url("' + src + '")';
            isShowBigImage && $(item).css({
                backgroundImage: imgUrl
            });

            if (!isShowBigImage) {
                var $img = document.createElement('img');
                $img.src = src;
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }

        });
    });

    //调用已存在的事件
    $(window).trigger('resize');
    //工具提示
    $('[data-toggle="tooltip"]').tooltip();

    //动态处理宽度
    $(window).on('resize', function () {
        let $ul = $("#lk_product .nav");
        let $allLis = $("[role = 'presentation']", $ul);
        // console.log($allLis);
        let totalW = 0;
        $allLis.each(function (index, item) {
            totalW += $(item).width();
        });

        let parentW = $ul.parent().width();
        if (totalW > parentW) {
            $ul.css({
                width: totalW + 'px'
            })
        } else {
            $ul.removeAttr("style");
        }

    });

    //导航处理
    var navLis = $("#lk_nav li");
    //滚动动画
    function bindScroll(id) {
        return $('html,body').animate({ scrollTop: $(id).offset().top }, 1000);
    }

    $(navLis[2]).on("click", function () {
        bindScroll("#lk_hot");
    });

    $(navLis[0]).on("click", function () {
        bindScroll("#lk_about");
    });
    //调用已存在的事件
    $(window).trigger('resize');

});