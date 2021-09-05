import React from 'react';
class Cheack extends React.Component{
    render()
    {
        return(
            <center>
<from onSubmit={this.handelSubmit}>
<label>Name:</label>
   <input type="text" name="userName"/>
<br/><br/>

<label> Location:</label>
   <select name="car">
  <option value="Kolkata">Kolkata</option>
  <option value="Delhi">Delhi</option>
  <option value="Hayderabad">Hayderabad</option>
  <option value="Chennai">Chennai</option>
</select>
<br/><br/>

<label> gender:</label>
<input type="radio" name="gender" value="Male"/>Male
<input type="radio" name="gender" value="Female"/>Female
<br/><br/>

<label>Language:  </label>
<input type="checkBox" name="lan" value="Ben"/>
<label>Bengali   </label>
<input type="checkBox" name="lan" value="Hinde"/>
<label>Hindi    </label>
<input type="checkBox" name="lan" value="Eng"/>
<label>English</label>
<br/><br/>
<input type="submit" value="Submit"/><br/><br/>
</from>
</center>
        );
    }
}
export default Cheack