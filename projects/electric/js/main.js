document.addEventListener('DOMContentLoaded',function(){
    // requestAnimationFrame API
    var requestAnimFrame = window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       || 
                window.webkitRequestAnimationFrame || 
                window.mozRequestAnimationFrame    || 
                window.oRequestAnimationFrame      || 
                window.msRequestAnimationFrame     || 
                function(callback){
                    window.setTimeout(callback,1000/60);
                };
    })();
    var cancelAnimFrame = window.cancelAnimFrame = (function(){
        return  window.cancelAnimationFrame       || 
                window.webkitCancelAnimationFrame || 
                window.mozCancelAnimationFrame    || 
                window.oCancelAnimationFrame      || 
                window.msCancelAnimationFrame     || 
                function(){
                    window.clearTimeout.apply(window,arguments);
                }
    })();

    // Getting the canvas and its context
    var can = document.getElementById('electric-canvas');
    if(can == null){
        alert('Could not find canvas.');
    }
    
    var ctx = can.getContext('2d');
    
    // Some variables for the animation
    var animationId;
    var animated = false;
    var rotation = 0;
    var effectsPerTouch = 3;
    var touches = [];
    var maxLength = Math.sqrt(can.width*can.width + can.height*can.height);
    var lastFrame;
    var rotationSpeed = Math.PI / 2; // 90 degrees per second
    
    // Since the colors will always be the same, let's just set them once for all
    // We don't need to reset them at each frame.
    
    // Setting electricity color
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#bbc2ff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 10;
    
    // Background color
    ctx.fillStyle = '#000';
    
    // Function making one frame
    var frame = function(){
        var now,elapsed;
        
        // Calculating the time between now and the previous frame
        now = Date.now();
        if(!lastFrame) 	elapsed = 0;
        else 			elapsed = (now - lastFrame) / 1000;
        lastFrame = now;
        
        // Clearing the canvas
        ctx.fillRect(0,0,can.width,can.height);
        
        var i,touchX,touchY,j,r,x,y;
        
        // Effect for each touch
        for(i = 0 ; i < touches.length ; i++){
            touchX = touches[i].pageX - can.offsetLeft;
            touchY = touches[i].pageY - can.offsetTop;
            
            ctx.save();
            ctx.translate(touchX,touchY);
            ctx.rotate(rotation); // General effect rotation
            
            // For each touch, we draw effectsPerTouch electric effects
            for(j = 0,r = 0 ; j < effectsPerTouch ; j++, r = j * Math.PI * 2 / effectsPerTouch){
                ctx.save();
                ctx.rotate(r);
                
                // One electric effect is composed of several lines
                // Here comes the magic
                ctx.beginPath();
                ctx.moveTo(0,0);
                for(x = 0, y = 0 ; x < maxLength ; x += 20 + Math.random() * 60, y += Math.random() * 60){
                    ctx.lineTo(x,y);
                }
                ctx.stroke();
                
                ctx.restore();
            }
            
            ctx.restore();
        }
        
        // Updating the general rotation
        rotation += elapsed * rotationSpeed;
    }
    
    var startAnimation = function(){
        animated = true;
        (function(){
            if(animated){
                animationId = frame();
                requestAnimFrame(arguments.callee);
            }
        })();
    }
    
    var stopAnimation = function(){
        animated = false;
        frame(); // clearing the canvas
        cancelAnimFrame(animationId);
    }
    
    // Actually handling events
    can.addEventListener('touchstart',function(e){
        e.preventDefault();
        
        // We only need to start the animation at the first touch
        if(touches.length == 0){
            startAnimation();
        }
        
        touches = e.touches;
    });
    can.addEventListener('touchmove',function(e){
        e.preventDefault();
        touches = e.touches;
    });
    can.addEventListener('touchend',function(e){
        touches = e.touches;
        
        // Again, we stop the animation only if the user has removed all 
        // of his fingers.
        if(touches.length == 0){
            stopAnimation();
        }
    });
    
    // For computers, we need to "fake" the touch events
    can.addEventListener('mousedown',function(e){
        touches = [e]; // Faking the use of touch events
        startAnimation();
    });
    can.addEventListener('mousemove',function(e){
        touches = [e];
    });
    // can.addEventListener('mouseup',function(){
    //     touches = [];
    //     stopAnimation();
    // });
    
    // At the start, we call stopAnimation() to clear the canvas
    stopAnimation();
});

