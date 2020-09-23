
import React,{Component} from 'react';
import Person from '../../components/PersonDesc';

class DeleteName extends Component{
  state = {
    persons: [
      {id:"1a",name:"Kalpana Rai",address:"Pathari"},
      {id:"2a",name:"Madhu",address:"Dharan"},
    ]
  }
  deleteHandler = (personIndex) =>{
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({
        persons:person
    })
  }

  render(){
    let personList = null;

    personList =(
        <div>
            {this.state.persons.map( (person,index) => {
                return <Person
                        name= {person.name}
                        address = {person.address}
                        key= {person.id}
                        click = {()=>this.deleteHandler(index)}
                    />
            
            })}
        </div>
    )

    return(
      <div>
        <h2 className="title">Deleting component</h2>
        {personList}
      </div>
    )
  }
}
export default DeleteName;
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
