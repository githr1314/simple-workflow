<template>
	<div class="page">
        <img style="display:none" src="../assets/head.png">
		<canvas id="test" width="375px" height="812px">
            <span>不支持canvas</span>
        </canvas>
	</div>
</template>

<script>
export default {
    data() {
        return {
            canvas: '',
            ctx: '',
        }
    },
    mounted() {
        this.canvas = document.getElementById('test');
        this.ctx = this.canvas.getContext('2d');
        // this.draw3Rect();
        // this.drawPath();
        // this.drawArc();
        // this.drawArc2();
        // this.drawQuadraticCurve();
        // this.drawByPath2D();
        // this.drawBySetColor();
        // this.drwaWithLineWidth();
        // this.drawText();
        // setTimeout(() => {
        //     this.drawImage();    
        // }, 1000);
        // this.drawSaveAndRestore();
        // this.drawByTranslate();
        // this.drawByRotate();
        this.drawScale();
    },
    methods: {
        // 绘制3种矩形，实心，边框，透明
        draw3Rect : function() {
            this.ctx.fillRect(30, 30, 140, 140);
            this.ctx.strokeRect(40, 45, 150, 150);
            this.ctx.clearRect(40, 45, 60, 60);
        },

        // 绘制路径
        drawPath : function() {
            this.ctx.beginPath();
            this.ctx.moveTo(75, 50);
            this.ctx.lineTo(100, 75);
            this.ctx.lineTo(100, 25);
            this.ctx.closePath();
            // this.ctx.fill();
            // this.ctx.moveTo(120, 120);
            // this.ctx.lineTo(75, 50);
            this.ctx.stroke();
        },

        // 绘制圆形
        drawArc : function() {
            this.ctx.beginPath();
            this.ctx.arc(75, 75, 50, 0, Math.PI*2, true); // 绘制
            this.ctx.moveTo(110, 75);
            this.ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
            this.ctx.moveTo(65, 65);
            this.ctx.arc(60, 65, 5, 0, Math.PI*2, true);  // 左眼
            this.ctx.moveTo(95, 65);
            this.ctx.arc(90, 65, 5, 0, Math.PI*2, true);  // 右眼
            this.ctx.stroke();
        },

        // 绘制圆形2
        drawArc2 : function() {
            this.ctx.beginPath();
            this.ctx.arc(100, 100 , 60, 0, Math.PI*2, true);
            // this.ctx.stroke();
            this.ctx.fill();
        },

        // 绘制二次贝塞尔曲线
        drawQuadraticCurve : function() {
            this.ctx.beginPath();
            this.ctx.moveTo(105, 200);
            this.ctx.quadraticCurveTo(0, 0, 100, 100);
            this.ctx.stroke();
        },

        // 通过path2D对象绘制并记录绘画命令
        drawByPath2D : function() {
            const rect = new Path2D();
            rect.moveTo(20, 20);
            rect.rect(20, 20, 40, 40);

            const circle = new Path2D();
            circle.arc(80, 80, 15, 0, Math.PI * 2, true);

            this.ctx.fill(rect);
            this.ctx.stroke(circle);

            // svg
            const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
            this.ctx.stroke(p);
        },

        // 设置绘画填充和轮廓的颜色
        drawBySetColor : function() {
            for(let i = 0; i < 6;i++) {
                for(let j = 0; j < 6;j++) {
                    this.ctx.fillStyle = `rgba(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0, 1)`;
                    this.ctx.fillRect(j * 25, i * 25, 25, 25);
                    this.ctx.strokeStyle = `rgba(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0, 1)`;
                    this.ctx.strokeRect((j + 6) * 25, (i + 6) * 25, 25, 25);
                }
            }
        },

        // 线宽
        drwaWithLineWidth : function() {
            this.ctx.beginPath();
            this.ctx.moveTo(25, 25);
            this.ctx.lineTo(25, 80);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(50, 25);
            this.ctx.lineTo(50, 80);
            this.ctx.stroke();
        },

        // 绘制文字
        drawText : function() {
            this.ctx.font = "20px sans-serif";
            this.ctx.fillText('你好呀，canvas', 125, 300, 100);
        },

        // 绘制图片
        drawImage : function() {
            // 普通绘制
            this.ctx.drawImage(document.images[0], 0, 160);
            // 缩放图片
            this.ctx.drawImage(document.images[0], 0, 105, 375, 150);
            // 裁切图片slicing
            this.ctx.drawImage(document.images[0], 300, 100, 250, 100, 0, 0, 250, 100);
        },

        // 保存canvas状态
        drawSaveAndRestore : function() {
            this.ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
            this.ctx.save();                  // 保存默认状态

            this.ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
            this.ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形

            this.ctx.save();                  // 保存当前状态
            this.ctx.fillStyle = '#FFF'       // 再次改变颜色配置
            this.ctx.globalAlpha = 0.5;    
            this.ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形

            this.ctx.restore();               // 重新加载之前的颜色状态
            this.ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形

            this.ctx.restore();               // 加载默认颜色配置
            this.ctx.fillRect(60,60,30,30); 
        },

        // 移动原点
        drawByTranslate : function() {
            this.ctx.fillRect(0 ,0, 150, 150);
            this.ctx.translate(0, 155);
            this.ctx.fillRect(0, 0, 150, 150);
        },
        
        // 旋转
        drawByRotate : function() {
            this.ctx.translate(50,50);
            this.ctx.fillRect(50, 50, 150, 150);
            const deg = Math.PI*2 / 6;
            this.ctx.rotate(deg);
        },

        // 绘制缩放
        drawScale : function() {
            this.ctx.beginPath();
            this.ctx.scale(-1, 2);
            this.ctx.moveTo(-99, 98);
            this.ctx.quadraticCurveTo(-15, 20, -100, 150);
            this.ctx.stroke();
        },


    }
}
</script>
<style lang="scss" scoped>

</style>