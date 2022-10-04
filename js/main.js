$(document).ready(function(){
    initialPos();
    animateDiv();


});
function initialPos(){

    // Get viewport dimensions (remove the dimension of the div)
    var gx = 320;
    var gy = 320;

    var gnx = Math.floor(Math.random() * gx);
    var gny = Math.floor(Math.random() * gy);

    $('.ghost').css('top', gny + 50);
    $('.ghost').css('left', gnx + 50);
}

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}


function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.ghost').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.ghost').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });
};
