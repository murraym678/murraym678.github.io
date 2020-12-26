(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DRAGNDROP_atlas_1", frames: [[0,0,200,200],[0,202,200,200],[0,404,200,200],[0,606,200,200],[0,808,200,200],[202,0,200,200],[202,202,200,200],[202,404,200,200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.banane = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carotte = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fraise = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.kiwi = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.orange = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.poire = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pomme = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.prune = function() {
	this.initialize(ss["DRAGNDROP_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.hitArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D05DC4").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape.setTransform(34.475,34.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hitArea, new cjs.Rectangle(0,0,69,69), null);


(lib.dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D05DC4").s().p("Ah0B6IAAjzIDqAAIAADzg");
	this.shape.setTransform(1.75,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(-10,-12,23.5,24.5), null);


(lib.backetBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AuoglQO3iQOaB7QjUBYjYAqQjhAtj8gBQnAgDoIiWg");
	this.shape.setTransform(0.025,0.018);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#483021").s().p("AAgB0QnAgDoIiWQO3iQOaB7QjUBYjYAqQjcAsj2AAIgLAAg");
	this.shape_1.setTransform(0.025,0.018);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backetBack, new cjs.Rectangle(-94.7,-12.5,189.5,25.1), null);


(lib.strawberry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-14.75,-12.7);
	this.dot.alpha = 0.0117;

	this.instance = new lib.fraise();
	this.instance.setTransform(-50,-50,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.strawberry, new cjs.Rectangle(-50,-50,75,75), null);


(lib.plum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-14.75,-12.7);
	this.dot.alpha = 0.0117;

	this.instance = new lib.prune();
	this.instance.setTransform(-50,-50,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plum, new cjs.Rectangle(-50,-50,75,75), null);


(lib.pear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-14.75,-12.7);
	this.dot.alpha = 0.0117;

	this.instance = new lib.poire();
	this.instance.setTransform(-50,-50,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pear, new cjs.Rectangle(-50,-50,75,75), null);


(lib.orange_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-1.75,0.3);
	this.dot.alpha = 0.0117;

	this.instance = new lib.orange();
	this.instance.setTransform(-37.5,-37.5,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orange_1, new cjs.Rectangle(-37.5,-37.5,75,75), null);


(lib.kiwi_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-14.75,-12.7);
	this.dot.alpha = 0.0117;

	this.instance = new lib.kiwi();
	this.instance.setTransform(-50,-50,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kiwi_1, new cjs.Rectangle(-50,-50,75,75), null);


(lib.carrot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-14.75,-12.7);
	this.dot.alpha = 0.0117;

	this.instance = new lib.carotte();
	this.instance.setTransform(-50,-50,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carrot, new cjs.Rectangle(-50,-50,75,75), null);


(lib.basket = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hitArea
	this.hitBox = new lib.hitArea();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(-18.2,-21,2.5272,0.7621,0,0,0,34.3,42.6);
	this.hitBox.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitBox).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape.setTransform(-23.0121,-18.6489);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F20").s().p("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");
	this.shape_1.setTransform(-23.0121,-18.6489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.basket, new cjs.Rectangle(-119.5,-80.2,193,123.2), null);


(lib.banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(36.25,38.3);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// banane.png
	this.instance = new lib.banane();
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.banana, new cjs.Rectangle(0,0,75,75), null);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(-11.5,-7.45);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// pomme.png
	this.instance = new lib.pomme();
	this.instance.setTransform(-50,-50,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apple, new cjs.Rectangle(-50,-50,75,75), null);


// stage content:
(lib.DRAGNDROP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// make sure that the movieclips inside your draggable
		// items and your droppable items are not 0% oppacity
		// or they will not be "seen"and the drop will not work.
		
		createjs.Touch.enable(stage);
		// ******************** SET THE ITEM NAMES IN 2 ARRAY *************
		// there is one array for the elements to go on the left
		// and one array for the elements to go on the right
		// each item has the dot symbol included
		// each basket is an instance of the basket symbol that includes
		// the hitBox symbol
		//****************** ROUND ITEMS **********************************
		var roundItems = [this.apple, this.strawberry, this.orange, this.kiwi, this.pear, this.plum];
		var longItems = [this.banana, this.carrot]
		var score = 0;
		// we apply the same code for each symbol with the for loop
		for(var i = 0; i<roundItems.length; i++){	
			roundItems[i].on("mousedown", onMouseDown.bind(this));
			roundItems[i].on("pressmove", onMouseMove.bind(this));
			roundItems[i].on("pressup", onMouseUp.bind(this));
			roundItems[i].basket1 = this.basket2;
			roundItems[i].originX = roundItems[i].x;
			roundItems[i].originY = roundItems[i].y;
		}
		
		//****************** LONG *******************************
		for(var i = 0; i<longItems.length; i++){
			longItems[i].on("mousedown", onMouseDown.bind(this));
			longItems[i].on("pressmove", onMouseMove.bind(this));
			longItems[i].on("pressup", onMouseUp.bind(this));
			longItems[i].basket1 = this.basket1;
			longItems[i].originX = longItems[i].x;
			longItems[i].originY = longItems[i].y;
		}
		// mouse down event
		function onMouseDown(evt){
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
		// mouse up event
		function onMouseUp(evt){
			var item = evt.currentTarget;
			item.drag = false;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.basket1.hitBox);
			if(item.basket1.hitBox.hitTest(pt.x, pt.y) ){
				item.x = item.basket1.x;
				item.y = item.basket1.y;
				score++;
				this.score.text = "score:" + score;
				item.mouseEnabled = false;   // prevents object from being move when place correctly
			}else{
				item.x = item.originX;
				item.y = item.originY;
			}
		}
		// mouse move event
		function onMouseMove(evt){
			var item = evt.currentTarget;
			if (item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.score = new cjs.Text("Score", "28px 'Arial'", "#483021");
	this.score.name = "score";
	this.score.lineHeight = 30;
	this.score.parent = this;
	this.score.setTransform(206.05,444.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AgEmZIAJAAIAAMzIgJAAg");
	this.shape.setTransform(165.55,653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD5CFC").s().p("AgEGaIAAszIAJAAIAAMzg");
	this.shape_1.setTransform(165.55,653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.score}]}).wait(1));

	// basketFont
	this.basket1 = new lib.basket();
	this.basket1.name = "basket1";
	this.basket1.setTransform(136.6,209.5,1,1,0,0,0,-33,-74.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#388158").s().p("AgNAPIAAgdIAbAAIAAAdg");
	this.shape_2.setTransform(86.725,441.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABfQAAAHAFADQADACAGgBIAFAAIAEAAIAAATIgJACIgKABQgPAAgHgJg");
	this.shape_3.setTransform(78.85,433.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#388158").s().p("AAiBlIAAhdQAAgPgEgHQgGgMgTAAQgOAAgNAKQgMALAAAcIAABOIgZAAIAAjJIAZAAIAABLQAJgLAHgEQAMgIAQAAQAgAAAMAWQAGAMAAAVIAABeg");
	this.shape_4.setTransform(67.375,432.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#388158").s().p("AgoBfQgQgLgCgXIAZAAQABALAFAFQAJAIARAAQAcAAAIgUQAGgLgBgfQgHAMgLAFQgKAGgQgBQgXAAgTgQQgRgSAAgmQAAgkASgVQARgUAaAAQAQgBANAJQAHAEAHAKIAAgTIAXAAIAACFQAAAcgIAQQgPAdgqAAQgYAAgPgKgAghg6QgFANAAAVQAAAYAKANQAKAMARAAQAaAAAKgXQAGgOAAgRQAAgbgLgNQgLgOgRAAQgZAAgKAZg");
	this.shape_5.setTransform(51.3,438.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#388158").s().p("AgLBkIAAiQIAXAAIAACQgAgLhIIAAgbIAXAAIAAAbg");
	this.shape_6.setTransform(40.9,432.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#388158").s().p("AgjBLIAAiSIAYAAIAAAaQADgIAKgKQALgLAPAAIACAAIAGABIAAAaIgEgBIgEAAQgTAAgJAMQgKAMAAAQIAABTg");
	this.shape_7.setTransform(33.975,435.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#388158").s().p("AgvA6QgSgUgBgkQABgiASgWQATgWAfAAQAPAAAOAHQAPAHAIAMQAHALADAPQACAKAAAVIhqAAQABAWAJAOQALANATAAQATAAALgMQAHgIADgKIAYAAQgCAIgFAKQgFAKgHAGQgLALgQAEQgKACgKAAQgaAAgUgTgAApgMQgBgQgGgJQgJgSgYAAQgQAAgMAMQgKAMgCATIBQAAIAAAAg");
	this.shape_8.setTransform(474.3,405.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#388158").s().p("AAiBlIAAhdQAAgPgEgHQgGgMgTAAQgOAAgNAKQgMALAAAcIAABOIgZAAIAAjJIAZAAIAABLQAJgLAHgEQAMgIAQAAQAgAAAMAWQAGAMAAAVIAABeg");
	this.shape_9.setTransform(458.925,402.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAGABIAFAAIAEgBIAAAUIgJABIgKABQgQAAgGgJg");
	this.shape_10.setTransform(447.1,403.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#388158").s().p("AAjBLIAAhcQAAgNgEgIQgHgOgRAAQgIAAgFACQgLADgHAJQgGAHgCAIQgCAIAAAOIAABMIgZAAIAAiSIAYAAIAAAVQAKgNAMgFQALgGAOAAQAfAAALAWQAGAMAAAWIAABdg");
	this.shape_11.setTransform(427.875,405.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#388158").s().p("AgxA6QgSgVAAgiQAAgkATgWQATgWAeAAQAcAAATATQAUATAAAkQAAAjgRAXQgRAXgjAAQgeAAgSgUgAgfgmQgKARAAAXQAAAYAKAPQAKAQAVAAQAYAAAJgTQAJgSAAgWQAAgUgGgNQgLgUgZAAQgVAAgKARg");
	this.shape_12.setTransform(412.125,405.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAGABIAFAAIAEgBIAAAUIgJABIgKABQgQAAgGgJg");
	this.shape_13.setTransform(392.75,403.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#388158").s().p("AguA6QgUgUABgkQgBgiAUgWQASgWAeAAQAQAAAPAHQAOAHAHAMQAIALACAPQACAKAAAVIhpAAQABAWAKAOQAJANAUAAQATAAALgMQAHgIACgKIAYAAQAAAIgGAKQgFAKgHAGQgLALgRAEQgJACgJAAQgcAAgSgTgAAqgMQgCgQgFgJQgLgSgXAAQgQAAgLAMQgLAMgBATIBQAAIAAAAg");
	this.shape_14.setTransform(381.1,405.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#388158").s().p("AAdBlIgthLIgUAUIAAA3IgYAAIAAjIIAYAAIAAB0IA+g+IAgAAIg5A2IA8Bcg");
	this.shape_15.setTransform(367.325,402.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#388158").s().p("AgtBAQgOgQgBgVIAXAAQACAMAFAHQAJAMAXgBQAOAAAKgFQALgHAAgMQAAgKgJgEQgFgEgQgEIgTgEQgTgFgJgFQgQgJAAgTQAAgUAPgNQAPgNAaAAQAgAAAPATQAJANAAAOIgXAAQgBgIgFgHQgJgKgUABQgOgBgIAGQgHAFAAAJQAAAJAKAGQAFADALADIAQAEQAbAGAJAGQAOAJAAAUQAAATgPAPQgPAOgfAAQggAAgNgOg");
	this.shape_16.setTransform(352.525,405.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#388158").s().p("Ag3BBQgNgNAAgSQAAgUANgMQAMgKAVgCIAmgFQAJgBADgGQABgDAAgHQAAgNgJgFQgJgGgPABQgTAAgJAKQgEAFgBAMIgXAAQAAgbARgLQARgLAWAAQAZABAQAJQAQAKAAAVIAABTQAAAEACADQABACAFAAIAEgBIAEAAIAAASIgIACIgIAAQgNABgGgKQgDgEgBgJQgIAKgOAHQgNAIgRgBQgUAAgNgMgAARADIgOACIgOADQgNABgHAEQgLAGAAAPQAAAKAHAGQAIAHALgBQANABALgHQAVgJAAgXIAAgTQgFACgHACg");
	this.shape_17.setTransform(337.975,405.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#388158").s().p("AgaBfQgHgEgIgLIAAATIgXAAIAAjJIAYAAIAABJQAIgKAMgGQALgGAMAAQAbAAARATQASATAAAjQAAAjgRAXQgRAXgeAAQgQAAgLgIgAgcgRQgNANAAAcQAAAUAFANQAKAZAagBQATAAAKgQQAKgQAAgZQAAgYgKgOQgKgOgTAAQgQAAgMALg");
	this.shape_18.setTransform(322.475,403.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#388158").s().p("AgvA6QgSgUgBgkQABgiASgWQAUgWAeAAQAPAAAOAHQAPAHAHAMQAIALADAPQACAKAAAVIhqAAQABAWAJAOQAKANAUAAQATAAAMgMQAGgIADgKIAYAAQgCAIgEAKQgGAKgHAGQgLALgRAEQgIACgLAAQgaAAgUgTgAAqgMQgCgQgGgJQgKgSgXAAQgQAAgMAMQgKAMgCATIBRAAIAAAAg");
	this.shape_19.setTransform(298.7,405.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#388158").s().p("AAiBlIAAhdQAAgPgEgHQgGgMgTAAQgOAAgNAKQgMALAAAcIAABOIgZAAIAAjJIAZAAIAABLQAJgLAHgEQAMgIAQAAQAgAAAMAWQAGAMAAAVIAABeg");
	this.shape_20.setTransform(283.325,402.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAGABIAEAAIAFgBIAAAUIgJABIgJABQgRAAgGgJg");
	this.shape_21.setTransform(271.5,403.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#388158").s().p("AgxA6QgSgVAAgiQAAgkATgWQATgWAeAAQAcAAATATQAUATAAAkQAAAjgRAXQgRAXgjAAQgeAAgSgUgAgfgmQgKARAAAXQAAAYAKAPQAKAQAVAAQAYAAAJgTQAJgSAAgWQAAgUgGgNQgLgUgZAAQgVAAgKARg");
	this.shape_22.setTransform(252.075,405.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAHABIADAAIAFgBIAAAUIgIABIgKABQgQAAgHgJg");
	this.shape_23.setTransform(240.45,403.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#388158").s().p("AgtBAQgOgQgBgVIAXAAQACAMAFAHQAJAMAXgBQAOAAAKgFQALgHAAgMQAAgKgJgEQgFgEgQgEIgTgEQgTgFgJgFQgQgJAAgTQAAgUAPgNQAPgNAaAAQAgAAAPATQAJANAAAOIgXAAQgBgIgFgHQgJgKgUABQgOgBgIAGQgHAFAAAJQAAAJAKAGQAFADALADIAQAEQAbAGAJAGQAOAJAAAUQAAATgPAPQgPAOgfAAQggAAgNgOg");
	this.shape_24.setTransform(222.025,405.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#388158").s().p("ABJBLIAAhlQAAgPgIgFQgGgGgLAAQgOAAgLAKQgLAKAAAXIAABUIgXAAIAAhfQAAgPgEgHQgGgKgPAAQgOAAgMALQgLALAAAcIAABNIgYAAIAAiSIAYAAIAAAVQAJgLAGgFQANgIAQAAQARAAALAJQAFAFAFAJQAHgMALgFQAMgGAOAAQAdAAALAVQAFAMABATIAABhg");
	this.shape_25.setTransform(203.35,405.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#388158").s().p("AguA6QgUgUABgkQgBgiAUgWQASgWAeAAQAQAAAPAHQAOAHAHAMQAIALACAPQACAKABAVIhqAAQABAWAKAOQAJANAUAAQATAAAMgMQAGgIADgKIAXAAQgBAIgEAKQgGAKgHAGQgLALgRAEQgIACgLAAQgbAAgSgTgAAqgMQgCgQgGgJQgJgSgYAAQgQAAgMAMQgLAMAAATIBQAAIAAAAg");
	this.shape_26.setTransform(183.75,405.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAHABIAEAAIAEgBIAAAUIgIABIgLABQgPAAgHgJg");
	this.shape_27.setTransform(172.1,403.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#388158").s().p("AgMBlIAAiRIAZAAIAACRgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_28.setTransform(165.25,402.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#388158").s().p("AguBTQgSgVAAgiQAAgfARgXQAQgYAeAAQAQAAALAHQAHAEAIALIAAhKIAYAAIAADIIgWAAIAAgUQgJANgMAGQgLAGgPAAQgYAAgSgUgAgagOQgMAOAAAbQAAAXAKAQQAKAQAVAAQARAAALgPQALgOAAgcQAAgbgLgNQgMgNgQAAQgSAAgLAOg");
	this.shape_29.setTransform(146.125,403.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#388158").s().p("AAjBLIAAhcQAAgNgEgIQgHgOgRAAQgIAAgFACQgLADgHAJQgGAHgCAIQgCAIAAAOIAABMIgZAAIAAiSIAYAAIAAAVQAKgNAMgFQALgGAOAAQAfAAALAWQAGAMAAAWIAABdg");
	this.shape_30.setTransform(131.125,405.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#388158").s().p("AgzA2QgGgLAAgTIAAhiIAZAAIAABgQAAALAEAHQAGANASAAQAXAAAJgWQAGgNAAgUIAAhIIAYAAIAACRIgXAAIAAgVQgFAIgGAGQgOALgTAAQgfAAgLgVg");
	this.shape_31.setTransform(115.35,405.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#388158").s().p("AgxA6QgSgVAAgiQAAgkATgWQATgWAeAAQAcAAATATQAUATAAAkQAAAjgRAXQgRAXgjAAQgeAAgSgUgAgfgmQgKARAAAXQAAAYAKAPQAKAQAVAAQAYAAAJgTQAJgSAAgWQAAgUgGgNQgLgUgZAAQgVAAgKARg");
	this.shape_32.setTransform(99.825,405.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#388158").s().p("AgjBLIAAiSIAYAAIAAAaQADgIAKgKQALgLAPAAIACAAIAGABIAAAaIgEgBIgEAAQgTAAgJAMQgKAMAAAQIAABTg");
	this.shape_33.setTransform(88.375,405.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#388158").s().p("AguBTQgSgVAAgiQAAgfARgXQAQgYAeAAQAQAAALAHQAHAEAIALIAAhKIAYAAIAADIIgWAAIAAgUQgJANgMAGQgLAGgPAAQgYAAgSgUgAgagOQgMAOAAAbQAAAXAKAQQAKAQAVAAQARAAALgPQALgOAAgcQAAgbgLgNQgMgNgQAAQgSAAgLAOg");
	this.shape_34.setTransform(66.875,403.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#388158").s().p("AAjBLIAAhcQAAgNgEgIQgHgOgRAAQgIAAgFACQgLADgHAJQgGAHgCAIQgCAIAAAOIAABMIgZAAIAAiSIAYAAIAAAVQAKgNAMgFQALgGAOAAQAfAAALAWQAGAMAAAWIAABdg");
	this.shape_35.setTransform(51.875,405.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#388158").s().p("Ag3BBQgNgNAAgSQAAgUANgMQAMgKAVgCIAmgFQAJgBADgGQABgDAAgHQAAgNgJgFQgJgGgPABQgTAAgJAKQgEAFgBAMIgXAAQAAgbARgLQARgLAWAAQAZABAQAJQAQAKAAAVIAABTQAAAEACADQABACAFAAIAEgBIAEAAIAAASIgIACIgIAAQgNABgGgKQgDgEgBgJQgIAKgOAHQgNAIgRgBQgUAAgNgMgAARADIgOACIgOADQgNABgHAEQgLAGAAAPQAAAKAHAGQAIAHALgBQANABALgHQAVgJAAgXIAAgTQgFACgHACg");
	this.shape_36.setTransform(36.575,405.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAGAAIAFAAIAEAAIAAAUIgJACIgKAAQgPAAgHgJg");
	this.shape_37.setTransform(518.5,373.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#388158").s().p("AgNBmIAAh+IgVAAIAAgTIAVAAIAAgXQAAgPAFgHQAIgNAZAAIAEAAIAFABIAAAWIgFAAIgDAAQgMAAgCAFQgCAGAAAYIAYAAIAAATIgYAAIAAB+g");
	this.shape_38.setTransform(510.9,372.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#388158").s().p("AguA6QgUgUABgkQgBgiAUgWQASgWAeAAQAQAAAPAHQAOAHAHAMQAIALACAPQACAKAAAVIhpAAQABAWAKAOQAKANATAAQATAAAMgMQAGgIADgKIAXAAQgBAIgEAKQgGAKgHAGQgLALgRAEQgJACgJAAQgcAAgSgTgAAqgMQgCgQgFgJQgLgSgXAAQgQAAgLAMQgMAMAAATIBQAAIAAAAg");
	this.shape_39.setTransform(499.1,375.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#388158").s().p("AgLBlIAAjJIAYAAIAADJg");
	this.shape_40.setTransform(488.4,372.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#388158").s().p("AguA6QgTgUAAgkQAAgiATgWQASgWAfAAQAPAAAPAHQAOAHAHAMQAIALACAPQADAKAAAVIhqAAQABAWAJAOQAKANAUAAQATAAAMgMQAGgIADgKIAXAAQgBAIgEAKQgGAKgHAGQgLALgRAEQgIACgLAAQgbAAgSgTgAAqgMQgCgQgGgJQgKgSgXAAQgQAAgMAMQgLAMAAATIBQAAIAAAAg");
	this.shape_41.setTransform(469.6,375.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#388158").s().p("AAiBlIAAhdQAAgPgEgHQgGgMgTAAQgOAAgNAKQgMALAAAcIAABOIgZAAIAAjJIAZAAIAABLQAJgLAHgEQAMgIAQAAQAgAAAMAWQAGAMAAAVIAABeg");
	this.shape_42.setTransform(454.225,372.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAHAAIADAAIAFAAIAAAUIgIACIgKAAQgQAAgHgJg");
	this.shape_43.setTransform(442.4,373.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#388158").s().p("AAjBLIAAhcQAAgNgEgIQgHgOgRAAQgIAAgFACQgLADgHAJQgGAHgCAIQgCAIAAAOIAABMIgZAAIAAiSIAYAAIAAAVQAKgNAMgFQALgGAOAAQAfAAALAWQAGAMAAAWIAABdg");
	this.shape_44.setTransform(423.175,375.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#388158").s().p("AgxA6QgSgVAAgiQAAgkATgWQATgWAeAAQAcAAATATQAUATAAAkQAAAjgRAXQgRAXgjAAQgeAAgSgUgAgfgmQgKARAAAXQAAAYAKAPQAKAQAVAAQAYAAAJgTQAJgSAAgWQAAgUgGgNQgLgUgZAAQgVAAgKARg");
	this.shape_45.setTransform(407.425,375.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAHAAIADAAIAFAAIAAAUIgIACIgKAAQgRAAgGgJg");
	this.shape_46.setTransform(388.05,373.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#388158").s().p("AgvA6QgTgUAAgkQAAgiATgWQAUgWAdAAQAQAAAOAHQAPAHAIAMQAHALADAPQABAKAAAVIhpAAQABAWAJAOQALANATAAQATAAALgMQAHgIACgKIAZAAQgBAIgGAKQgFAKgHAGQgLALgQAEQgKACgJAAQgbAAgUgTgAApgMQgBgQgFgJQgKgSgYAAQgQAAgLAMQgMAMgBATIBQAAIAAAAg");
	this.shape_47.setTransform(376.4,375.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#388158").s().p("AAdBlIgthLIgUATIAAA4IgYAAIAAjJIAYAAIAAB0IA+g9IAgAAIg5A1IA8Bdg");
	this.shape_48.setTransform(362.625,372.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#388158").s().p("AgtBAQgOgQgBgWIAXAAQACANAFAHQAJALAXABQAOAAAKgHQALgFAAgNQAAgKgJgEQgFgEgQgDIgTgGQgTgEgJgFQgQgKAAgRQAAgVAPgNQAPgNAaAAQAgAAAPATQAJANAAAOIgXAAQgBgIgFgHQgJgKgUAAQgOABgIAFQgHAFAAAIQAAAKAKAGQAFAEALACIAQAEQAbAGAJAGQAOAJAAAUQAAAUgPAOQgPAOgfAAQggAAgNgOg");
	this.shape_49.setTransform(347.825,375.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#388158").s().p("Ag3BBQgNgNAAgSQAAgUANgLQAMgLAVgCIAmgFQAJgBADgGQABgEAAgFQAAgNgJgGQgJgFgPgBQgTABgJAJQgEAHgBALIgXAAQAAgcARgKQARgKAWAAQAZgBAQAKQAQAKAAAVIAABUQAAADACACQABADAFAAIAEAAIAEgBIAAASIgIACIgIABQgNAAgGgJQgDgFgBgJQgIAKgOAHQgNAHgRAAQgUAAgNgMgAARADIgOACIgOACQgNACgHAEQgLAHAAANQAAALAHAGQAIAHALAAQANAAALgHQAVgKAAgWIAAgTQgFACgHACg");
	this.shape_50.setTransform(333.275,375.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#388158").s().p("AgaBfQgHgFgIgKIAAATIgXAAIAAjJIAYAAIAABJQAIgLAMgFQALgGAMAAQAbAAARATQASATAAAjQAAAjgRAXQgRAXgeAAQgQAAgLgIgAgcgQQgNAMAAAbQAAAWAFAMQAKAZAaAAQATAAAKgQQAKgQAAgbQAAgWgKgPQgKgPgTAAQgQAAgMANg");
	this.shape_51.setTransform(317.775,373.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#388158").s().p("AguA6QgUgUABgkQgBgiAUgWQASgWAeAAQAQAAAPAHQAOAHAHAMQAIALACAPQACAKABAVIhqAAQABAWAKAOQAJANAUAAQATAAAMgMQAGgIADgKIAXAAQgBAIgEAKQgGAKgHAGQgLALgRAEQgIACgKAAQgcAAgSgTgAAqgMQgCgQgGgJQgKgSgXAAQgQAAgMAMQgLAMAAATIBQAAIAAAAg");
	this.shape_52.setTransform(294,375.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#388158").s().p("AAiBlIAAhdQAAgPgEgHQgGgMgTAAQgOAAgNAKQgMALAAAcIAABOIgZAAIAAjJIAZAAIAABLQAJgLAHgEQAMgIAQAAQAgAAAMAWQAGAMAAAVIAABeg");
	this.shape_53.setTransform(278.625,372.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAHAAIADAAIAFAAIAAAUIgIACIgKAAQgRAAgGgJg");
	this.shape_54.setTransform(266.8,373.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#388158").s().p("AgxA6QgSgVAAgiQAAgkATgWQATgWAeAAQAcAAATATQAUATAAAkQAAAjgRAXQgRAXgjAAQgeAAgSgUgAgfgmQgKARAAAXQAAAYAKAPQAKAQAVAAQAYAAAJgTQAJgSAAgWQAAgUgGgNQgLgUgZAAQgVAAgKARg");
	this.shape_55.setTransform(247.375,375.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAHAAIADAAIAFAAIAAAUIgIACIgKAAQgRAAgGgJg");
	this.shape_56.setTransform(235.75,373.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#388158").s().p("AgtBAQgOgQgBgWIAXAAQACANAFAHQAJALAXABQAOAAAKgHQALgFAAgNQAAgKgJgEQgFgEgQgDIgTgGQgTgEgJgFQgQgKAAgRQAAgVAPgNQAPgNAaAAQAgAAAPATQAJANAAAOIgXAAQgBgIgFgHQgJgKgUAAQgOABgIAFQgHAFAAAIQAAAKAKAGQAFAEALACIAQAEQAbAGAJAGQAOAJAAAUQAAAUgPAOQgPAOgfAAQggAAgNgOg");
	this.shape_57.setTransform(217.325,375.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#388158").s().p("ABJBLIAAhlQAAgPgIgFQgHgGgKAAQgPAAgKAKQgLAKAAAXIAABUIgYAAIAAhfQABgPgEgHQgGgKgPAAQgOAAgLALQgMALAAAcIAABNIgYAAIAAiSIAYAAIAAAVQAJgLAGgFQANgIAPAAQASAAAKAJQAFAFAGAJQAHgMAMgFQALgGAOAAQAdAAALAVQAGAMAAATIAABhg");
	this.shape_58.setTransform(198.65,375.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#388158").s().p("AguA6QgUgUABgkQgBgiAUgWQASgWAeAAQAQAAAPAHQAOAHAHAMQAIALACAPQACAKAAAVIhpAAQABAWAKAOQAJANAUAAQATAAALgMQAHgIACgKIAYAAQAAAIgGAKQgFAKgHAGQgLALgRAEQgJACgJAAQgcAAgSgTgAAqgMQgCgQgFgJQgLgSgXAAQgQAAgLAMQgLAMgBATIBQAAIAAAAg");
	this.shape_59.setTransform(179.05,375.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#388158").s().p("AgHBWQgGgJAAgOIAAhgIgUAAIAAgUIAUAAIAAgpIAYAAIAAApIAXAAIAAAUIgXAAIAABeQAAAJAFACQADABAGAAIAFAAIAEAAIAAAUIgJACIgKAAQgPAAgHgJg");
	this.shape_60.setTransform(167.4,373.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#388158").s().p("AgLBlIAAiRIAYAAIAACRgAgLhIIAAgcIAYAAIAAAcg");
	this.shape_61.setTransform(160.55,372.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#388158").s().p("AgoBfQgRgLgBgWIAYAAQACAJAFAGQAJAIASAAQAbAAAIgUQAFgLAAgfQgHALgKAGQgLAFgQABQgYgBgRgQQgSgRAAgmQAAglASgVQARgVAaABQAQAAANAIQAHAFAHAJIAAgTIAXAAIAACEQAAAcgJAQQgOAegqAAQgXABgQgLgAghg7QgFANAAAWQAAAYAKAMQAKANARAAQAZAAALgXQAGgNAAgTQAAgbgLgMQgLgOgSAAQgYAAgKAYg");
	this.shape_62.setTransform(141.45,378.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#388158").s().p("AAjBLIAAhcQAAgNgEgIQgHgOgRAAQgIAAgFACQgLADgHAJQgGAHgCAIQgCAIAAAOIAABMIgZAAIAAiSIAYAAIAAAVQAKgNAMgFQALgGAOAAQAfAAALAWQAGAMAAAWIAABdg");
	this.shape_63.setTransform(126.425,375.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#388158").s().p("AgxA6QgSgVAAgiQAAgkATgWQATgWAeAAQAcAAATATQAUATAAAkQAAAjgRAXQgRAXgjAAQgeAAgSgUgAgfgmQgKARAAAXQAAAYAKAPQAKAQAVAAQAYAAAJgTQAJgSAAgWQAAgUgGgNQgLgUgZAAQgVAAgKARg");
	this.shape_64.setTransform(110.675,375.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#388158").s().p("AgMBlIAAjJIAZAAIAADJg");
	this.shape_65.setTransform(100,372.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#388158").s().p("AgpBfQgQgLgCgWIAaAAQABAJAGAGQAHAIATAAQAbAAAJgUQAEgLAAgfQgHALgLAGQgKAFgQABQgYgBgRgQQgSgRAAgmQAAglASgVQASgVAZABQAQAAANAIQAHAFAHAJIAAgTIAXAAIAACEQAAAcgIAQQgQAegpAAQgYABgQgLgAghg7QgFANAAAWQAAAYAKAMQAKANARAAQAZAAALgXQAGgNAAgTQAAgbgLgMQgLgOgRAAQgaAAgJAYg");
	this.shape_66.setTransform(80.85,378.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#388158").s().p("Ag3BBQgNgNAAgSQAAgUANgLQAMgLAVgCIAmgFQAJgBADgGQABgEAAgFQAAgNgJgGQgJgFgPgBQgTABgJAJQgEAHgBALIgXAAQAAgcARgKQARgKAWAAQAZgBAQAKQAQAKAAAVIAABUQAAADACACQABADAFAAIAEAAIAEgBIAAASIgIACIgIABQgNAAgGgJQgDgFgBgJQgIAKgOAHQgNAHgRAAQgUAAgNgMgAARADIgOACIgOACQgNACgHAEQgLAHAAANQAAALAHAGQAIAHALAAQANAAALgHQAVgKAAgWIAAgTQgFACgHACg");
	this.shape_67.setTransform(66.075,375.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#388158").s().p("AgjBLIAAiSIAYAAIAAAaQADgIAKgKQALgLAPAAIACAAIAGABIAAAaIgEgBIgEAAQgTAAgJAMQgKAMAAAQIAABTg");
	this.shape_68.setTransform(54.175,375.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#388158").s().p("AhRBlIAAjJIBRAAQAnABAXAdQAUAaAAAqQAAAfgMAaQgVAtgyABgAg1BNIAvAAQAMAAAJgCQAQgGAJgPQAJgNADgSQACgMAAgJQAAgkgPgWQgOgUggAAIguAAg");
	this.shape_69.setTransform(39,372.95);

	this.basket2 = new lib.basket();
	this.basket2.name = "basket2";
	this.basket2.setTransform(396.55,209.5,1,1,0,0,0,-33,-74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.basket2},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.basket1}]}).wait(1));

	// orange
	this.orange = new lib.orange_1();
	this.orange.name = "orange";
	this.orange.setTransform(281.05,136.6);

	this.timeline.addTween(cjs.Tween.get(this.orange).wait(1));

	// strawberry
	this.strawberry = new lib.strawberry();
	this.strawberry.name = "strawberry";
	this.strawberry.setTransform(64.05,50.05,1,1,0,0,0,-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.strawberry).wait(1));

	// plum
	this.plum = new lib.plum();
	this.plum.name = "plum";
	this.plum.setTransform(155.05,86.05,1,1,0,0,0,-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.plum).wait(1));

	// pear
	this.pear = new lib.pear();
	this.pear.name = "pear";
	this.pear.setTransform(380,70.4,1,1,0,0,0,-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.pear).wait(1));

	// kiwi
	this.kiwi = new lib.kiwi_1();
	this.kiwi.name = "kiwi";
	this.kiwi.setTransform(64.05,151.6,1,1,0,0,0,-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.kiwi).wait(1));

	// carrot
	this.carrot = new lib.carrot();
	this.carrot.name = "carrot";
	this.carrot.setTransform(465,145.4,1,1,0,0,0,-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.carrot).wait(1));

	// banana
	this.banana = new lib.banana();
	this.banana.name = "banana";
	this.banana.setTransform(255.05,50.05,1,1,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.banana).wait(1));

	// apple
	this.apple = new lib.apple();
	this.apple.name = "apple";
	this.apple.setTransform(481,61.6,1,1,0,0,0,-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

	// basket1
	this.instance = new lib.backetBack();
	this.instance.setTransform(404.7,238.55);

	this.instance_1 = new lib.backetBack();
	this.instance_1.setTransform(146.55,238.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(301.6,262.6,236.89999999999998,432.4);
// library properties:
lib.properties = {
	id: '348202710A9C4D47BD8B5491975C520F',
	width: 550,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/DRAGNDROP_atlas_1.png", id:"DRAGNDROP_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['348202710A9C4D47BD8B5491975C520F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;