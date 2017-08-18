nodeJS是什么
nodeJS是基于Javascript和Google的V8引擎的一种运行于服务端的一门编程语言，与PHP相比，nodeJS的运行速度以及性能都是想当不错的。
nodejs 到底是什么？

nodejs 官方 有一段解释: "Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.”

注意其中的一些关键点：nodejs是一个平台, 它构建在chrome的v8引擎之上,能简易的构建快速,可扩展的网络应用程序...

这里官方用的网络应用程序，整个描述没有提到web、server等等概念，这段描述中，有两个是重点，把握住这两点，就算掌握了nodejs的真谛:
* chrome的v8引擎
* 事件驱动的非阻塞io模型


nodejs核心

nodejs只是libuv的一个应用.

nodejs核心主要是由两部分组成的:
* v8引擎, 它负责把javascript代码解释成本地的二进制代码运行.
* libuv, 类似windows上的窗口消息机制,它主要负责订阅和处理系统的各种内核消息,而且它也实现了消息循环(这个几乎就和windows 的窗口消息循环是一个概念). 它的前身是linux上的libev, 专门封装linux上的内核消息机制,后来nodejs重写了它, 并在windows上使用iocp技术重新实现了一遍.所以nodejs现在能跨平台运行在windows上了.
* 闭包回调，非阻塞的异步处理机制.
*
总而言之，NodeJS适合运用在高并发、I/O密集、少量业务逻辑的场景。

运行特点

它是一个Javascript运行环境

依赖于Chrome V8引擎进行代码解释

事件驱动

非阻塞I/O

轻量、可伸缩，适于实时数据交互应用

单进程，单线程

Express简介
Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。它具有丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单。并且Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能。

优势
现在的很多的服务器端的语言（PHP,JAVA,ASP.net）,有什么问题呢，现在的服务器端的语言在用户访问服务器时，为每个用户链接创建了一个线程，但每个线程大约要耗费2M的内存，如果一个8G内存的服务器，也就能链接4000个左右的用户，如果用户的链接数较大，就必须增加服务器的数量，而且现在用户的链接方式有很多（如app，网页同时访问），这就又涉及到服务器共享的问题，所以服务器怎么支持最大的同时链接用户量就成了一个问题；

NodeJS修改了客户端到服务器端的链接方法，解决了这个问题，他不在为每个客户端创建一个新的线程，而是为每个客户端链接出发一个NodeJs内部进行处理的事件，所以NodeJS具备同时处理多达几万个用户的客户端链接的能力；

1、采用事件驱动、异步编程，为网络服务而设计。

其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。而且JavaScript也简单易学，很多前端设计人员可以很快上手做后端设计。



2、出众的负载能力.

Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。



3、Node.js轻量高效.

可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。Node非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。


nodeJS缺点

1、可靠性低

2、单进程，单线程，只支持单核CPU，不能充分的利用多核CPU服务器。一旦这个进程崩掉，那么整个web服务就崩掉了。
