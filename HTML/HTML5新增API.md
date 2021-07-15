# HTML5新增API
## 1. 检查网络连接状态

- 旧版本：检测网络是否可用

通过window.navifator.onLine 来检测网络是否可用
```javascript
alert(window.navigator.onLine);
```

- H5提供2个事件：online 和 offline
```javascript
//当网络连接的时候，自动检测，弹出P 显示网络已接通 然后消失
window.addEventListener("online",function () {
    $(".tips").text("网络已接通").fadeIn(1000).delay(1000).fadeOut();
});

//当网络断开的时候，自动检测，弹出P
window.addEventListener("offline",function () {
    $(".tips").text("网络已断开").fadeIn(1000).delay(1000).fadeOut();
});

//delay( fast | slow | 毫秒）表示延迟的时长

```
## 2. 全屏
HTML5规范允许用户自定义网页上任一元素全屏显示。
注：全屏存在浏览器的兼容性问题，不同的浏览器需要添加不同的前缀 webkit（谷歌） moz（火狐） ms（IE） o（欧朋）
### 2.1 全屏显示
```javascript
//1.全屏显示
document.querySelector("#full").onclick = function () {
    div.webkitRequestFullScreen();  //开启全屏
    //能力检测 一个兼容性解决方法
    if(div.requestFullScreen){      //正常检测
        div.requestFullScreen();
    }else if(div.webkitRequestFullScreen){  //谷歌
        div.webkitRequestFullScreen();
    }else if(div.mozRequestFullScreen){     //火狐
        div.mozRequestFullScreen();
    }else if(div.msRequestFullscreen){      //IE内核，注意IE中有坑，需要将Screen中的s小写
        div.msRequestFullscreen(); //ms 里面这样写的msRequestFullscreen S小写
    }else {
        div.oRequestFullScreen();   //欧朋
    }
}

```
特别注意： 当兼容IE浏览器时，ms 里面这样写的msRequestFullscreen S小写
### 2.2 取消全屏显示
**存在浏览器兼容问题，此处只列举一种**
```javascript
//2.取消全屏 跟元素是没有关系的 与document相关
document.querySelector("#cancelFull").onclick = function () {
    document.webkitCancelFullScreen();
};

```
### 2.3 是否全屏显示
**存在浏览器兼容问题，此处只列举一种**
```javascript
//3.是否是全屏
document.querySelector("#isFull").onclick = function () {
    alert(document.webkitIsFullScreen);
}

```
### 2.4 全屏伪类选择器
**有兼容性问题 需要添加前缀 此处只列举一种**
```javascript
div:-webkit-full-screen{
     background-color: #4fff88;
}

```
## 3. 文件读取
通过FileReader对象我们可以读取本地存储的文件，使用 [File](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FDOM%2FFile)对象来指定所要读取的文件或数据。其中File对象可以是来自用户在一个 元素上选择文件后返回的[FileList](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FDOM%2FFileList)对象，也可以来自由拖放操作生成的 [DataTransfer](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FDataTransfer)
### 3.1 Files对象
由于HTML5中我们可以通过为表单元素添加multiple属性，因此我们通过<input type="file" multiple>上传文件后得到的是一个Files对象（伪数组形式）。
multiple: 表示可以同时选择多个上传文件
### 3.2FileReader对象
HTML5新增内建对象，可以读取本地文件内容。
var reader = new FileReader; 可以实例化一个对象

- [readAsDataURL](https://juejin.cn/post/6844903889234313229#readAsDataURL())() 以DataURL形式读取文件(用于图片的显示)
- 事件监听：onload 当文读取完成时调用
- 属性：result 文件读取结果

[FileReader对象使用的参考资料](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FFileReader)
```javascript
//  上传文件，借助于文件域 input file
var file = document.querySelector("#fl");
var div = document.querySelector("div");
file.onchange = function () {   //当发生改变的时候  （下拉菜单，select也是这个事件）
	//初始化一个reader对象
	var reader = new FileReader();
	//读取文本里面的内容
	reader.readAsText(this.files[0]);
	// 把读取的内容显示到 页面中
	reader.onload = function () {
		div.innerHTML = this.result;
	}
}
```
## 4 地理定位
在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即基于位置服务 (Location Base Service)
### 4.1 API详解

1. 获取当前地理信息

`navigator.geolocation.getCurrentPosition(successCallback, errorCallback)`

1. 重复获取当前地理信息

`navigator. geolocation.watchPosition(successCallback, errorCallback)`
当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position。

- position.coords.latitude 纬度
- position.coords.longitude经度
- position.coords.accuracy精度
- position.coords.altitude海拔高度

当获取地理信息失败后，会调用errorCallback，并返回错误信息error
[参考资料](https://link.juejin.cn/?target=toc)

- [w3school_HTML5 地理定位](https://link.juejin.cn/?target=http%3A%2F%2Fwww.w3school.com.cn%2Fhtml5%2Fhtml_5_geolocation.asp)
### 4.2 应用
在现实开发中，通过调用第三方API（如百度地图）来实现地理定位信息，这些API都是基于用户当前位置的，并将用位置位置（经/纬度）当做参数传递，就可以实现相应的功能。
[参考资料](https://link.juejin.cn/?target=toc)

- [百度地图api](https://link.juejin.cn/?target=http%3A%2F%2Flbsyun.baidu.com%2F)
## 5 拖拽
在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。
### 5.1 拖拽和释放

- 拖拽：Drag
- 释放：Drop 拖拽指的是鼠标点击源对象后一直移动对象不松手，一但松手即释放了
### 5.2 设置元素为可拖放
draggable 属性：就是标签元素要设置draggable=true，否则不会有效果
注意： 链接和图片默认是可拖动的，不需要 draggable 属性。
### 5.2 拖拽API的相关事件
**被拖动的源对象可以触发的事件：**

- (1)ondragstart：源对象开始被拖动
- (2)ondrag：源对象被拖动过程中(鼠标可能在移动也可能未移动)
- (3)ondragend：源对象被拖动结束

**拖动源对象可以进入到上方的目标对象可以触发的事件：**

- (1)ondragenter：目标对象被源对象拖动着进入
- (2)ondragover：目标对象被源对象拖动着悬停在上方
- (3)ondragleave：源对象拖动着离开了目标对象
- (4)ondrop：源对象拖动着在目标对象上方释放/松手
### 5.3 DataTransfer
在进行拖放操作时，DataTransfer 对象用来保存被拖动的数据。它可以保存一项或多项数据、一种或者多种数据类型 [参考文档](https://link.juejin.cn/?target=toc)

- [DataTransfer的使用](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FDataTransfer)
```javascript
// (1)ondragstart：源对象开始被拖动,存放被拖动元素的数据
document.ondragstart = function (event) {
	event.dataTransfer.setData("text/html",event.target.id);
}


// (4)ondrop：源对象拖动着在目标对象上方释放/松手
// 获取存储的数据，进行追加到目标对象中
document.ondrop = function (event) {
    var id = event.dataTransfer.getData("text/html");
    event.target.appendChild(document.getElementById(id));
}

```
## 6 Web存储
HTML5规范提出了web本地存储大量数据，分别是sessionStorage与localStorage
### 6.1 特性

1. 设置、读取方便、页面刷新不丢失数据
1. 容量较大，sessionStorage约5M、localStorage约20M
1. 只能存储字符串，可以将对象JSON.stringify() 编码后存储
### 6.2 window.sessionStorage

1. 生命周期为关闭浏览器窗口
1. 在同一个窗口(页面)下数据可以共享
### 6.3 window.localStorage

1. 永久生效，除非手动删除 关闭页面也会存在
1. 可以多窗口（页面）共享（同一浏览器可以共享）
### 6.4 方法详解

- setItem(key, value) 设置存储内容
- getItem(key) 读取存储内容
- removeItem(key) 删除键值为key的存储内容
- clear() 清空所有存储内容 (**慎用**)
## 7 应用缓存
HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个cache manifest文件。
一个普通文本文件，其中列出了浏览器应缓存以供离线访问的资源，推荐使用.appcache为后缀名
例如我们创建了一个名为demo.appcache的文件，然后在需要应用缓存在页面的根元素(html)添加属性manifest="demo.appcache"，路径要保证正确。
### 7.1 manifest文件格式*

1. 顶行写CACHE MANIFEST（cache manifest）
1. CACHE: 换行 指定我们需要缓存的静态资源，如.css、image、js等
1. NETWORK: 换行 指定需要在线访问的资源，可使用通配符
1. FALLBACK: 换行 当被缓存的文件找不到时的备用资源



![](https://i.loli.net/2021/07/15/RTzDliavXx3YACI.png#id=BuWdz&originHeight=351&originWidth=748&originalType=binary&ratio=1&status=done&style=none)
### 7.2 其它注意
1、CACHE: 可以省略，这种情况下将需要缓存的资源写在CACHE MANIFEST
2、可以指定多个CACHE: NETWORK: FALLBACK:，无顺序限制
3、#表示注释，只有当demo.appcache文件内容发生改变时或者手动清除缓存后，才会重新缓存。
4、chrome 可以通过chrome://appcache-internals/工具和离线（offline）模式来调试管理应用缓存
## 8 多媒体
方法：load()、play()、pause()
属性：currentSrc、currentTime、duration
事件：oncanplay， ontimeupdate，onended 等
[参考文档](https://link.juejin.cn/?target=http%3A%2F%2Fwww.w3school.com.cn%2Ftags%2Fhtml_ref_audio_video_dom.asp)
[www.w3school.com.cn/tags/html_r…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.w3school.com.cn%2Ftags%2Fhtml_ref_audio_video_dom.asp)
