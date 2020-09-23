
import React,{Component} from 'react';
import './App.css';
// import TogglePerson from './EventHandling/toggle';
// import SwitchName from './EventHandling/switchName';
// import NameChange from './EventHandling/nameChange';
// import DeleteName from './EventHandling/delete';
import Button from '../components/Button';
import PersonList from '../components/PersonList';

class App extends Component{
  state = {
    persons: [
      {id:"1a",name:"Kalpana Rai",address:"Pathari"},
      {id:"2a",name:"Madhu",address:"Dharan"},
    ],
    showPersonDetail: false
  }
  static getDerivedStateFromProps(props,state){
    console.log("[App.js] get derived state",props);
    return state;
  }
  componentDidMount(){
    console.log('[App.js] mount');
  }
  shouldComponentUpdate(nextprops,nextState){
    console.log('[App.js] should component update');
    return true;
  }
  
  componentDidUpdate(prevProp,prevState){
    console.log('[App.js] component did update');
  }
  togglePersonHandler = () => {
    const enable = this.state.showPersonDetail;
    this.setState({
      showPersonDetail: !enable
    });
  }
  deleteNameHandler = (personIndex) =>{
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({
      persons: person
    })
  }
  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(pid=>{
      return pid.id ===id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    });
  }
  

  render(){
    

    let personList = null;
    if(this.state.showPersonDetail){
      personList = (
        <div>
          <PersonList 
            personArray ={this.state.persons}
            click ={this.deleteNameHandler}
            changed = {this.nameChangeHandler}
          />
        </div>
      )
    }
    return(
      <div>
        <Button click={this.togglePersonHandler} />
        {personList}
        {/* <h2 class="title">Event handling</h2> */}
        {/* <TogglePerson /> */}
        {/* <SwitchName /> */}
        {/* <NameChange /> */}
        {/* <DeleteName /> */}
        

      </div>
    )
  }
}
export default App;
