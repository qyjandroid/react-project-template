import { createHashHistory } from 'history';
let history = createHashHistory();
export default history;

//import { push } from 'connected-react-router';
//提供了push,go,goBack,replace,block,goForward方法。
//push("/home") || push({pathname:"/home",search:"name=1",hash:"1"})
//history 可以分为两部分，切换和修改，切换历史状态：back,forward,go对应浏览器的后退，跳转，前进。history.go(2);//前进两次

//push 把页面状态保存在state对象中，当页面回来的时候，可以通过event.state获取到state对象。