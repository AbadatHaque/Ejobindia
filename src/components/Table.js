import React from "react";

class Table extends React.Component
{
    state = {
        userName:"SADDAM",
        loc:"Bardheman",
        subject:"HISTORT",
        gender:"male"
    }
    handelChange = (e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
render()
{

    return(
<div>

<input type="text" name="userName" value={this.state.userName} onChange={this.handelChange} />
<input type="text" name="loc" value={this.state.loc} onChange={this.handelChange} />
<select name="subject" value={this.state.subject} onChange={this.handelChange}>
    <option value="his">HISTORY</option>
    <option value="geo">GEOGRAPHY</option>
    <option value="math">MATH</option>
    <option value="eng">ENGLISH</option>
</select>

<from name="gender" value={this.state.gender}  onChange={this.handelChange}>
<input type="radio" name="gender" value="male"/>male
<input type="radio" name="gender" value="female"/>female
<input type="radio" name="gender" value="oth"/>oth
</from>

<table className="table">
<tr>
    <th>Name</th>
    <th>Location</th>
    <th>Subject</th>
    <th>Gender</th>
</tr>
<tr>
    <td>{this.state.userName}</td>
    <td>{this.state.loc}</td>
    <td>{this.state.subject}</td>
    <td>{this.state.gender}</td>
</tr>
</table>
<br></br>
</div>
    );
}
}
export default Table