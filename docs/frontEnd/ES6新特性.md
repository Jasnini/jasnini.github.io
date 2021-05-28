# ES6新特性
### let和const变量
所有新增特性总结如下：  
 <!-- <img :src="$withBase('/ES6.jpg')" alt="mul-front"> -->
 <a data-fancybox title="" href="/ES6.jpg">![](/ES6.jpg)</a>
<center>图2 ES6</center>
- 块级作用域
- 暂死区

### 模板字面量
- 对象字面量简写
- 变量占位符
- 字符串内换行

### for...of  for...in 循环
- for...of 只对可迭代对象有效（如：数组、Set、Map），对不可迭代对象无效（如：对象{})
- for...in 遍历对象，会遍历出所有可枚举属性

### 展开运算符 ...
- 解构
- 剩余可变参数

### 箭头函数
- 存储在变量中
- 当做参数传递给函数
- 存储在对象的属性中
- 箭头函数简写语法：一个参数不用‘()’; 自动返回表达式，不用‘{}’

### this指向
- new对象
- call apply bind 指定的对象
- 上下文对象
- 全局对象或者undefined
- 箭头函数的this指向，是基于函数周围的上下文，与函数外的this值指向相同

### 函数默认参数
- 对象默认值可以处理跳过的选项；数组默认值使用undefined跳过

### ES6类
- 类是原型链的语法糖，没有向js增加功能
- super、extends
- super要在this调用之前使用
- super表示父类指代整个prototype或者__proto__指向的对象，super()表示调用父类的构造函数，super.a()表示调用父类的方法

### Set
- 具有迭代器的功能，可以使用for...of、foraEach遍历
- 可以使用keys() values() entries()遍历
- 可以通过Array.from()将Set结构化为数组

### Map
- 具有迭代器的功能，可以使用for...of、foraEach遍历
- 可以使用keys() values() entries()遍历
- 可以通过Array.from()将Set结构化为数组  
**注意：Map与数组之间的转换形式如下：**  
```
const list = [['a', 1],['b', 2]]
const map = newMap(list)
const list2 = Array.from(map) // [['a', 1],['b', 2]]
```

### 迭代器
- 可以使用next函数访问元素值

### 生成器
- 生成器的特点：1、实现了完全异步；2、所有的异步过程写在一个gennerate函数中
- promise函数和async函数则实现了，异步函数的分离式语法。promise对象的返回值仍然是promise对象，async 对象的返回值也是promise对象（它是promise的语法糖）

### proxy劫持
- 与getter和setter的区别：前者是隐式调用（无感知）、后者需要代码显示调用
- 使用方法参考文档<https://es6.ruanyifeng.com/?search=Proxy&x=0&y=0#docs/proxy>


