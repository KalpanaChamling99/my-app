
import React,{Component} from 'react';
import Person from '../../components/PersonDesc';


class SwitchName extends Component{
  state = {
    persons: [
      {id:"1a",name:"Kalpana Rai",address:"Pathari"},
      {id:"2a",name:"Madhu",address:"Dharan"},
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons:[
        {id:"1a",name: "...Rai",address:"Pathari-1"},
        {id:"2a",name:"Madhu",address: "Dharan"},
      ]
    });
  }
  switchNameHandlerWithBind = (newName) => {
    this.setState({
      persons:[
        {id:"1a",name: newName,address:"Pathari-1"},
        {id:"2a",name: "Madhu",address: "Dharan"},
      ]
    });
  }
  render(){
    return(
      <div>
        <button onClick={this.switchNameHandler}> switch name</button>
        <Person 
            name={this.state.persons[0].name}
            address = {this.state.persons[0].address}
            click={this.switchNameHandler}
          />
        <button onClick={this.switchNameHandlerWithBind.bind(this,"Hello kalpana")}> switch name with bind</button>
        <Person 
            name={this.state.persons[1].name}
            address = {this.state.persons[1].address}
            click= {this.switchNameHandlerWithBind.bind(this,"Bye")}
        />
        
      </div>
    )
  }
}
export default SwitchName;
// persoDesc.js
// class Person extends Component{
//   render(){
//       return(
//           <div>
//               <h2 onClick={this.props.click}>
//                   Name:{this.props.name} Address:{this.props.address}
//               </h2>
//               <p>{this.props.children}</p>
//           </div>
//       )
//   }
// }
// export default Person;

