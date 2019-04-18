import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../actions/leads';

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
        
        <h2> List</h2>
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th> Farmer's Name</th>
              <th>Season</th>
              <th>Status</th>
              {/* <th>Farm Area</th>
              <th>Crop Type</th> */}
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.season}</td>
                {/* <td>{lead.status}</td> */}
                {/* <td>{lead.farm_area}</td>
                <td>{lead.crop_type}</td> */}
                <td>
                  <button 
                  // onClick={this.props.deleteLead.bind(this.lead.name)}
                   className="btn btn-warning btn-warning"
                  >
                    {" "}
                  In Progress
                  </button>
                  </td>
                  <td>
                  <button  className="btn btn-success btn-sm"
                  >
                    {" "}
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="createAccount-add">
        <button  className="btn btn-dark btn-lg"
                  >
                    {" "}
                    Add Season
                  </button>
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
