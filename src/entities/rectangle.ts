

module Shapes
{	
	export class Rectangle
	{
		width : number = 0
		
		height : number = 1
		
		constructor(width : number, height : number, bg: string, border: string){
			var bmd = window.game.add.bitmapData(width, height);
							
			bmd.ctx.beginPath();
			bmd.ctx.rect(0, 0, width, height);
			bmd.ctx.fillStyle = '#ffffff';
			bmd.ctx.fill();
			
			return bmd;
		}		
	}
	
}