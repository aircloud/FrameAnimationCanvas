##  一种基于canvas的帧动画实现

*beta*

>The English edition of instruction is edited and is to be published soon

### 使用

```
npm i frame-animation-canvas --save
```

然后可以直接:

```
var frameAnimationCanvas = require("frame-animation-canvas");

//...
var ani = frameAnimationCanvas("frameResult.png",$theDomNode,ArrayFromJsonResult,60);
ani.begin();
```

>注意：直接给canvas的dom指定width和height即可，无需另外传参数

默认引入的是babel编译好的ES5版本，无需进行编译即可使用。

源文件在src文件夹下，也可以直接拷贝源文件进行使用。

另外值得注意的是，素材需要由[Egret Texture Merger](http://developer.egret.com/cn/github/egret-docs/tools/TextureMerger/manual/index.html)这个工具生成，也可参考[这里](https://zhuanlan.zhihu.com/p/27915958)

### 构造函数参数列表

| 属性 | 是否必须 | 默认值 | 描述 | 类型 |
| ------| ------ | ------ | ------ | ------ | 
| imgSrc | 必须 | null | 所有帧的合成图片地址 | png/jpg |
| canvasDom | 必须 | null | canvas对应的实际dom元素 | DOM |
| positionInfo | 必须 | null | [Egret Texture Merger](http://developer.egret.com/cn/github/egret-docs/tools/TextureMerger/manual/index.html)生成的结果frames属性内容(转化成array) | array |
| interFrameTime | 必须 | null | 帧间隔 | Number |

>注意：由于之前的scale参数可能会出现问题，现在已经删除scale参数，建议直接控制canvas的大小来实现缩放功能。

### 方法列表

* begin(index)

开始方法，传入index可以指定从那一帧开始，默认从第0帧开始

* stop()

暂停动画

* recover()

恢复动画执行

* end()

结束动画 	

### 协议
MIT
