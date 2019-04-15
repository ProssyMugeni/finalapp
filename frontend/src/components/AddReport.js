import React, { Component } from 'react';

class AddReport extends Component {
  
  
    render() {
        
  
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Add Farmer</h1>
            <form>
          <div className="LoginId">
          <label htmlFor="name">Name</label>
          <input
          className=""
          type="text"
          placeholder=" Enter Name" required/>
         </div>
          <br/><br/>
          <div className="password">
          <label htmlFor="district">District</label>
          <input
          className=""
          type="text"
          placeholder="Enter District"
          required
        />
        
          </div>
  
          <div className="password">
          <label htmlFor="subcounty">Subcounty</label>
          <input
          className=""
          type="text"
          placeholder="Enter Subcounty"
          
        />
        
          </div>
  
          <div className="password">
          <label htmlFor="parish">Parish</label>
          <input
          className=""
          type="text"
          placeholder="Enter parish"
          
        />
        
          </div>
          <div className="password">
          <label htmlFor="village">Village</label>
          <input
          className=""
          type="text"
          placeholder="Enter Village"
          required
        />
       </div>
  
          <div className="password">
          <label htmlFor="gender"> Gender</label>
          <input
          className=""
          type="gender"
          placeholder="Enter Gender"
          required
        />
        
          </div>
  
  
          <div className="createAccount">
          <button type="submit">Add Farmer</button>
          </div>
          
          </form>
          </div>
        </div>
      );
    }
  }

export default AddReport;