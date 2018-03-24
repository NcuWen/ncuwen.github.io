    
    const START_ANGLE = 0; // 设置开始角度
    const END_ANGLE = Math.PI * 2; // 设置结束角度
    const PROGRESS_LINE_WIDTH = 6; // 设置绘制进度条圆形的宽度
    const COMMON_LINE_WIDTH = 1; // 设置边界圆形的宽度
    const COUNTER_CLOCKWISE = false; // 设置圆形的生成方向，false 表示为顺时针
    const RADIUS = 50; // 设置半径
    var testValue=0; //当前值
    var perValue=0; //上一个值
    var Can=null;
    var X=0;
    var str;
    var cur;
    var t;
    function cycle(obj1,n){
        Can=obj1;
        cur=n;
        X=Can.width/2;
        if(n==1){
            str="Blog";
        }else if(n==2){
            str="Govern";
        }else{
            str="NcuWen";
        }
        if(t){
            clearTimeout(t);
        }
        t=self.setInterval("clock(Can,X,X,str)",1);
    }
    
    function drawCycle(canvasElem, positionX, positionY, radius, startAngle, endAngle, couterClockwise, lineWidth,str) {
        let cycle = canvasElem.getContext('2d');
        cycle.lineWidth = lineWidth;
        cycle.beginPath();
        cycle.arc(positionX, positionY, radius, startAngle, endAngle, couterClockwise);
        cycle.strokeStyle='#CA02EE';
        cycle.stroke();
        cycle.font="25px Arial";
        cycle.fillText(str,30/cur,60);
    }
    function clock(CANVAS,X,Y,str) {
        perValue=testValue*2;
        if(testValue>=2 * Math.PI){
            testValue=0;
        }
        testValue=testValue+0.01;
        // 实时清空旧的图形
        let clearRECT = CANVAS.getContext('2d');
        clearRECT.clearRect(X - RADIUS - PROGRESS_LINE_WIDTH, Y - RADIUS - PROGRESS_LINE_WIDTH, 
            RADIUS * 2 + PROGRESS_LINE_WIDTH * 2, RADIUS * 2 + PROGRESS_LINE_WIDTH * 2);
        // 绘制进度条
        drawCycle(CANVAS, X, Y, RADIUS - PROGRESS_LINE_WIDTH / 2, START_ANGLE, END_ANGLE, COUNTER_CLOCKWISE, COMMON_LINE_WIDTH,str);
        drawCycle(CANVAS, X, Y, RADIUS + PROGRESS_LINE_WIDTH / 2, START_ANGLE, END_ANGLE, COUNTER_CLOCKWISE, COMMON_LINE_WIDTH,str);
        // 根据输入值绘制进度条
        drawCycle(CANVAS, X, Y, RADIUS, perValue - Math.PI/2, testValue - Math.PI/2, COUNTER_CLOCKWISE, PROGRESS_LINE_WIDTH,str);
    };