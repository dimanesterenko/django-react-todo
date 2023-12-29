import React, { Component } from 'react';
import './App.css';
//import Modal from "./components/Modal";
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
//render items in list (completed)
renderItems = ()=>{
  const{viewCompleted} = this.state;
  const newItems = this.state.taskList.filter(
    item => item.completed==viewCompleted
  );
};

render(){
  return(
    <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                    </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {/* {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null} */}
      </main>
  )
}

}


// function App() {
//   return (
//     <div className="App">
//       Hello Guys!      
//     </div>
//   );
// }

export default App;
