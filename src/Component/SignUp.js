import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './My.css';
const axios = require('axios');

class Register extends Component {
  state={
    RedirectToNewPage:false
  }
  constructor(props){
    super();
    this.state={
      fields:{},
      data:[], 
      dataa:[]
    }
    //this.state={dtat:[] }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);   
  }
  onChange(e) {
    let fields = this.state.fields;
       //console.log(fields[e.target.name]);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:5000/api/industries`);
    const json = await response.json();
    this.setState({ data: json });
    
    const response1 = await fetch(`http://localhost:5000/api/categories`);
    const jsonf = await response1.json();
    this.setState({ dataa: jsonf });
  }
  
  onSubmit=(e)=>{
   
    e.preventDefault(); 
    if (this.validateForm()) {
      // let fields = {};
     alert("Form submitted");
      const userData = this.state.fields;
      userData.role="0";
      userData.status="0";
      
      userData.FullName=userData.firstname+""+userData.lastname;
      
    console.log(this.state.fields);
    axios.post(`http://localhost:5000/api/SignUp`,userData)
    .then((res) =>
     {       
       console.log(res);
       console.log(res.data);

})
}
else
{
  return Error;
}
}    

validateForm() {

  let fields = this.state.fields;
  // let errors = {};
  let formIsValid = true;
 // alert("error");

  if (!fields["firstname"]) {
    formIsValid = false;
    alert("enter a Name");
 //  errors["firstname"] = "*Please enter your firstname.";
  }

  if (typeof fields["firstname"] !== "undefined") {
    if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
    alert("Please enter alphabet characters only.");
    // errors["firstname"] = "*Please enter alphabet characters only.";
     
    }
  }
 
  // if (!fields["password"]) {
  //   formIsValid = false;
  //  alert("*Please enter your password.");
  //   // errors["password"] = "*Please enter your password.";
  // }

  // if (typeof fields["password"] !== "undefined") {
  //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
  //     formIsValid = false;
  //     alert("*Please enter secure and strong password.");
  //     //errors["password"] = "*Please enter secure and strong password.";
  //   }
  // }
 
  this.setState({
    errors: 0
  });
  return formIsValid;

}





    render()
     {    
       if(this.state.RedirectToNewPage)
       {
         return(
           <Redirect to="/" />
         )
       }  
        return (
          
        <div className="My">
        <form  className="px-4 py-3"  onSubmit= {this.onSubmit} id="sign">

        <h4 className="modal-header text-center">SIGNUP</h4>
         <div className="form-row">
         <div className="form-group col-md-6"  >
         <label>First Name</label>
         <input type="text" className="form-control" name="firstname" placeholder="Enter UserName" value={this.state.fields.firstname || ''} onChange={this.onChange} />
         {/* <span class="badge" style={{color: "red"}}>{this.state.errors.firstname}</span> */}
         </div> 
         <div  className="form-group col-md-6">  
         <label>Last Name</label>
         <input type="text" className="form-control" name="lastname" placeholder="Enter UserName" value={this.state.fields.lastname || ''} onChange={this.onChange} />
         </div> 
         </div>      
        <div className="form-groupt">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" name="email" placeholder="email@example.com" value={this.state.fields.email || ''} onChange={this.onChange} />
        </div>
        <div className="form-row">
        <div  className="form-group col-md-6">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.fields.password || ''} onChange={this.onChange}/>
        </div> 
         <div  className="form-group col-md-6">
        <label htmlFor="password1">Confirm Password</label>
        <input type="password" className="form-control" name="password1" placeholder="ReEnter Password" autoComplete="off"/>
        </div> 
        </div>
        <div className="form-group">  
        <label>phone number</label>
        <input type="tel" className="form-control" name="number" placeholder="Enter number" value={this.state.fields.number || ''} onChange={this.onChange} />
        </div>  
        <div className="form-row">
        <div  className="form-group col-md-6">
        <label>industry type</label>
        {/* <select className="form-control-file" name="industry" value={this.state.fields.industry || ''} onChange={this.onChange}> 
        <option>Selsect</option>
        <option>CS</option>
        <option>IT</option>
        </select> */}
        <select className="form-control"  name="industry" value={this.state.fields.industry || ''} onChange={this.onChange}>
    {this.state.data.map((el,i)=> (
            <option key={i}>{el.name}</option>
          ))}
    </select>
        </div>

        <div  className="form-group col-md-6">
        <label>category type</label>
        {/* <select className="form-control-file" name="category" value={this.state.fields.category || ''} onChange={this.onChange}> 
         <option>Selsect</option>
         <option>CS</option>
         <option>IT</option>
         </select>  */}
             <select className="form-control"   name="category" value={this.state.fields.category || ''} onChange={this.onChange}>
    {this.state.dataa.map((el,i)=> (
            <option key={i}>{el.name}</option>
          ))}
    </select>
        
         </div>
         </div>
         <div>
         <label  className="form-group">Uplode img</label>
         <input type="file" className="form-control" name="file" value={this.state.fields.file || ''} onChange={this.onChange} />
         </div>
         
        <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Sign in</button>
        <p>Already a member?<a href="/">LogIn</a></p>
         </form>
        </div>
        );
      }
}
export default Register;
    
