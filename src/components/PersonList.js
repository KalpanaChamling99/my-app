import React,{Component} from 'react';
import Person from './PersonDesc';
class PersonList extends Component{
  shouldComponentUpdate(nextprops,nextState){
    console.log('[personList.js] should component update');
    return true;
  }
  getSnapshotBeforeUpdate(prevProp,prevState){
    console.log('[personList.js] Get snapshot');
    return {message: 'snapshot!'}
  }
  componentDidUpdate(prevProp,prevState,snapshot){
    console.log('[personList.js] component did update');
    console.log(snapshot);
  }
  componentWillUnmount(){
    console.log('[personList.js] componentwill unmount');
  }

  render(){
    console.log("rendering....");
    return (
      <div>
        {this.props.personArray.map((person,index)=>{
          return <Person
              name={person.name}
              address={person.address}
              click={()=>this.props.click(index)}
              changed = {(event)=>this.props.changed(event,person.id)}
              key={person.id}
          />
        })}
      </div>
    )
  }
}
export default PersonList;
