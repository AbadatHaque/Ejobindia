import React from 'react';
class From5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            age:'',
            location:'',
            result:''
        }
    }

    handelChange=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
  handelSubmit = ()=> {
  let ans = 'AssalamuAlaikum '+ this.state.userName+'  Your age is '+ this.state.age+'  your location '+this.state.location;
  this.setState({result:ans})
  }
                  
    
      
        
render(){
    
    
    return(
        <div /*onSubmit={this.handelSubmit}*/>
        <input type="text" name="userName" onChange={this.handelChange} />
        <input type="number" name="age"  onChange={this.handelChange}/>
        <input type="text" name="location"  onChange={this.handelChange}/>
        <input type="submit"  value="Show" onClick={this.handelSubmit}/>
         <h4>{this.state.result}</h4>
        </div>
  
    );
}
}
export default From5