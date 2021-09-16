# BFC原理
### 什么是BFC
BFC（块级格式化上下文）是是一个独立的渲染区域，这个区域内的Block-level box如何布局，这个布局与这个区域的外部毫不相干  

BFC的内部布局总结如下：  
1. 内部的Box会在垂直方向上一个接一个的放置
2. 内部的Box垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠。）
3. 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
4. BFC的区域(只有overflow 和 float元素)不会与float的元素区域重叠
5. 计算BFC的高度时，浮动子元素也参与计算
### BFC触发方式

**参考MDN**  
1. 根元素，即body标签
2. 浮动元素：float值为left、right
3. overflow值不为 visible，为 auto、scroll、hidden
4. display值为 inline-block、table-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
5. 定位元素：position值为 absolute、fixed  
**注意：display:table也可以生成BFC的原因在于Table会默认生成一个匿名的table-cell，是这个匿名的table-cell生成了BFC。**
### 应用举例