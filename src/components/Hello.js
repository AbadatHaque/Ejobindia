import React from 'react';

class Hello extends React.Component
{
    render()
    {
        return(
         <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th> loc</th>
                </tr>
                <tr> 
                    <td>Saddam</td>
                    <td>20</td>
                    <td>Kolkata</td>
                </tr>
                <tr> 
                    <td>Abadat</td>
                    <td>21</td>
                    <td>Delhi</td>
                </tr>
            </table>
          
            </div>

        );
    }
}
export default Hello