/**
 * Created by iconie on 2017/7/13.
 *
 */
class frameAnimation{

    constructor(imgSrc,canvasDom,positionInfo,interFrameTime){
        this.imgSrc = imgSrc;
        this.canvasDom = canvasDom;
        this.positionInfo = positionInfo;
        this.frameIndex = 0;
        this.timeOutIndex = -1;
        this.ifbegin = false;
        this.ifstop = false;
        this.schedule = 0;
        this.interFrameTime = interFrameTime;
        this.imgOnload=false;

        this.begin = this.begin.bind(this);
        this.stop = this.stop.bind(this);
        this.recover = this.recover.bind(this);
        this.end = this.end.bind(this);
    }

    drawCertain(index){
        //相当于先要end
        this.ifstop = false;
        this.ifbegin = false;
        this.frameIndex = 0;
        clearTimeout(this.timeOutIndex);

        let that = this,
            ctx = this.canvasDom.getContext('2d'),
            img = new Image();

        img.onload = function(){

            //可能之前会有占位静态图的情况
            that.canvasDom.style.backgroundImage = "";

            let beginX,beginY,realX,realY;

            realX = that.positionInfo[index].w * (that.canvasDom.width / that.positionInfo[index].sourceW);
            realY = that.positionInfo[index].h * (that.canvasDom.height / that.positionInfo[index].sourceH);

            beginX = that.positionInfo[index].offX * (that.canvasDom.width / that.positionInfo[index].sourceW );
            beginY = that.positionInfo[index].offY * (that.canvasDom.height / that.positionInfo[index].sourceH );

            ctx.clearRect(0,0,that.canvasDom.width,that.canvasDom.height);
            ctx.drawImage(img, that.positionInfo[index].x, that.positionInfo[index].y,
                that.positionInfo[index].w , that.positionInfo[index].h, beginX, beginY, realX, realY);

        };
        img.src = this.imgSrc;
    }

    begin(){

        let that = this;

        if(this.ifbegin) return;

        this.ifbegin = true;

        let ctx = this.canvasDom.getContext('2d');

        let img = new Image();
        img.onload = function(){
            that.canvasDom.style.backgroundImage = "";

            function nextFrame() {

                that.frameIndex++;
                if(that.frameIndex<that.positionInfo.length){

                } else{
                    that.frameIndex=0;
                }

                let beginX,beginY,realX,realY;

                realX = that.positionInfo[that.frameIndex].w * (that.canvasDom.width / that.positionInfo[that.frameIndex].sourceW);
                realY = that.positionInfo[that.frameIndex].h * (that.canvasDom.height / that.positionInfo[that.frameIndex].sourceH);

                beginX = that.positionInfo[that.frameIndex].offX * (that.canvasDom.width / that.positionInfo[that.frameIndex].sourceW );
                beginY = that.positionInfo[that.frameIndex].offY * (that.canvasDom.height / that.positionInfo[that.frameIndex].sourceH );

                ctx.clearRect(0,0,that.canvasDom.width,that.canvasDom.height);
                ctx.drawImage(img, that.positionInfo[that.frameIndex].x, that.positionInfo[that.frameIndex].y,
                    that.positionInfo[that.frameIndex].w , that.positionInfo[that.frameIndex].h, beginX, beginY, realX, realY);

                that.timeOutIndex = setTimeout(nextFrame,that.interFrameTime);
            }

            nextFrame();

        };
        img.src = this.imgSrc;

    }

    stop(){
        this.ifstop = true;
        clearTimeout(this.timeOutIndex);
    }

    recover(){
        if(this.ifstop && this.ifbegin) {
            this.ifstop = false;
            this.begin();
        }
    }

    end(){
        this.ifstop = false;
        this.ifbegin = false;
        this.frameIndex = 0;
        clearTimeout(this.timeOutIndex);
    }
}

module.exports = frameAnimation;
