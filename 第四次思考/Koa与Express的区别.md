# Koa与Express的区别
## Koa
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

- 基于node的一个web开发框架，利用co作为底层运行框架，利用Generator的特性，实现“无回调”的异步处理；
- ES7;
- 更小、更富有表现力、更健壮的基石；
- 利用async函数、Koa丢弃回调函数，增强错误处理；
- 很小的体积，因为没有捆绑任何中间件；
- 类似堆栈的方式组织和执行；
- 低级中间件层中提供高级“语法糖”，提高了互操性、稳健性；
## Express
Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

- Node的基础框架，基础Connect中间件，自身封装了路由、视图处理等功能；
- 线性逻辑，路由和中间件完美融合，清晰明了；
- 弊端是callback回调方式，不可组合、异常不可捕获；
- ES5;
- connect的执行流程： connect的中间件模型是线性的，即一个一个往下执行；
## 区别
### Handler的处理

- Express普通回调函数，在同一线程上完成当前进程的所有Http请求； Koa利用Generator Function作为响应器，co作为底层运行框架，利用Generator特性，实现“协程响应”； 
### 路由

- Express的路由是自身集成的；  Koa的需要引入中间件Koa-router； 
### 启动

- 方式koa采用new Koa() express采用传统的函数形式function；  
### 回调

- Koa没有回调 express有回调；  
### Http Request

- koa1使用this取代Express的req、res；
### Context

- Koa新增了一个Context对象，用来代替Express的Request和Response，作为请求的上下文对象。  还有Node原生提供的req、res、socket等对象；
### 生命周期

- Express的生命周期不确定：express内部执行异步函数，不能确定什么时候执行完；  Koa确定：koa是基于await/async，在执行下一步操作的时候，必须等待前端await执行完；  复制代码
### 异步流程 

- Express采用callback来处理异步(ES5)；  Koa1采用generator(ES6)；  Koa2采用async/await(ES7)； 
### 错误处理

- Express使用callback捕获异常，深层次的异常捕获不了；  Koa使用try catch，很好的解决异常捕获； 复制代码
### 中间件 
#### koa2的中间件：  		

- 1、通过async await实现的，中间件执行的顺序是“洋葱圈”模型。  		
- 2、中间件之间通过next函数联系，当一个中间件调用next()后，会将控制权交给下一个中间件，直到下一个中间件不再执行next()后，会沿路返回，将控制权交给前一个中间件。  
#### Express中间件： 		

- 1、一个接一个顺序执行，response响应写在最后一个中间件中。 		
- 2、特点： 			
   - a.app.use用来注册中间件； 			
   - b.遇到http请求，根据path和method判断触发哪些中间件； 			
   - c.实现next机制，即上一个中间件会通过next触发下一个中间件；
## 总结
### Express的优缺点： 
优点：

- 功能全面，拥有路由、模板等框架常见功能；
- 简单且快速的开发应用。
- 拥有庞大的生态，支持更多的第三方插件。
- 社区更加成熟，意味着有更多支持与文档可以查阅。
- 学习曲线低。

缺点：

- 回调地狱问题；
- 很难处理错误异常。
- 需要清晰的组织结构，否则后期维护难度困难。
- 代码库越大，重构难度越大。
- 需要创建所有节点。
- 没有内置错误处理。
### Koa的优缺点: 
优点：

- 没有回调地狱问题；
- 更轻量，更健壮。
- 对 ES2017 的支持。
- 可以自己开发中间件，更灵活，自由度高。
- 代码可读性和维护性更高。

缺点：

- 社区相对较小，意味着支持与文档也会较少。
- 与 Express 风格的中间件不兼容。
- Koa 的特定中间件与其他框架不兼容。

​

