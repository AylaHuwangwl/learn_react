# Day01 作业布置

## 一. 完成课堂所有的代码







## 二. React开发的三个依赖包是什么？分别有什么作用？

* react:包含react所有必须的核心代码
* react-dom：react 渲染在不同平台所需要的核心代码
* babel:将jsx转换为 React 代码的工具





## 三. React如何封装组件，组件里面包含哪些内容？

* 类的方式封装组件

* 定义一个类（类名大写，组件的名称是必须大写的，小写会被认为是HTML元素），继承自React.Component

* .实现当前组件的render函数

  ~~~js
  class App extends React.Component{
      render(){
          return <h2> Hello React<h2/>
      }
  }
  #渲染根组件
  const root =ReactDOM.createRoot(document.querySelector("#r oot"))
  #使用组件
  root.render(<App/>)
  ~~~

  





## 四. 在进行函数绑定时，如何进行this关键字的绑定？

* 在传入函数时直接绑定this

  ~~~js
     render() {
          return (
            <div>
              <h2>{this.state.message}</h2>
              <button onClick={this.btnClick.bind(this)}>点击</button>
            </div>
          )
        }
  ~~~

  

* 在类中提前绑定需要使用的函数的this

  ~~~js
     class App extends React.Component {
        // 组件数据
        constructor() {
          super()
          this.state = {
            message: "Hello World",
           
          }
  
          // 对需要绑定的方法, 提前绑定好this
          this.btnClick = this.btnClick.bind(this)
        }
     
     render() {
          return (
            <div>
              <h2>{this.state.message}</h2>
              <button onClick={this.btnClick}>点击</button>
            </div>
          )
        }
  }
  ~~~

  



## 五. React如何进行列表数据的展示？回顾数组的常见高阶函数。

* 方式一：直接使用for循环 

  ~~~js
      render() {
          // 1.对movies进行for循环
          const liEls = []
          for (let i = 0; i < this.state.movies.length; i++) {
          const movie = this.state.movies[i]
          const liEl = <li>{movie}</li>
          liEls.push(liEl)
          }
            <div>
              <h2>电影列表</h2>
              <ul>
               <li> {liEls}</li>
              </ul>
            </div>
          )
        }
  ~~~

  

* 方式二：map 高阶函数

  ~~~js
  
  
        render() 
  #返回一个新的数组
          const liEls = this.state.movies.map(movie => <li>{movie}</li>)
  
          return (
            <div>
              <h2>电影列表</h2>
              <ul>
                 <li> {liEls}</li>
              </ul>
            </div>
          )
        }
        
        
  ~~~

  

* 方式三： map 高阶函数 表达式

  ~~~js
  <ul>
  {this.state.movies.map(movie => <li>{movie}</li>)}
  </ul>
  ~~~

  

## 六. JSX如何绑定数据？如何绑定内容、属性，有哪些规则？

* 绑定数据

  ~~~js
      class Home extends React.Component {
          constructor() {
              super();
              this.state = {
                  message: 'BNTang'
              }
          }
  
          render() {
              return (
                  <div>
                      <p id="box">{this.state.message}</p>
                      <p title={this.state.message}>{this.state.message}</p>
                  </div>
              )
          }
      }
  
  ~~~

  

* 绑定class

  ~~~js
    class Home extends React.Component {
          constructor() {
              super();
              this.state = {
                  isActive: true,
                   objStyle: {color: "red", fontSize: "30px"}
              }
          }
  
          render() {
           const { title, imgURL, href, isActive, objStyle } = this.state
          #1.class绑定的写法一: 字符串的拼接
          const className = `abc cba ${isActive ? 'active': ''}`
          
         # 2.class绑定的写法二: 将所有的class放到数组中
          const classList = ["abc", "cba"]
          if (isActive) classList.push("active")
              
         # 3.class绑定的写法三: 第三方库classnames -> npm install classnames
            
              return (
                  <div>
                     <h2 className={className}>哈哈哈哈</h2>
                     <h2 className={classList.join(" ")}>哈哈哈哈</h2>
                  </div>
              )
          }
      }
  
   
  ~~~
  
  



* 绑定style

  ~~~js
   class Home extends React.Component {
          constructor() {
              super();
              this.state = {
                  message: 'BNTang'
              }
          }
  
          render() {
              return (
                  <div>
                      <p style={{color: 'red', fontSize: '100px'}}>{this.state.message}</p>
                  </div>
              )
          }
      }
  ~~~

  

* 绑定属性

  ~~~js
  <p title="我是标题">我是段落</p>
  
  <p title={message}>我是段落</p>
  ~~~

  

* 书写规范
  * 顶层只有一个根元素
  * jsx 的外层需要包裹一个 （） 方便阅读，可以进行换行书写
  * jsx的标签可以是单标签，也可以是双标签
  * 单标签必须以/>结尾
  * jsx中的注释 { /* */}
  * JSX嵌入变量作为子元素
    * 情况一：当变量是Number、String、Array类型时，可以直接显示
    * 情况二：当变量是null、undefined、Boolean类型时，内容为空；
      如果希望可以显示null、undefined、Boolean，那么需要转成字符串；
      转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；
    * 情况三：Object对象类型不能作为子元素（not valid as a React child）

























































































