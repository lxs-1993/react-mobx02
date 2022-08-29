import React, { Component, PureComponent } from "react";
import { observer, inject } from 'mobx-react';
 
@inject( 'store')
@observer
class App extends PureComponent {
    
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {  };
    }
    render() {
        const { authStore } = this.props.store;
        return (
            <div>
                {authStore.name}/
                
 
                {authStore.titleName}
                <br />
                <button onClick = { () => { 
                    authStore.setName(new Date().getTime()); 
                } }>点击按钮触发action</button>
            </div>
        );
    }
}
 
export default App;
 