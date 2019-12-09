;(function ($) {
    'use strict';
    $.fn.extend({
        fade (options) {
            // 通过解构赋值获取轮播图的参数
            var { imgs, points, autoplay, delay, current, duration } = options
            // 为可选参数设置默认值
            autoplay = autoplay === false ? false : true // 自动轮播
            delay = delay || 3000 // 自动轮播的时长
            current = current || 0 // 默认显示的是哪一个图片
            duration = duration || 300 // 每次动画时长
            // 获取图片的个数
            var len = imgs.length;

            // 默认的图片显示
            ani(current)

            // 显示小圆点 并且给默认的图片对应的小圆点加样式
            for (var i = 0; i < len; i++) {
                points.append('<li></li>')
            }
            points.find('li').eq(current).addClass('active').siblings().removeClass('active')

            // 自动轮播
            var timer = null;
            if (autoplay) {
                timer = setInterval(function () {
                    current++;
                    if (current === len) {
                        current = 0
                    }
                    ani(current)
                }, delay)
            }

            // 小圆点点击切换
            points.find('li').on('click', function () {
                current = $(this).index()
                ani(current)
            })

            // 封装动画的函数
            function ani (current) {
                points.find('li').eq(current).addClass('active').siblings().removeClass('active')
                imgs.eq(current).stop().fadeIn(duration).siblings().stop().fadeOut(duration)
            }
        }
    })
})(jQuery);