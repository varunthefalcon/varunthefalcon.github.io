import React, { Component } from 'react';
import Task from './task';
import '../assets/css/material.css';
import '../assets/css/sambar.css';
import axios from 'axios';
import { Modal, Button } from 'react-materialize';




class Todo extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      inputtask : "",
      varuntodos : [],
      priyatodos : []
    };
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.handleInputchange = this.handleInputchange.bind(this);    
    this.constructdatas = this.constructdatas.bind(this);    
  }
  constructdatas = res => {
    console.log('res')
    console.log(res)
    var varuntodos = res.data.filter( varu => varu.idiot === 'varun');
    var priyatodos = res.data.filter( varu => varu.idiot === 'priya');
  this.setState(
    { 
      inputtask : "",      
      varuntodos : varuntodos,
      priyatodos : priyatodos
    })
  }

  componentDidMount(){
    axios.get('https://lastminutebooks.000webhostapp.com/sambarAPI/getData.php')
    .then( res => this.constructdatas(res) )
  }

  handleInputchange (event) {
    this.setState({inputtask: event.target.value});    
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('task') === "" ) {
      alert(data.get('priority'));
      return;
    }

    axios.get('https://lastminutebooks.000webhostapp.com/sambarAPI/putData.php', {
      params: {
      priority: data.get('priority') ? 1 : 0,
      idiot: data.get('idiot'),
      task: data.get('task')
      }
    })
    .then( res => this.constructdatas(res)  )
    .catch( error => console.log(error) );
  }

 CustomModal = (props) => 
  <Modal header='Ena pananumnu solli tholayum' trigger={  <Button waves='light'>{props.name}</Button>  }>
<form method="POST" onSubmit={this.handleSubmit}>
<div className="input-field">  
  <input type="text" onChange ={ this.handleInputchange } name="task" id="task" value={this.state.inputtask}/>
<label>  Task :  </label>
</div>
<label>
                <input type="checkbox"  name="priority" id="priority"  className="checkbox-red filled-in" checked={this.state.priority} onChange={this.handlePriority}/>
                <span>Priority</span>
            </label>
            <br />
  <input type="hidden" name="idiot" id="idiot" value={props.idiot } />
  <button className="btn left-align waves-effect modal-close waves-light" type="submit" name="action">Submit  </button>
</form>

</Modal>

  render() {
    return (
      <div className="container-fluid">
            <div className="row">
              <div className="col s6 center">
                <h5>
                <this.CustomModal name="Chicken" idiot="varun"/>                
                </h5>
              </div>
              <div className="col s6 center">
              <h5>
              <this.CustomModal name="Parota" idiot="priya"/>
               </h5>
              </div>
            </div>
            <div className="row"> 
            <div className="col s6">
            <div className="row"> 
              { this.state.varuntodos.map(todo => <Task task = {todo.task} key={todo.id} done = { todo.done } priority = { todo.priority } id={ todo.id } date = { todo.date } />)}
            </div>

            </div>
            <div className="col s6">   
            { this.state.priyatodos.map(todo => <Task task = {todo.task} key={todo.id} done = { todo.done } priority = { todo.priority } id={ todo.id } date = { todo.date } />)}
            </div>
            </div>
      </div>
    );
  }
}

export default Todo;