# css3新特性
1. transition
- transition-property
- transition-duration
- transition-timing-function
- transition-delay
2. 新的选择器
- :nth-child :nth-of-type :first-child :first-of-type :empty :target ::selection 
- 属性选择器： [attribute] [attribute=value] [attribute~=value] [attribute|=value]
[attribute^=value] [attribute$=value] [attribute*=value]
3. 文本
- text-shadow
- text-overflow: ellipsis, clip,  [string]
- text-wrap: normal none unrestricted suppress  
**浏览器不支持改属性**  
- word-break：normal, break-all, keep-all, break-word
- word-wrap: normal, break-word  
**浏览器支持不太好**
- white-space: normal | no-wrap | pre | pre-wrap | pre-line  
**控制空白字符显示**  

<img :src="$withBase('/white-space.png')" alt="white-spaec">
<center>图2 white-space属性性质</center>  

4. 边框
- border-radius: 10% 20% 10% 20%
- border-image:  
border-image-source  
border-image-slice  
border-image-width  
border-image-outset  
border-image-repeat  

5. 背景
- rgba
- backgrounnd-size: cover/contain
6. 渐变
- linear-gradient   background-image:linear-gradient(90deg,yellow 20%,green 80%)
- radial-gradient   background-image:radial-gradient(120px at center center,yellow,green)
7. 动画、旋转
- animation
- transform
- translate
- scale
- rotate
- skew
8. flex布局
9. @media媒体查询


# CSS4新特性
