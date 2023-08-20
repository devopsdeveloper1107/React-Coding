import React, { useEffect, useState } from 'react';
import Users from './component/Users';
export default function App() {  
  const[userdata, setUserdata]= useState([]);
  const getUserdata= async()=>{
    try {
      const req= await fetch("https://jsonplaceholder.typicode.com/users");
      const resData= await req.json();
       if(resData.length > 0)
      {
        setUserdata(resData);
      }
    } catch(e){
      console.log(e);
    }
  }
  useEffect( ()=>{
    getUserdata();
  },[]);
   return (
    <React.Fragment>
    <div className="App">  
    <h1 className='mt-3 mb-3'>Creating a Dynamic Table with Data Fetched from an API</h1> 
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <table className='table table-bordered border-white'>
          <thead class="table-dark">
            <tr>
              <th>Sr.No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
             <Users usersData={ userdata}/>
          </tbody>

          </table>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

