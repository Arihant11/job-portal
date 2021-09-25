import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

const axios = require('axios');

class Reset extends Component {
   
        constructor(props){
          super(props);
          this.state={
            Email:'',
            Password:'',
          }
      
        }
        componentDidMount(){
          this.setState({Email:localStorage.getItem('tempMail:')})
          console.log(this.state.Email);
        }
      
        Mysubmit=(e)=>{
          e.preventDefault();
          if (this.validateForm()) {
          const userData={
            Email:this.state.Email,
            Password: document.getElementById('pass1').value
          }
          

          axios.post('http://localhost:5000/changepass',userData)
          .then(res => {
            window.location.assign('/');
             console.log(res.data);
           
           })
           .catch((err) =>{
             console.log(err);
           })
          }
          else
{
  return 0;
}

        //   console.log("submit");
        //   let p1=document.getElementById('pass1').value;
        //   let p2=document.getElementById('pass2').value;
        //   let err=document.getElementById('passErr');
        //   console.log(p1,p2);
        //   if(p2==="" || p1===p2)
        //   err.innerHTML="";
        //   if(p1!==p2)
        //   alert("Password Not Match!!!!")
        //   // err.innerHTML=""Password Not Match!!!!;
         }
        
validateForm() {

   let p1=document.getElementById('pass1').value;
          let p2=document.getElementById('pass2').value;
          // let err=document.getElementById('passErr');
          console.log(p1,p2);
          if(p2==="" || p1===p2)
          // console.log("df")
          return 1;
          // err.innerHTML="";
          if(p1!==p2)
          alert("Password Not Match!!!!")
          // err.innerHTML=""Password Not Match!!!!;
  }
    render()
    {
    return (
      <div className="Log_emp.css">
        <form className="px-4" encType="multipart/form-data"  onSubmit={this.Mysubmit}> 
        <h4 className="modal-header text-center">RESET PASSWORD</h4>

          <div className="form-group">
           <label htmlFor="email">new-password</label>
            <input type="password" className="form-control" id="pass1" placeholder="Enter a new password" />
          </div>
          <div className="form-group">
           <label htmlFor="password">confirm-password</label>
            <input type="password" className="form-control" id="pass2" placeholder="Password"  autoComplete="off"/>
          </div>          
          <input type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" />
            
            <p><a href="/">Login</a></p>
            
        </form>
        </div>
    );
  }
}

export default Reset;
