import React, { Component } from 'react';

const axios = require('axios');

class Forgot extends Component {
  constructor(props){
    super(props);
    this.state={fields:{} }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    let fields = this.state.fields;
    //console.log(fields[e.target.name]);
    fields[e.target.name] = e.target.value;
    this.setState({fields});
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const userData = this.state.fields;
    console.log(this.state.fields);
    console.log(userData);  
    axios.post('http://localhost:5000/Forgate/'+this.state.fields.email,userData)
   .then(res => {
      console.log(res.data.msg);
    //   window.location.assign('/NotFound');
      if(res.data.msg==='1'){
          localStorage.setItem('tempMail:',this.state.fields.email);
          window.location.assign('/checkotp')
      }
      else{
          alert("wrong Email");
      }
    })
    .catch((err) =>{
      console.log(err);
    })
   
}
    render() {
    return (
      <div className="Log_emp.css">
        <form className="px-4" encType="multipart/form-data" onSubmit= {this.onSubmit}> 
        <h4 className="modal-header text-center">Forgot password</h4>

          <div className="form-group">
           <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" placeholder="Enter a valid E-mail" value={this.state.fields.email || ''} onChange={this.onChange} />
          </div>
   {/* <a href="/checkotp" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Submit</a> */}
             
    <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" >Submit</button>
            <p>Not a member?<a href="/SignUp">SignUp</a></p>
            
        </form>
        </div>
    );
  }
}

export default Forgot;
