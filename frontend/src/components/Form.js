import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    district: "",
    subcounty: "",
    parish: "",
    village: "",
    gender: "",
    Marriage_status: "",
    language: "",
    telephone: "",
    image: "",
    community_status: "",
    instructor_possibility: "",
    farm_area: "",
    crop_type: "",
    past_harvest: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name,
        district,
        subcounty,
        parish,
        village,
        gender,
        Marriage_status,
        language,
        telephone,
        image,
        community_status,
        instructor_possibility,
        farm_area,
        crop_type,
        past_harvest } = this.state;
    const lead = { name,
        district,
        subcounty,
        parish,
        village,
        gender,
        Marriage_status,
        language,
        telephone,
        image,
        community_status,
        instructor_possibility,
        farm_area,
        crop_type,
        past_harvest  };
    this.props.addLead(lead);
    this.setState({
        name: "",
        district: "",
        subcounty: "",
        parish: "",
        village: "",
        gender: "",
        Marriage_status: "",
        language: "",
        telephone: "",
        image: "",
        community_status: "",
        instructor_possibility: "",
        farm_area: "",
        crop_type: "",
        past_harvest: ""
    });
  };

  render() {
    const { name,
    district,
    subcounty,
    parish,
    village,
    gender,
    Marriage_status,
    language,
    telephone,
    image,
    community_status,
    instructor_possibility,
    farm_area,
    crop_type,
    past_harvest } = this.state;
    return (
      // <div className="wrapper">
          <div className="reg-wrapper">
      <div className="card card-body mt-4 mb-4">
        <h2>Add Farmer</h2>
        <form onSubmit={this.onSubmit}>

        {/* <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file_field"
              name="image"
              onChange={this.onChange}
              value={image}
            />
          </div><br/><br/> */}
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>District</label>
            <input
              className="form-control"
              type="text"
              name="district"
              onChange={this.onChange}
              value={district}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Subcounty</label>
            <input
              className="form-control"
              type="text"
              name="subcounty"
              onChange={this.onChange}
              value={subcounty}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Parish</label>
            <input
              className="form-control"
              type="text"
              name="parish"
              onChange={this.onChange}
              value={parish}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Village</label>
            <input
              className="form-control"
              type="text"
              name="village"
              onChange={this.onChange}
              value={village}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Gender</label>
            <input
              className="form-control"
              type="text"
              name="gender"
              onChange={this.onChange}
              value={gender}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Marriage Status</label>
            <input
              className="form-control"
              type="text"
              name="marriage_status"
              onChange={this.onChange}
              value={Marriage_status}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Language</label>
            <input
              className="form-control"
              type="text"
              name="language"
              onChange={this.onChange}
              value={language}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Telephone</label>
            <input
              className="form-control"
              type="text"
              name="telephone"
              onChange={this.onChange}
              value={language}
            />
          </div><br/><br/>

          
          <div className="form-group">
            <label>Community Status</label>
            <input
              className="form-control"
              type="text"
              name="community_status"
              onChange={this.onChange}
              value={community_status}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Instructor Possibility</label>
            <input
              className="form-control"
              type="text"
              name="instructor_possibility"
              onChange={this.onChange}
              value={instructor_possibility}
            />
          </div><br/><br/>

          <div className="form-group">
            <label>Farm Area</label>
            <input
              className="form-control"
              type="text"
              name="farm_area"
              onChange={this.onChange}
              value={farm_area}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Crop Type</label>
            <input
              className="form-control"
              type="text"
              name="crop_type"
              onChange={this.onChange}
              value={crop_type}
            />
          </div><br/><br/>
          <div className="form-group">
            <label>Past Harvest</label>
            <input
              className="form-control"
              type="text"
              name="past_harvest"
              onChange={this.onChange}
              value={past_harvest}
            />
          </div><br/><br/>
         
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </form>
      </div>
      </div>
      //  </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
