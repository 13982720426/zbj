## meta标签
### meta标签的作用：
 meta标签是HTML标记head区的一个关键标签，它位于HTML文档的<head>和<title>之间（有些也不是在<head>和<title>之间）。它提供的信息虽然对用户不可见，但却是文档的最基本的信息。HTML<meta>除了提供文档字符集、使用语言、作者等基本信息外，还涉及对关键词和网页等级的设定。
​

meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务
### 常用属性
| 常用属性值 | 说明 |
| --- | --- |
| keywords | 用来定义网页的关键字。关键字可以是多个，之间需要用英文逗号,隔开。 |
| description | 用来定义网页的描述。 |
| author | 用来定义网页的作者。 |
| copyright | 用来定义网页的版权信息。 |

### HTML5 新属性。

| 属性                                                         | 值                                                       | 描述                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------- |
| [charset](https://www.runoob.com/tags/att-meta-charset.html) | *character_set*                                          | 定义文档的字符编码。                              |
| [content](https://www.runoob.com/tags/att-meta-content.html) | *text*                                                   | 定义与 http-equiv 或 name 属性相关的元信息。      |
| [http-equiv](https://www.runoob.com/tags/att-meta-http-equiv.html) | content-type default-style refresh                       | 把 content 属性关联到 HTTP 头部。                 |
| [name](https://www.runoob.com/tags/att-meta-name.html)       | application-name author description generator* *keywords | 把 content 属性关联到一个名称。                   |
| [scheme](https://www.runoob.com/tags/att-meta-scheme.html)   | *format/URI*                                             | HTML5不支持。 定义用于翻译 content 属性值的格式。 |

## meta标签的使用方法介绍：

```javascript
HTML中meta标签的使用方法介绍：
 
　　<head>
 
　　<！-声明文档使用的字符编码->
 
　　<metacharset=“utf-8”/>
 
　　<！-页面关键词->
 
　　<metaname=“keywords”content=“个人活动发布，会办app，活动管理，会议管理，社群管理“/>
 
　　<！-页面描述->
 
　　<metaname=”description“content=”发布个人会议，发布公司会议，w我们都可以帮你找到合适的会议地点和参会观众“>
 
　　<！-网页作者->
 
　　<metaname=”author“content=”xxx@163.com“>
 
　　<！-搜索引擎抓取robotterms是一组使用逗号（，）分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。->
 
　　<metaname=“机器人“content=”索引，按照“>
 
　　<！-页面重定向和刷新->
 
　　<metahttp-equiv=”refresh“content=”0;url=“/>
 
　　<！-禁止Chrome浏览器中自动提示翻译->
 
　　<metaname=“google”value=“notranslate”>
 
　　<！--禁止百度转码->
 
　　<metahttp-equiv=“Cache-Control”content=“no-siteapp”>
 
　　<！-自定义标签：app版本号说明->
 
　　<metaname=“app-version”content=“1.13.3”>
 
  　<！-每 5 秒刷新一次页面->

		<meta http-equiv="refresh" content="5" /> 

　　</head>
```
