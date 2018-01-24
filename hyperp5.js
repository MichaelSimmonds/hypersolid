
var MIKE = 0.003;

    //p5.js stuff
function setup() {
    createCanvas(1,1);
  
    // Create an Audio input
    mic = new p5.AudioIn();
  
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
  }
  
  function draw() {
    // Get the overall volume (between 0 and 1.0)
    var vol = mic.getLevel();
    MIKE = vol*2
  }
  
  new p5();
  //ENDS p5.js Stuff

  
(function() {
  var simplex = Hypersolid.Simplex();
  var simplexView = Hypersolid.Viewport(simplex, document.getElementById('simplex-canvas'), {
          width: 280,
          height: 280,
          scale: 2,
          lineWidth: 3,
          lineJoin: 'round'
      });	
  simplexView.draw();

  var cube = Hypersolid.Hypercube();
      var cubeView = Hypersolid.Viewport(cube, document.getElementById('hypercube-canvas'), {
          width: 280,
          height: 280,
          scale: 2,
          lineWidth: 3,
          lineJoin: 'round'
  });
  cubeView.draw();

  var cross = Hypersolid.Cross();
      var crossView = Hypersolid.Viewport(cross, document.getElementById('cross-canvas'), {
          width: 280,
          height: 280,
          scale: 2,
          lineWidth: 3,
          lineJoin: 'round'
  });
  crossView.draw();

  var icosite = Hypersolid.Icositetrachoron();
      var icositeView = Hypersolid.Viewport(icosite, document.getElementById('24cell-canvas'), {
          width: 280,
          height: 280,
          scale: 2,
          lineWidth: 3,
          lineJoin: 'round'
  });
  icositeView.draw();	



  // animation
  options = document.getElementById('hypercube-options');
  function render() {
    if (options) {
      checkboxes = options.getElementsByTagName('input');
    }
    if (options.rotate_xz.checked) {
      rotate("xz", MIKE);
    }
    if (options.rotate_yz.checked) {
      rotate("yz", MIKE);
    }
    if (options.rotate_xw.checked) {
      rotate("xw", MIKE);
    }
    if (options.rotate_yw.checked) {
      rotate("yw", MIKE);
    }
    if (options.rotate_xy.checked) {
      rotate("xy", MIKE);
    }
    if (options.rotate_zw.checked) {
      rotate("zw", MIKE);
    }

    
  };

  function rotate(plane, x) {
    simplex.rotate(plane, x);
    simplexView.draw();
    cube.rotate(plane, x);
    cubeView.draw();
    cross.rotate(plane, x);
    crossView.draw();
    icosite.rotate(plane, x);
    icositeView.draw();
  };

  // shim layer with setTimeout fallback
  window.requestAnimFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };

  (function animloop(){
    requestAnimFrame(animloop);
    render();
    
  })();
})();