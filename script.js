const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const scale = 20;

(function setup(){
    snake = new Snake();
    
	window.setInterval(() => {
		snake.draw();
	}, 180);
}());