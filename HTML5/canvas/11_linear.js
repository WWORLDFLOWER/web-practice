function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')


    // 格線
    for(let i = 0; i < 100; i++){
        let interval = i * 50

        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        
        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
        
    }
    context.strokeStyle='rgba(0,0,0,.3)';
    context.stroke();
    // ==========

    let gradient = context.createLinearGradient(100, 100, 600, 400);
    // let gradient = context.createLinearGradient(100, 250, 600, 250);
    
    // gradient.addColorStop(number, 'color');
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    gradient.addColorStop(.5, 'yellow');

    // context.fillStyle='yellow';
    context.fillStyle = gradient;
    
    context.fillRect(100, 100, 500, 300);

    
    
}

window.addEventListener('load', doFirst)
