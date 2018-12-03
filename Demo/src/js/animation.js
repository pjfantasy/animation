var Animation = function () {
    var animationIn = '';
    var animationOut = '';
    var animationEnd = (function (el) {
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.createElement('div'));

    function AnimationStepEffect() {
        $('.btn1').click(function () {
            animationIn = 'fadeIn';
            $('.step2').removeAttr("style").addClass('animated ' + animationIn);
        })
        $('.btn2').click(function () {
            animationIn = 'bounceInDown';
            $('.step3').removeAttr("style").addClass('animated ' + animationIn);
        })
        $('.btn3').click(function () {
            animationIn = 'flash';
            $('.step4').removeAttr("style").addClass('animated ' + animationIn);
        })
        $('.btn4').click(function () {
            animationIn = 'fadeInLeft';
            $('.step5').removeAttr("style").addClass('animated ' + animationIn);
        })
    }

    return {
        init: function () {
            AnimationStepEffect();
        }
    }
}();   