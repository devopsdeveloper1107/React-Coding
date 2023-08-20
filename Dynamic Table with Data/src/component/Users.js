import React from "react";

export default function Users({ usersData}){
    //console.log(usersData);
    return(
        <React.Fragment>
            <>
            {
             usersData.map((uData, index)=>(
                <tr key={uData.id}>
                    <td>{uData.id} </td>
                    <td>{uData.username} </td>
                    <td>{uData.email} </td>
                    <td>{uData.address.city} </td>

                </tr>
             ))
            }
            
            </>
        </React.Fragment>
    );
}