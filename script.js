const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const scale = 20;

(function setup(){
    snake = new Snake();
    
	window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
		snake.draw();
	}, 180);
}());