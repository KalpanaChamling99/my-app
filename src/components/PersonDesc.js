import React, { Component } from 'react';

class Person extends Component{
    shouldComponentUpdate(nextprops,nextState){
        console.log('[personDesc.js] should component update');
        return true;
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log('[personDesc.js] Get snapshot');
        return {message: 'snapshot!'}
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log('[personDesc.js] component did update');
        console.log(snapshot);
    }
    render(){
        return(
            <div>
                <h2 onClick={this.props.click}>
                    Name:{this.props.name} Address:{this.props.address}
                </h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}  value={this.props.value}/>
            </div>
        )
    }
}
export default Person;
