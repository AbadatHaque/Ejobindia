import React from 'react';
const arr = ["khalid", "ibnu", "walid"]

const value = arr.map((name, ind)=>{
return <option>{name} {ind}</option> 
});

class Map extends React.Component{


    render()
    {
        return(
        <select >
        {value}
        </select>
        );
    }
}
export default Map