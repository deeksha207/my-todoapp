import React from "react";
import TodoList from "./TodoList";
import todoItem from "./todoItem";
import SubmitForm from "./SubmitForm";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            todos:todoItem
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.add_me=this.add_me.bind(this);
    }
   /* handleDelete(id){
        this.setState(prevState=>({
            todos:prevState.todos.filter(el=> el!=id)
        }));
    }
    */
   handleDelete(item){
       const newElem=this.state.todos.filter((element)=> {return element.id!==item.id})
      this.setState({
          todos:newElem
        })
   }

   add_me(update_todo){
       this.setState({todos:[...this.state.todos,update_todo]});       
   }
        


    handleClick(id){
        this.setState(prevState=>{
        const updateValue=prevState.todos.map(list=>{
            if(list.id===id){
               return{
                   ...list,
                   completed:!list.completed
               }
            }
            return list
        })
        return {
            todos:updateValue
        }
    })
    }
    

    render(){
        const todo=this.state.todos.map(item=><TodoList key={item.id} item={item} handleClick={this.handleClick} onDelete={this.handleDelete}/>);//way of return
        return(
            <div>
                <SubmitForm onSubmit={this.add_me}/>
                {todo}
            </div>
        );
    }
}

export default App;