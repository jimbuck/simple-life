var content = [];

Crafty.scene("loading", function () {
	console.log('Loading...');
	// Preload content...
  if(content.length > 0){
	  Crafty.load(content, function () {
	    Crafty.scene("main"); //when everything is loaded, run the main scene
	  });
	  
	  // Black background with 'Loading' text.
	  Crafty.background("#000");
	  Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 120 })
	    .text("Loading")
		  .css({ "text-align": "center" });

  } else {
    Crafty.scene("main");
  }

  
});