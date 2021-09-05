import React from 'react';
class From2 extends React.Component
{
constructor(props){
    super(props);
    this.state={
        userName:''
    }
}
mySubmitHandeler = (event) =>
{
    event.preventDefault();
    if (this.state.userName) {
        alert("Your Name Is" + this.state.userName)
    } else {
        alert("plese input your name...")
    }
}
handelChange=(e)=>{
    this.setState({userName:e.target.value})
}
    render(){
        return(
            <form onSubmit={this.mySubmitHandeler}>
            <h1>did not work properly (On submit Project - from-2)</h1>
                <h2>hello {this.state.userName}</h2>
                <input type="text" onChange={this.handelChange}/>
                <input type="submit"/>
            </form>


        );
    }
}
export default From2