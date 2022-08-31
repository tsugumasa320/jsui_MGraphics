autowatch = 1
mgraphics.init()
mgraphics.relative_coords = 1
mgraphics.autofill = 0

var PI = Math.PI
var SIN = Math.sin 

function paint() {
  var aspect = calcAspect()
  with (mgraphics) {
	for(var i=0; i<180; i++) {
		var next_x = -1.0 * aspect + ((i+1) * 0.025) 
		var next_y = SIN(PI / 18 * (i+1))		
		var x = -1.0 * aspect + (i * 0.025) 
		var y = SIN(PI / 18 * i) //update for y coord (10度づつ)

		move_to(x,y)
		line_to(next_x, next_y)
		stroke()
   	}
  }
}

function calcAspect() {
  var width = this.box.rect[2] - this.box.rect[0]
  var height = this.box.rect[3] - this.box.rect[1]
  return width / height
}

function bang(){
	mgraphics.redraw()
}