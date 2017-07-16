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
var ani = frameAnimationCanvas("frameResult.png",$theDomNode,ArrayFromJsonResult,60,1.15);
ani.begin();
```

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
| scale | 可选 | 1 | 放大倍数 | Number |

### 协议
MIT