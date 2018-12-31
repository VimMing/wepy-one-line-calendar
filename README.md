# wepy-one-line-calendar
wepy calendar on-line-calendar 日历组件 单行日历组件

### 效果图
<img src='./calendar.gif' style='width: 375px;'/>

### 在线小程序码
<img src='./wx-calendar.jpg' style='width: 65px; height: 65px;'/>

### 使用

#### 方法一
> 觉得样式还可以的话
```vue
/*********
* 安装
*********/
npm i wepy-one-line-calendar --save
/*********
* 使用
*********/

<template>
  <calendar></calendar>
</template>

<script>
  import wepy from 'wepy'
  import calendar from 'wepy-one-line-calendar'
    export default class Index extends wepy.page {
        components = {
          calendar: calendar
        }
    }
</script>
```

#### 方法二
> 自己改造日历
1. 复制本项目下的src/components/calendar.wpy文件, 放到你自己的项目下。
2. calendar.wpy下面的注释写的很详细了， 遇到问题， 欢迎骚扰。

### 组件的emit事件, props属性, slot

#### emit事件

| 事件           |    解释       |
| ------------- |:-------------:| 
| selectDay     |  点击日期时触发 | 
| selectMonth      | 选择年或者月份触发 | 
| userDefineTap | 自定义的slot被tap时触发 |

#### props属性

| 属性           |    解释       |
| ------------- |:-------------:| 
| scheduleNumOfDay     |  日期右上角标数字 [{day: '2018-12-10', num: 4}]|

 #### slot
 
 ```
 <slot name="slot"></slot>
 ```
 
 ### 实例
 > 结合emit, props, slot的实例
 
 ```vue
 <template>
       <Calendar @userDefineTap.user="add" @selectDay.user="selectDay" :scheduleNumOfDay.sync="scheduleNumOfDay">
         <i class="iconfont icon-add" slot="slot"></i>
       </Calendar>
 </template> 
 <script>
   import wepy from 'wepy'
   import calendar from 'wepy-one-line-calendar'
     export default class Index extends wepy.page {
         components = {
           calendar: calendar
         }
         data = {
           scheduleNumOfDay: [{day: '2018-12-30', num: 5}]
         }
         methods = {
           add(){
             // slot click
           },
           selectDay(dayItem){
             // select day
           }
         }
     }
 </script>     
 ```
 
 ### 最后
 欢迎star，pr
 


