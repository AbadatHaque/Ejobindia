import React from 'react';

class Statedemo extends React.Component
{
state = {
    uname:"saddam",
    uage:"30",
    location:"burdwan"
}
// handelChange = (e) =>{
// this.setState({uname:e.target.value});
// };
// handelChange1 = (e) =>{
//     this.setState({uage:e.target.value});
//     };

//     handelChange2 = (e) =>{
//         this.setState({location:e.target.value});
//         };
        handelChange = (e)=>{
            this.setState({[e.target.name]:[e.target.value]})
        }

render()
{
    return(
    <div>
        <h2>your name {this.state.uname} </h2>
        <br/> <br/>
        <input type="text" name="uname" value={this.state.uname} onChange={this.handelChange}/>

        <h2>your age {this.state.uage}  </h2>
        <input type="text" name="uage" value={this.state.uage} onChange={this.handelChange}/>

        <h2>your location {this.state.location} </h2>
        <input type="text" name="location" value={this.state.location} onChange={this.handelChange}/>
    </div>
    );
}
}
export default Statedemo