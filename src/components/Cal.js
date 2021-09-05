import React from 'react';

function Total(props){
  const si = (props.pri* props.rat* props.tim)/100;

  if (props.clicked) {
    return   <p>Simple Interest= ${si},  Total Amount=${parseInt(props.pri)+si} </p>;
  } else {
    return " ";
  }
};

class Cal extends React.Component{
  constructor(props){
    super(props);
    //this.Total = this.Total.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.state={clicked:false, pri:'', rat:'', tim:'', err:''}
  }
  
  //submit function
  handelSubmit(event){
    event.preventDefault();
    let reg = /^[0-9]+/g;
    if ((this.state.tim)&&(this.state.rat)&&(this.state.pri).match(reg)) {
      this.setState({clicked:true, err:" "})
    }else{
      this.setState({err:"please input number"})
    }
  }

  //onchange functions
  handelChange=(e)=>{
    this.setState({[e.target.name]:e.target.value, clicked:false});
    }

    render(){
      return(
<div className="container">
<form onSubmit={this.handelSubmit}>
<label>Principal: </label>
<input type="text" name="pri" onChange={this.handelChange} /><br/>
<label>Rate:</label><input type="text" name="rat" onChange={this.handelChange}/><br/>
<label>Time: </label><input type="text" name="tim" onChange={this.handelChange}/><br/><br/>
<input type="submit"/>
<Total clicked={this.state.clicked} pri={this.state.pri} rat={this.state.rat} tim={this.state.tim}/>
<p>{this.state.err}</p>
</form>
<br/><br/><br/>
</div>
      );
    }
}
export default Cal