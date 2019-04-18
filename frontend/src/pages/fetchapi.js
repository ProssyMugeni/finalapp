import React, { Component , Fragment} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'


class fetchapi extends Component {
    constructor() {
      super();
      this.state = {
        Officers: []
      };
      // this.handledata = this.handledata.bind(this)
    }
  
  
  
    handledata=()=> {
      console.log(this.state);
      axios
        .get("")
        .then((response)=> {
          // handle success
          console.log(response.data);
          console.log([response.data[0]]);
          this.setState({Officers:[response.data[0] ]});
          // setState({data:'hello'})
          // console.log(this.state)
        
        })
        .catch((error)=> {
          // handle error
          console.log(error);
        })
        .then(()=> {
          // always executed
        });
        
    };
    componentDidMount() {
  this.handledata()
    }
    render() {
      return (
        
        
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <Fragment>
        <table className="table table-striped table-inverse table-responsive">
          <h1>officers</h1>
          <thead className="thead-inverse">
            <tr>
              <th>Login id</th>
              <th>name</th>
              <th>district</th>
              <th>phone</th>
              {/* <th>date posted</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.Officers.map(officer => (
              <tr key={officer.id}>
                <td>{officer.login_id}</td>
                <td>{officer.name}</td>
                <td>{officer.district}</td>
                <td>{officer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        
  
        
      </Fragment>
      );
    }
  }
  
  export default fetchapi;
  