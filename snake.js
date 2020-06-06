function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.draw = function (){
        ctx.fillStyle = "#08bb0a";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
    this.update = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    this.changeDir = function(d){
		if(d === 'Up'){
			this.xSpeed = 0;
			this.ySpeed = -scale;
		}
		else if(d === 'Down'){
			this.xSpeed = 0;
			this.ySpeed = scale;
		}
		else if(d === 'Left'){
			this.xSpeed = -scale;
			this.ySpeed = 0;
		}
		else if(d === 'Right'){
			this.xSpeed = scale;
			this.ySpeed = 0;
		}
	}
}