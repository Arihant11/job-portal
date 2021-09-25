// import React, { Component } from 'react';

// const axios = require('axios');

// class checkotp
//  extends Component {
   
//         constructor(props){
//           super(props);
//           this.state={
//             Email:'',
//             otp:'',
//           }
//           // this.submit=this.submit.bind(this);
      
//         }
//         componentDidMount(){
//           this.setState({Email:localStorage.getItem('tempMail:')})
//           console.log(this.state.Email);
//         }
      
//         Mysubmit=(e)=>{
//           e.preventDefault();
//           const userData={
//             Email:this.state.Email,
//             // Password: document.getElementById('pass1').value
//           }
//           axios.post('http://localhost:5000/api/verify',userData)
//           .then(res => {
//              console.log(res.data);
           
//            })
//            .catch((err) =>{
//              console.log(err);
//            })
         
//         }
//     render() {
//     return (
//       <div className="Log_emp.css">
//         <form className="px-4" encType="multipart/form-data"  onSubmit={this.Mysubmit}> 
//         <h4 className="modal-header text-center">CHECK OTP</h4>

//           <div className="form-group">
//            <label htmlFor="email">Email</label>
//             <input type="email" className="form-control" name="email" placeholder="Enter a new email" />
//           </div>
//           <div className="form-group">
//            <label htmlFor="password">OTP</label>
//             <input type="password" className="form-control" name="otp" placeholder="Enter a otp." />
//           </div>          
//           <input type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" />
            
//             <p><a href="/Reset">Reset Password</a></p>
            
//         </form>
//         </div>
//     );
//   }
// }

// export default checkotp;
import React, { Component } from 'react';

const axios = require('axios');

class Login extends Component {
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
//     e.preventDefault();
//     const userData = this.state.fields;
//     //console.log(this.state.fields);
//     axios.post(`http://localhost:5000/api/verify`,userData)
//     .then((res)=> {
      
//     //  localStorage.setItem('SuCCESS',res.data.token);
//       //  localStorage.setTokan('refresh_tokan',JSON.stringify(res.data));
//       // const Dat={ DatToken:res.data.token}
    
//     // console.log(Dat)
//     // sessionStorage.setItem('DatToken',JSON.stringify(Dat));
      
//       // console.log(res);
//       console.log("jdfh");
//       window.location.assign('/Reset');
         
//       console.log(res);
//     })
//     .catch((err)=>{
//        console.log(err);  
//   })
// }
e.preventDefault();
const userData = this.state.fields;
//console.log(this.state.fields);
axios.post(`http://localhost:5000/api/verify`,userData)
.then((res)=> {
  window.location.assign('/Reset');
     
  console.log(res);
})
.catch((err)=>{
   console.log(err);  
})
}

    render() {
    return (
      <div className="Log_emp.css">
               <form className="px-4" encType="multipart/form-data"   onSubmit= {this.onSubmit} id="sign"> 
               <h4 className="modal-header text-center">CHECK OTP</h4>
      
                 <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter a new email" value={this.state.fields.email || ''} onChange={this.onChange} required />
                 </div>
                 <div className="form-group">
                  <label htmlFor="password">OTP</label>
                   <input type="password" className="form-control" name="otp" placeholder="Enter a otp." value={this.state.fields.otp || ''} onChange={this.onChange} required />
                 </div>          
                 <input type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" />
                  
                   <p><a href="/Reset">Reset Password</a></p>
               
               </form>
              </div>
    );
  }
}

export default Login;

