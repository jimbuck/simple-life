var content = [];

Crafty.scene("loading", function () {

	// Preload content...
  if(content.length > 0){
	  Crafty.load(content, function () {
	    Crafty.scene("main"); //when everything is loaded, run the main scene
	  });
	  
	  // Black background with 'Loading' text.
	  Crafty.background("#000");
	  Crafty.e("2D, "+renderMethod+", Text").attr({ w: 100, h: 20, x: 150, y: 120 })
	    .text("Loading")
		  .css({ "text-align": "center" });

  } else {
    Crafty.scene("main");
  }

  
});