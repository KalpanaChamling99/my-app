
import React,{Component} from 'react';
import Person from '../../components/PersonDesc';
// class NameChange extends Component{
//   state = {
//     persons: [
//       {id:"1a",name:"Kalpana Rai",address:"Pathari"},
//       {id:"2a",name:"Madhu",address:"Dharan"},
//     ]
//   }
//   nameChangeHandler = (event) =>{
//     this.setState({
//         persons: [
//             {id:"1a",name: event.target.value,address:"Pathari"},
//             {id:"2a",name:"Madhu",address:"Dharan"},
//           ]
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h2 className="title">Name Change Handler</h2>
//         <Person 
//             name={this.state.persons[0].name}
//             address = {this.state.persons[0].address}
//             changed={this.nameChangeHandler}
//           />
//         <Person 
//             name={this.state.persons[1].name}
//             address = {this.state.persons[1].address}
//         />
//       </div>
//     )
//   }
// }
class NameChange extends Component{
  state = {
    persons: [
      {id:"1a",name:"Kalpana Rai",address:"Pathari"},
      {id:"2a",name:"Madhu",address:"Dharan"},
    ]
  }
  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex( pi => {
      return pi.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons =[...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons:persons
    });
  }
  render(){
    let personList = null;

    personList =(
        <div>
    
            {this.state.persons.map( person => {
                return <Person
                        name= {person.name}
                        address = {person.address}
                        key= {person.id}
                        changed = {(event)=>this.nameChangeHandler(event,person.id)}
                    />
            
            })}
        </div>
    )

    return(
      <div>
        <h2 className="title">Name Change Handler</h2>
        {personList}
      </div>
    )
  }
}
export default NameChange;
// PersonDesc.js
// import React, { Component } from 'react';
// class Person extends Component{
//     render(){
//         return(
//             <div>
//                 <h2>
//                     Name:{this.props.name} Address:{this.props.address}
//                 </h2>
//                 <p>{this.props.children}</p>
//                 <input type="text" onChange={this.props.changed}  value={this.props.value}/>
//             </div>
     
//         )
//     }
// }
// export default Person;
