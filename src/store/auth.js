import { observable, action, computed, makeObservable } from "mobx";
 
 
export class AuthStore {
    // 定义变量
    @observable name = 'zhangsan000';
    @observable sex =  '男';
    @observable userObj = {
        name: 'zhangsan000',
        age: 233,
        token: '12345689'
    }
 
    // 初始化
    constructor() {
        // mobx6版本以后 必须得在初始化加makeObservable
        //也可以按照官方的方法makeObservable 案例,就不用写@observable装饰器了https://mobx.js.org/README.html
        makeObservable(this);
 
    }
 
    // 动作
    @action.bound
    setName(v) {
        console.log('触发action');
        this.name = v;
 
    }
    @action
    setUserObj(obj) {
        this.userObj = obj;
    }
 
    // 计算属性
    @computed get titleName(){
        return this.name+'___111';
    }
 
}