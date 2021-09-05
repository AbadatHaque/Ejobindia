import React from 'react';
class From3 extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
    }
    handelChange = (e)=>{
        this.setState({userName:e.target.value})
    }
render()
{
    let header = '';
    if (this.state.userName) {
        header=<h2>AssalamuAlaiqum {this.state.userName}</h2>
    } else {
        header='';
    }
    return(
<div>
{header}
 <input type="text" onChange={this.handelChange} />
</div>
    );
}
}
export default From3