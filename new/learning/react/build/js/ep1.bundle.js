webpackJsonp([3],{261:function(e,t,n){"use strict";n(136),n(566);var a=n(135);(0,function(e){return e&&e.__esModule?e:{default:e}}(a).default)("body").css({backgroundColor:"tan"})},264:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),u=a(l),d=n(57),i=a(d),o=n(135),s=a(o),r=n(568),c=n(567),f=u.default.createClass({displayName:"ComponentItem",getInitialState:function(){return{like:!0}},componentWillMount:function(){},componentDidMount:function(){},componentWillUpdate:function(e,t){},componentDidUpdate:function(e,t){},render:function(){var e=[this.props,this.state],t=e[0],n=e[1];return u.default.createElement("div",{className:"box1",onClick:this.handleClick},"你好,",t.question," ",u.default.createElement("span",null,"我",n.like?"是":"不是",t.name,"!")," ")},handleClick:function(){var e=[this.props,this.state],t=e[0],n=e[1];this.setState({like:!n.like}),t.handles(t.name)}}),p=["asd","fgh","jkl"],m=u.default.createClass({displayName:"ComponentArr",propTypes:{title:u.default.PropTypes.string.isRequired},getDefaultProps:function(){return{age:24}},getInitialState:function(){return{data:null,loading:!0}},componentDidMount:function(){var e=this;s.default.ajax({url:"//licaishi.sina.com.cn/admin2/api/leftMenu",type:"get",dataType:"jsonp",data:{}}).done(function(t){t&&t.code,e.setState({data:t,loading:!1})}).fail(function(){e.setState({data:null,loading:!1})})},render:function(){var e=this,t=[this.props,this.state],n=t[0],a=t[1];return u.default.createElement("div",{onClick:this.handleClick},p.map(function(t){return u.default.createElement(f,{question:n.question,name:t,handles:e.inputFocus})}),u.default.createElement("input",{type:"text",ref:"myTextInput"}),u.default.createElement(A,{data:a.data,loading:a.loading}))},inputFocus:function(e){this.refs.myTextInput.value=e,this.refs.myTextInput.focus()}}),A=u.default.createClass({displayName:"ComponentTest",render:function(){var e=this.props,t=e.data;return u.default.createElement("div",{className:"wrap-loading"},e.loading?u.default.createElement("h2",null,u.default.createElement(E,null)):u.default.createElement("h2",null,t&&0===t.code?u.default.createElement(h,{data:t}):u.default.createElement(g,null)))}}),E=u.default.createClass({displayName:"Loadinng",render:function(){return u.default.createElement("div",null,"loading")}}),h=u.default.createClass({displayName:"LoadSuccess",render:function(){var e=this.props,t=e.data;return u.default.createElement("div",null,t.msg)}}),g=u.default.createClass({displayName:"LoadFail",render:function(){return u.default.createElement("div",null,"加载失败")}});i.default.render(u.default.createElement("div",{className:"container"},u.default.createElement("img",{src:c,style:{display:"block",width:"100%"}}),u.default.createElement("i",{className:"icon icon-logo"}),u.default.createElement("i",{className:"icon icon-delete"}),u.default.createElement("img",{src:r}),u.default.createElement(m,{question:"我是谁？",title:123})),document.body)},566:function(e,t){},567:function(e,t){e.exports="../images/bg.jpg"},568:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABKCAMAAAAFSxPRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC0UExURUxpcYmJiXV1dYaGhWdnZ6SkpHJycm1tbY/DH2pqanBwcHd3d4ODg4uMjGVlZZOUk4GBga2trXp6enl5eZycnIq4J3x8fH19fY/DH5eXl4y/IJWVlY6Ojo+Pj5GRkbS1tI3AIJqamn9/f4/DH4/DH56eno/DH6Cfn4/DH35/f4/DH4q4J4y/IH9+f3h4eJiYmIq4J47AII7BH4/DH4m2KJydnLGxsW9vb6qqqYyMjI6Ojo/DH+OeBuQAAAA7dFJOUwAOEQ8SCxES/BIREQ8OEw0PChAQDGoQEAUNXQ0ODg0JsAwQq+AMIQxdEARpXhAQDWutdVZLDAkRCg0NXGXfowAAAldJREFUWMO11mtT2kAUBuATEISIgpcqKgKiqFhIq62Vmfz//9UkMHs9u3t22c33PPPOuSUAUZ+7j3dI99z1yvl7Sr1M5zd6Mn+vJ/KZnsQX9AS+pEf3FT2yr+lRfUSP6KN65Y9T6pF8ox7Ft+hl+ZFU7/1Oq5+l1Y/S6v20ej+Z/qPWj9Pqx2l1lf/zElXP5Zfees8vsfSKz7uKXpYkn6p3VZ3kO/WjpjLdVkvTCT5V77ZOdN3pE7ta6a0C0R2+j36J6VbfS79AdYvvp1/jutH31G8MusH30E9qfWHSUX9N03Omj4w64q/d896Xso9GZl3z19RLwPWBRVf8NXlXG321qfQ2PFleEv2Q7O02jGm+T/aC6RnQ/LDsWcVT/FD9FCg+bSK/db3hXf6n38wI+gQIfum9TTt9MnmAw3x79ocpHOQjXd3s9azWh3CIz64Y7+pK0jkf4PO652hlhsN7CPd5ZXKxMgNBv4VgH5mZlZL99heE+kh2XX+EQN+6q5U+bXSFJ/uuru71LwjylboXamV2+tXXEkJ89KuNZF++QoBvyZ4J2a+Wrx3w95GZMWTvYLzDt91IPpGPdXach/E8fJvE7Abe4ruyy7qBN/rIfZfuzFSsjJk3+L2f2jYhl4Bl72zBx3fpavatmUd8RS+EbxOefXsOdJ/r+7pfNNkHhq7Wuo1XfE3fzcxA3lVZt/KSj9R94cp+/g+IPlL3hW0id7qDZz7Tv9V/YKbfI/oMSD7Xc/V/xqo7+cZX9KKamY3lEnDdzVe+pl+zicwsdZ+ReBj/RXeVos/+A5dyeipZrR9yAAAAAElFTkSuQmCC"},570:function(e,t,n){n(261),e.exports=n(264)}},[570]);