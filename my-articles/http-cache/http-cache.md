<!--
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2021-10-12 14:11:16
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-10-12 16:25:08
-->

# 参考资料
> [1] https://www.bilibili.com/video/BV17Q4y127We?spm_id_from=333.999.0.0
>
> [2] https://network.51cto.com/art/202105/663816.htm
>
> [3] https://juejin.cn/post/6844904153043435533#heading-4

# 什么是HTTP缓存

浏览器 => 访问网站

需要加载资源 html,css,js,img...

第一次 ---

第一次之后 ---

## 为什么使用缓存?

情境: 

输入网站地址 -> 加载出页面

因素: 

1. CPU计算(**快**) 
2. 页面渲染(**快**) 
3. 网络请求(**不确定,慢的几百毫秒甚至一秒**)

> 通过缓存我们能够**减少网络请求的体积和数量**

# 强制缓存

## 什么是强制缓存

![Snipaste_2021-10-12_14-21-38.png](https://i.loli.net/2021/10/12/3bfJkG76OhcglBX.png)

## 如何实现
1. 服务端在返回资源时设置Cache-Control
2. 前端不需要做任何coding,依赖浏览器完成
3. 除了Cache-Control 还有Expires,Pragma [链接](https://juejin.cn/post/6844904153043435533#heading-4)


![image.png](https://i.loli.net/2021/10/12/Z3dLNf9r2EwFl1J.png)

# 协商缓存

## 什么是协商缓存

又名*对比缓存*

1. 第一次请求时服务端响应 资源和资源标识
2. 后续请求时前端发送资源标识,服务端判断后响应,状态码为 **304 / 200**

    - 如为304 是最新资源, 浏览器将直接从缓存拿资源
    - 如为200 需更新资源, 浏览器将得到新的资源和资源标识

![image.png](https://i.loli.net/2021/10/12/qgJk2lMLZbcIPQ6.png)
![image.png](https://i.loli.net/2021/10/12/Eyu2jVAezmUdnQI.png)

> PS: [MDN_HTTP的重定向_特殊重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#%E7%89%B9%E6%AE%8A%E9%87%8D%E5%AE%9A%E5%90%91)

## 什么是**资源标识**

![两种标识](https://i.loli.net/2021/10/12/OWxR8UVokaDbEYz.png)

### LastModified

1. 第一次请求时,服务端认为该资源可缓存,响应资源标识`Last-Modified`
2. 后续请求时前端请求资源标识`If-Modified-Since`,服务端作判断给出`304 | 200`不同响应
![image.png](https://i.loli.net/2021/10/12/fDiUITCy5aNEqph.png)
![image.png](https://i.loli.net/2021/10/12/FxHgTCtyA2YLqpn.png)

### Etag

Etag是字符串,唯一资源标识.

1. 第一次请求时,服务端认为该资源可缓存,响应资源标识`ETag`
2. 后续请求时前端请求资源标识`If-None-match`,服务端作判断给出`304 | 200`不同响应

![image.png](https://i.loli.net/2021/10/12/Ha9NgAsMcEDm2Io.png)
![image.png](https://i.loli.net/2021/10/12/ACrn3qRfpu2i1ZI.png)

### 比较`Last-Modified`与`ETag`

Last-Modified 和 ETag

> [参考1 优先使用 Etag](https://www.bilibili.com/video/BV17Q4y127We?p=4&spm_id_from=pageDriver)

1. Last-Modified的值只精确到秒级
2. 文件如果每隔一段时间都重复生成，但内容相同。Last—Modified 会每次返回资源文件，即便内容相同。

但是Etag可以判断出文件内容相同，就会返回304，使用缓存


> [参考2](https://network.51cto.com/art/202105/663816.htm) 

精确度上，Etag 要优于 Last-Modified。Last-Modified 的时间单位是秒，如果某个文件在 1 秒内被改变多次，那么它们的 Last-Modified 并没有体现出来修改，但是 Etag 每次都会改变，从而确保了精度;此外，如果是负载均衡的服务器，各个服务器生成的 Last-Modified 也有可能不一致。

性能上，Etag 要逊于 Last-Modified，毕竟 Last-Modified 只需要记录时间，而 ETag 需要服务器通过消息摘要算法来计算出一个hash 值。

优先级上，在资源新鲜度校验时，服务器会优先考虑 Etag。即如果条件请求的请求头同时携带 If-Modified-Since 和 If-None-Match 字段，则会优先判断资源的 ETag 值是否发生变化。

> **小结: 精度差异,重复生成相同内容是否可判断,有优先级** 

#### 同时设置了 Cache-Control 与 Etag

> 服务器同时设置了Cache-Control/max-age 和 Expires时,会同时使用,也就是说在完全匹配 If-Modified-Since 和 If-None-Match 即检查完修改时间和 Etag 之后,服务器才能返回304.

# HTTP缓存 总结

1. ![image.png](https://i.loli.net/2021/10/12/SVgRabEvi6qwtJ1.png)

2. [HTTP_政采云前端团队](https://juejin.cn/post/6844904153043435533)
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/10/171fea0fec0b4668~tplv-t2oaga2asx-watermark.awebp)

