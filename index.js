// Smooth Scrolling 
//         -> Attach loco scroll css
//         -> Attach some js code from locomotive js github
//         -> Attach locomotive scroll min js


// GSAP -> greensock animation platform
//      Attach gsap cdn to html with the help of script tag 




const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 1,
            delay: -1,
            stagger: .2
        })

        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })

}



function changeScale(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector("#mincircle").style.transform = `scale{${xscale},${yscale}}`;
    })
}

function circleChaptaKaro() {
    // Define default scale values
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        changeScale(xscale, yscale);

    });
}

circleChaptaKaro();

function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();



document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;

    elem.addEventListener("mouseleave",function(dets){ 
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration: 0.5
        })
       
    })

    elem.addEventListener("mousemove",function(dets){
        var diff=dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        })
       
    })
})