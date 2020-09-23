
import React,{Component} from 'react';
import './App.css';
import PersonList from '../components/PersonList';
import Button from '../components/button';


class App extends Component{
  state = {
    persons: [
      {id:"1a",name:"Kalpana Rai",address:"Pathari"},
      {id:"2a",name:"Madhu",address:"Dharan"},
    ],
    otherState: "other state",
    showPersonDetail: false
  }
  
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( pi=>{
      return pi.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })

    // this.setState({
    //   persons:[
    //     {name: event.target.value,address:"Pathari-1"},
    //     {name:"Madhu",address: "Dharan"},
    //   ]
    // });
  }
  togglePersonHandler = () =>{
    const enable = this.state.showPersonDetail;
    this.setState({
      showPersonDetail: !enable
    });
  }
  
  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({
      persons:person
    });
  }
  render(){
    let personList = null;
    if(this.state.showPersonDetail){
      personList = (
        <div>
          <PersonList
            personList ={this.state.persons}
            click ={this.deletePersonHandler}
            changed ={this.nameChangeHandler}
          />
        </div>
      )
    }
    return(
      <div>
        <Button click={this.togglePersonHandler}/> 
        {personList}
      </div>
    )
  }
}
export default App;
