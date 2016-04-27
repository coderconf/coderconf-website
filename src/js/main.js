//When screen bigger 700px
if ($(window).width() >= 700) {

    //Follow Eyes
    //Powered by (cdpn.io/CBwhg)
    var DrawEye = function (eyecontainer, pupil, eyeposx, eyeposy, eyer) {
        $('.caricature-page .eyes').append('<div id="' + eyecontainer + '"><div id="' + pupil + '"></div></div>')

        eyecontainer = '#' + eyecontainer;
        pupil = '#' + pupil;

        // $(eyecontainer).css({left: eyeposx, top:eyeposy});
        $(eyecontainer).css({marginLeft: eyeposx, marginTop: eyeposy});
        $(pupil).css({width: eyer * 0.4, height: eyer * 0.4});
        $(eyecontainer).css({width: eyer, height: eyer});
        $(pupil).css({position: 'relative', background: '#000000', 'border-radius': '50%'});
        $(eyecontainer).css({position: 'absolute', background: '#E2DEE9', overflow: 'hidden', 'border-radius': '50%'});
        // $(eyecontainer).css({position:'absolute', border:'1px solid red', overflow:'hidden', 'border-radius': '50%'});
        // $(eyecontainer).css({position:'absolute', overflow:'hidden', 'border-radius': '50%'});

        // Initialise core variables
        var r = $(pupil).width() / 2;
        var center = {
            x: $(eyecontainer).width() / 2 - r,
            y: $(eyecontainer).height() / 2 - r
        };
        var distanceThreshold = $(eyecontainer).width() / 2 - r;
        var mouseX = center.x, mouseY = center.y;

        // Listen for mouse movement
        $(window).mousemove(function (e) {
            // console.log($(eyecontainer).position().left);
            var d = {
                x: e.pageX - r - ($(eyecontainer).position().left + eyeposx ) - center.x,
                y: e.pageY - r - ($(eyecontainer).position().top + eyeposy) - center.y
            };
            var distance = Math.sqrt(d.x * d.x + d.y * d.y);
            if (distance < distanceThreshold) {
                mouseX = e.pageX - eyeposx - r;
                mouseY = e.pageY - eyeposy - r;
            } else {
                mouseX = d.x / distance * distanceThreshold + center.x;
                mouseY = d.y / distance * distanceThreshold + center.y;
            }
        });

        // Update pupil location
        var pupil = $(pupil);

        var xp = center.x, yp = center.y;

        var loop = setInterval(function () {
            // change 1 to alter damping/momentum - higher is slower
            xp += (mouseX - xp) / 2;
            yp += (mouseY - yp) / 2;
            pupil.css({left: xp, top: yp});
        }, 1);
    };
    var eyeLeft = new DrawEye('eyeLeft', 'pupilLeft', 250, 88, 12.5);
    var eyeRight = new DrawEye('eyeRight', 'pupilRight', 278, 80, 12.5);


    //Click animation for caricature When Click on page
    $('.caricature-page').click(function () {
        $('.caricature-page .click').show();
        setTimeout(function () {
            $('.caricature-page .click').hide();
        }, 200);

    });


    //Click animation for caricature every 2 second
    setInterval(function () {
        $('.caricature-page .click').show();
        setTimeout(function () {
            $('.caricature-page .click').hide();
        }, 200);
    }, 2000);

}


$('.languages').mouseenter(function () {
    $('.languages ul .inactive').slideDown();
});
$('.languages').mouseleave(function () {
    $('.languages ul .inactive').slideUp();
});

$('.languages .active a').click(function () {
    $('.languages ul .inactive').slideDown();
    return false;
});










// (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
//     function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
//     e=o.createElement(i);r=o.getElementsByTagName(i)[0];
//     e.src='https://www.google-analytics.com/analytics.js';
//     r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
// ga('create','UA-57178802-2','auto');ga('send','pageview');
