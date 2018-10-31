(()=>{
const topEl = document.querySelector("#beer1");

// define a waypoint and have somthing happen on scroll 
var waypoint = new Waypoint({
  element: document.querySelector('#beer2').querySelector('.svg-graphic'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!');
  }
});

function runAnimation(parent, elements) {
    //should run on a waypoint
    console.log("run animation here");


    let innerSVG = parent.contentDocument;

    //set up animation properties
    let animProps = { };

    switch (parent.id) {
        case "bottle":
        animProps = {scaleX: 1.2, scaleY: 1.2, rotation: 360, trasformOrigin:"50% 50%"};
        break; 

        case "glasses":
        animProps = {scaleX: 1.2, scaleY: 1.2, trasformOrigin:"50% 50%"};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation green sock
    elements.forEach(item=> {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.to(target, 0.6, animProps);
    });
}

topEl.addEventListener("mouseover",function() {
    runAnimation(this.querySelector(".svg-grahic"),["lStar", "rStar"]);
});
})();