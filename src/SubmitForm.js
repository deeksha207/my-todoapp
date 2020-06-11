import React from "react";

class SubmitForm extends React.Component{
    constructor(){
        super();
        this.state={
            term:[],
            add_str:" "
        }
        this.handle_submit=this.handle_submit.bind(this);
    }

    handle_submit(e){
        e.preventDefault();
        if(this.state.add_str === ' '){
            return;
        }
        var arr=[];
        console.log(this.state.add_str);
        arr.push(this.state.add_str);
        console.log(arr);
        this.setState({term:this.state.term.push(this.state.add_str)});
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
        this.setState({add_str:' '});

    }

    render(){
        return(
            <div className="submit">
                <form onSubmit={this.handle_submit}>
                <input className="write" type="text" placeholder="Enter todo work" value={this.state.add_str} onChange={(e)=>this.setState({add_str:e.target.value})}></input>
                <button className="btn" >Add</button>
                </form>
            </div>
        );
    }
}

export default SubmitForm;