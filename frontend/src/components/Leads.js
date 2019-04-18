import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../actions/leads';
import {HashRouter as Router,
Route,
Link,
NavLink,
Switch
} from "react-router-dom";

export class Leads extends Component {
  static PropTypes ={
    leads:PropTypes.array.isRequired,
    getLeads:PropTypes.func.isRequired,
    deleteLeads:PropTypes.func.isRequired

  }
  
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        
        <h2>Farmers List</h2>
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Telephone</th>
              <th>Farm Area</th>
              <th>Crop Type</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.gender}</td>
                <td>{lead.telephone}</td>
                <td>{lead.farm_area}</td>
                <td>{lead.crop_type}</td>
                <td>
                  <button 
                  // onClick={this.props.deleteLead.bind(this.lead.name)}
                   className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                  </td>
                  <td>
                  <button  className="btn btn-success btn-sm"
                  >
                    {" "}
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="createAccount-add">
        <Link to="/Reportlist"><button  className="btn btn-dark btn-lg">Add Farmer </button></Link>
                 
                  </div>
      </Fragment>


    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});


export default connect(mapStateToProps,{ getLeads, deleteLead  })
  (Leads);
