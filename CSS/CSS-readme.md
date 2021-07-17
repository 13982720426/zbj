# CSS-readme


完善了CSS搜索-店铺样式
​

记录一下在写搜索-店铺样式时遇到的问题，以及解决方案
​

## 图标问题
### 图标大小位置问题
在阿里iconfont下载图标之后添加图标时，图标的大小和位置老是有偏差，而且只能修改图标字体大小以及颜色
比如这个下拉图标偏高![](https://i.loli.net/2021/07/18/7wqnEB49JcNDVpL.png#height=42&id=wdePS&originHeight=24&originWidth=50&originalType=binary&ratio=1&status=done&style=none&width=88)；这个扫码图标偏小![](https://i.loli.net/2021/07/18/rNUSuHKg2vol4De.png#id=T2XrY&originHeight=37&originWidth=59&originalType=binary&ratio=1&status=done&style=none)，而且更改大小之后，位置偏上无法调整
​

#### 解决方案
在下载图标前，有一个编辑可以设置图标大小和位置，调好之后再下载。或者多次尝试
![](https://i.loli.net/2021/07/18/9h7cvgNfeoxQMHW.png#id=feKa9&originHeight=698&originWidth=966&originalType=binary&ratio=1&status=done&style=none)


### 其他图标问题
原型图上![](https://i.loli.net/2021/07/18/kx7p8gAezMXPuUq.png#id=elGZ8&originHeight=164&originWidth=287&originalType=binary&ratio=1&status=done&style=none)这三个图标是一个整体，实在找不到合适的图标
​

#### 解决方案
这三个图标改用标签设置颜色、背景、边框解决。
​

但是又遇到了一个问题
原型图上V是斜体，而且iconfont没有找到相似的图标
尝试过改字体，添加斜体的方式
```javascript
	font-family: STSong;
	font-style: italic;
```
样子却是这样的![](https://i.loli.net/2021/07/18/x53Tc76nJDKAElm.png#id=Nfzv6&originHeight=230&originWidth=238&originalType=binary&ratio=1&status=done&style=none)，而且没法调位置，效果不理想。
最后还是使用默认样子的V
​

## 设置阴影遇到的问题
#### 原型图上的阴影
![](https://i.loli.net/2021/07/18/odZhYuq5zV2SfAk.png#id=vXRWM&originHeight=602&originWidth=652&originalType=binary&ratio=1&status=done&style=none)


#### 在我的劣质显示器上的原型图
![](https://i.loli.net/2021/07/18/TgjXiuJMl9wN3Kt.png#id=bMBRq&originHeight=692&originWidth=880&originalType=binary&ratio=1&status=done&style=none)
#### 我写的样式在劣质显示器上看的效果
![](https://i.loli.net/2021/07/18/kZOqUTeMoWpjAQ3.png#id=JRJCp&originHeight=562&originWidth=602&originalType=binary&ratio=1&status=done&style=none)
#### 最后对比图
![](https://i.loli.net/2021/07/18/WQHTMp83jiNZdJu.png#id=hgziH&originHeight=363&originWidth=747&originalType=binary&ratio=1&status=done&style=none)
实际效果差别不大，但是就是因为屏幕的原因，导致看到有重影一直调不对
最后建议条件允许一定要用好的显示器看效果图
#### 解决方案
换一点的显示器
​

## 最小字体问题


在设置字体大小时发现，字体小于12px就无法显示，只能最小12px
​

#### 解决方案
这是浏览器的问题，我用的谷歌浏览器 默认最小字体12px，
 // 谷歌浏览器有字体限制最小12px。在设置中找到自定义字体，设置最小字号
## 其他问题
原型图上框出的部分是图片，不能查看到他的间距和样式
![](https://i.loli.net/2021/07/18/DbJFYeLdG1UptiQ.png#id=rXc7R&originHeight=332&originWidth=538&originalType=binary&ratio=1&status=done&style=none)


#### 解决方案
颜色方面使用颜色拾取器，布局就只能肉眼观察法
