import React from 'react';


//Massage 
function Massage(props){
    if (props.loginHeading) {
        return <h3>Wellcome Back!!</h3>
    } else {
        return <h3>Please Log In First</h3>
    }
}



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {loginHeading : false, val:"Login"};
    }
 
    handelChange=() =>{
        if (this.state.loginHeading) {
            this.setState({loginHeading:false,val:"Login" });

        } else {
            this.setState({loginHeading:true,val:"Logout" });

        }
        

    }

    render(){
        return(
        <div className="container">
        <center>
        <h1 className=" text-white bg-dark"> <u>Props</u> </h1>
        <Massage loginHeading = {this.state.loginHeading}/>
        <button className="text-white bg-dark" onClick={this.handelChange}>{this.state.val}</button>
        </center>
        </div>
        );
    }
}


export default Login