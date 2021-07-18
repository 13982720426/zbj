# px rem em vh vw之间的区别到底是啥？
传统的项目开发中，我么只会用到px、%、em这几个单位，它们可以适用于大部分的项目开发，并且具有良好的兼容性。
从**CSS3**开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了rem、vh、vw、vm等一些新的计量单位。
利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等。
## 单位
在css单位中，可以分为长度单位、绝对单位，如下表所指示

| CSS单位 |  |
| --- | --- |
| 相对长度单位 | em、ex、ch、rem、vw、vh、vmin、vmax、% |
| 绝对长度单位 | cm、mm、in、px、pt、pc |

今天我们主要讲讲px、em、rem、vh、vw、vm之间的区别
## 绝对长度
### px
px是像素值，是一个固定的长度，比如我们的米，厘米一样。
## 相对长度
**为什么我们需要相对长度rem em等？**
固定长度已经不能满足我们现在的需求了。
举例：比如我们在缩小我们屏幕的时候，我们不仅仅是需要缩小我们的盒子的宽高，我们还想要让我们字体大小也随之缩小，这样用户体验会更好一点。
### rem
#### rem 与 px 的计算关系
rem的值是px的倍数
默认情况下font-size = 16px,那么1rem = 16px
#### rem 如何修改与px的相对计算关系
我们可以在并且只能在**html标签**（因为html节点是根节点，就是rem里面的r：root）里面修改font-size : 32px， 从而1rem = 32px
#### 特点：

   1. rem单位可谓集相对大小和绝对大小的优点于一身
   1. 和em不同的是rem总是相对于根元素，而不像em一样使用级联的方式来计算尺寸
#### 代码
```javascript
<div class="div-rem">rem</div>
```
```javascript
/* rem的用法 */
html{
    font-size:16px;  // 1rem = 16px
}

.div-rem{
    width: 10rem;    // 10rem = 10 x 16 = 160px
    height: 10rem;   // 10rem = 10 x 16 = 160px
    font-size: 1rem; // 1rem = 16px
    background-color: #a58778;
}
```
### em
#### em 与 px 的计算关系
em的值是px的倍数
默认情况下font-size = 16px,那么1em = 16px
#### em 如何修改与px的相对计算关系
我们可以在自己元素上面修改font-size : 32px， 从而1em = 32px
如果自己元素上面没有设置font-size, 我们也可以在父元素上面设置font-size，从而来影响自己元素（子元素）使用的em的值。
#### 特点：

- em 的值并不是固定的
- em 会继承父级元素的字体大小
- em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
- 任意浏览器的默认字体高都是 16px
#### rem 与 em 的区别
上面也正是rem 与 em的区别：
rem只能在html标签里面设置rem的依赖的值到底是多少
而em是可以在自己元素以及父级元素设置em依赖的值到底是多少
#### 代码
```javascript
<!--em1-->
<div class="div-em">em</div>

<!--em2-->
<div class="div-em-father">
    <div class="div-em-child">em child</div>
</div>

```
```javascript

 /* em的用法1：自己元素设置font-size的值来当作em的参照值 */
.div-em{
    font-size: 32px;  // 1em = 32px
    
    width: 10em;      // 10em = 10 x 32 = 320px
    height: 10em;     // 10em = 10 x 32 = 320px
    background-color: aquamarine;
}


 /* em的用法2：自己元素不设置，而父级元素设置font-size的值来当作em的参照值 */
.div-em-father{
    font-size: 64px;  // 1em = 64px
}

.div-em-child{
    width: 10em;     // 10em = 10 x 64 = 640px
    height: 10em;    // 10em = 10 x 64 = 640px
    background-color: cadetblue;
}

```
### vh vw
vh 和 vw 就是根据窗口的宽高，分成100等份，100vh就表示满高，50vh就表示一半高。
**那么vh 和 vw与百分比的区别是什么？**
百分比是基于父元素的设置而言的，如果父元素为100px，那么子元素100%也就是100px。
而 vh 和 vw 始终是针对窗口的宽高。
**这里的窗口分成几种情况：**

- 在桌面端，指的是浏览器的可视区域
- 移动端指的就是布局视口

像vw、vh，比较容易混淆的一个单位是%，不过百分比宽泛的讲是相对于父元素：

- 对于普通定位元素就是我们理解的父元素
- 对于position: absolute;的元素是相对于已定位的父元素
- 对于position: fixed;的元素是相对于 ViewPort（可视窗口）
#### 代码
```javascript
<!--vh vw-->
<div class="div-vh-vw">

    <!--百分比%-->
    <div class="div-vh-vw-child"></div>
    
</div>

```
```javascript
 /* vh vw 的用法：视窗最为参照值 */
.div-vh-vw{
    width: 10vw;  // 视窗宽度的 1/10
    height: 10vh;  // 视窗高度的 1/10
    background-color: pink;
}

/* %百分比的用法：父元素的宽高作为参照值 */
.div-vh-vw-child{
    width: 50%;
    height: 50%;
    background-color: aliceblue;
}
```
**最后看看显示结果（rem 与 em的代码）**
![](https://i.loli.net/2021/07/16/foqmrYi6CJAtXT5.png#id=ZujrQ&originHeight=1191&originWidth=960&originalType=binary&ratio=1&status=done&style=none)
## 总结

- 「px」：绝对单位，页面按精确像素展示
- 「em」：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算，整个页面内1em不是一个固定的值
- 「rem」：相对单位，可理解为root em, 相对根节点html的字体大小来计算
- 「vh、vw」：主要用于页面视口大小布局，在页面布局上更加方便简单
- 「vm」：对于视口的宽度或高度中较小的那个,使用方法和vh\vm类似

​

