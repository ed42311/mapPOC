$("#test").on("click", function() {
	console.log('test');
});


 $(document).ready(function(){
          $("#hover-show").hide();
      });

function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        var imageObj = new Image();
		imageObj.src = 'Montana_map.png';
        context.drawImage(imageObj, 69, 50);
      	var centerX = canvas.width / 2;
      	var centerY = canvas.height / 2;
      	var radius = 4;

      	context.beginPath();
      	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      	context.fillStyle = 'green';
      	context.fill();
      	context.lineWidth = 1;
      	context.strokeStyle = '#003300';
      	context.stroke();
        console.log(message);
      }
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById('myCanvas');

      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        if(mousePos.x == 288){
        	$("#hover-show").show();
        } else {
        	$("#hover-show").hide();
        }
        writeMessage(canvas, message);
      }, false);
      