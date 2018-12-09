import React , { Component } from 'react';
import axios from 'axios';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : props.id || false,
            task : props.task || true,
            done : (props.done === "1" ? true : false ) || false,
            priority : (props.priority === "1" ? true : false ) || false,
            date : props.date || false,
        }
        this.handlePriority = this.handlePriority.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
        this.handleupdates = this.handleupdates.bind(this);
      }
      handleCompletion(event){
        let priority =  this.state.priority
        let done = !this.state.done
        this.setState({done : done})
        this.handleupdates(priority, done)
      }
      handlePriority(event) {
        let priority =  !this.state.priority
        let done = this.state.done
        this.setState({priority : priority})
        this.handleupdates(priority, done)
      }
      constructdatas = res => {
        console.log(res)
        
        this.setState({
            priority : res.data[0].priority  === "1" ? true : false ,
            done : res.data[0].done  === "1" ? true : false 
        })
      }
      handleupdates(priority, done){
        axios.get('https://lastminutebooks.000webhostapp.com/sambarAPI/updateData.php', {
            params: {
                id: this.state.id,
                priority: priority  === true ? 1 : 0,
                done: done  === true ? 1 : 0
            }
          })
          .then( res => this.constructdatas(res)  )
          .catch( error => console.log(error) );  
      }

 render() {

    return (  
        <div>  
        <div className="divider"></div>        
        <div className="row"> 
            <div className="col s9"> 
                { this.state.task }
            </div>
            <div className="col s3"> 
            
            <label>
                <input type="checkbox" checked={this.state.done } onChange={this.handleCompletion}/>
                <span> </span>
            </label>
            <br/>
            { !this.state.done && <label>
                <input type="checkbox" className="checkbox-red filled-in" checked={this.state.priority} onChange={this.handlePriority}/>
                <span> </span>
            </label> }

            </div>
        </div> 
        </div> 
        );
    }
}

export default Task;