import React,{Component} from 'react';
import Person from '../../components/PersonDesc';

class Toggle extends Component{
    state = {
        persons: [
            {id:"1a",name:"Kalpana Rai",address:"Pathari"},
            {id:"2a",name:"Madhu",address:"Dharan"},
        ],
        showPersonDetail: false
    }
    togglePersonHandler= () => {
        const enable = this.state.showPersonDetail;
        this.setState({
            showPersonDetail: !enable
        });
    }
    
    render(){
        let personList = null;
        if(this.state.showPersonDetail){
            personList =(
                <div>
                    <h2 className="title">Toggle 1 result</h2>
                     <Person 
                        name={this.state.persons[0].name}
                        address = {this.state.persons[0].address}
                    />
                    <Person 
                        name={this.state.persons[1].name}
                        address = {this.state.persons[1].address}
                    >Hello Kalpana</Person>
                </div>
            )
        }
        return(
            <div>
                <h2 className="title">Toggle's Example</h2>
                <button onClick={this.togglePersonHandler}>Toggle Person</button>
                 <Person 
                    name={this.state.persons[0].name}
                    address = {this.state.persons[0].address}
                />
                <Person 
                    name={this.state.persons[1].name}
                    address = {this.state.persons[1].address}
                />
                {personList}
                {this.state.showPersonDetail?
                <div>
                    <h2 className="title">Toggel 2 Result</h2>
                    <Person 
                        name={this.state.persons[0].name}
                        address = {this.state.persons[0].address}
                    />
                    <Person 
                        name={this.state.persons[1].name}
                        address = {this.state.persons[1].address}
                    />
                    </div>
                :null}
            </div>
        )
    }
}
export default Toggle;

// personDesc.js
// import React, { Component } from 'react';
// class Person extends Component{
//     render(){
//         return(
//             <div>
//                 <h2>
//                     Name:{this.props.name} Address:{this.props.address}
//                 </h2>
//                 <p>{this.props.children}</p>
//             </div>
//         )
//     }
// }
// export default Person;