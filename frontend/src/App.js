import React, { Component } from 'react';
import './App.css';

const tasks=[
  {
    id: 4,
    title: "New year",
    description: "shopping for NY",
    completed: false
  },
  {
    id: 2,
    title: "Christmas",
    description: "shopping for Christmas",
    completed: true
  },
  {
    id: 3,
    title: "Tree",
    description: "shopping for Xmas Tree",
    completed: false
  },
]


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewCompleted:false,
      taskList:tasks
    };
  }

displayCompleted =  status =>{
if(status){
  return this.setStatus({viewCompleted:true});
}
return this.setStatus({viewCompleted:false});

}

}

renderTableList = () =>{
  return(
    <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          completed
            </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incompleted
            </span>
      </div>
  )
}

renderItems = ()=>{
  const{viewCompleted} = this.state;
}




// function App() {
//   return (
//     <div className="App">
//       Hello Guys!      
//     </div>
//   );
// }

export default App;
