var Animation = function () {
    var allAnimations = ["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","heartBeat"]
    var count = 0;
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
            // allAnimations.forEach(function (animation, index){
                // console.log(animation, index)
                $('.step5').removeAttr("style").addClass('animated ' + allAnimations[count]);
                $('h1.step5').html('<h1>Number ' + [count] + ': ' + allAnimations[count] + '</h1>');

                count ++;
            // })
        })
        $('.btn-input').click(function () {
            animationIn = 'slideInUp';
            if ($('#input1').valid()) {
                $('.dropdown').removeAttr('style').addClass('animated ' + animationIn);
            }
        })
        $('select').change(function () {
            animationIn = 'zoomIn';
                $('.radiobutton').removeAttr('style').addClass('animated ' + animationIn);
        })
        $("input[type=radio]").click(function () {
            animationIn = 'flipInY';
                $('.submit').removeAttr('style').addClass('animated ' + animationIn);
        })
    }
    return {
        init: function () {
            AnimationStepEffect();
        }
    }
}();   