function Snake(){
    this.x = 0;
    this.y = 0;
    
    this.draw = function (){
        ctx.fillStyle = "#08bb0a";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}