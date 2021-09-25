import React from 'react';
// import './front.css';
import Sidebar from './../Sidebar';
// import Footer from './../Footer';
const axios = require('axios');




class company_profile extends React.Component {

    state={
        RedirectToNewPage:false
      }
      constructor(props){
        super();
        this.state={
          fields:{},
          
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
     
      
      onSubmit=(e)=>{
       
        e.preventDefault(); 
       
         // let fields = {};
         alert("Form submitted");
          const userData = this.state.fields;
          const headers = {
            'Content-Type': 'application/json', 
            'Authorization': localStorage.getItem('Bearer ')
          }
          console.log("HEADER"+headers)
          axios.post(`http://localhost:5000/api/companyprofile`,userData,{headers: headers})//{headers: headers}
        
        .then((res) =>
         {       
           console.log(res);
           console.log(res.data);
    
    })
    
    
    }    
    
    
    render(){
    
    return (
      
  <div style={{height: "100vh"}}>
      <div style={{height: "75vh",width:"20%",float:"left"}}>
            <Sidebar/>   
      </div>
      <div style={{float:"right",width:"80%",height:"75vh"}}>
      
      
      
      <div className="My">
      <form  className="px-4 py-3"  onSubmit= {this.onSubmit} id="sign" style={{marginTop:"0%"}}>

        <h4 className="modal-header text-center">Company Profile</h4>
         <div className="form-groupt">
         <label>Designation</label>
         <input type="text" className="form-control" name="Designation" placeholder="Enter Designation" value={this.state.fields.Designation || ''} onChange={this.onChange} />
         </div>      
        <div className="form-groupt">
        <label>Company Type</label>
        <input type="text" className="form-control" name="companytype" placeholder="companytype" value={this.state.fields.companytype || ''} onChange={this.onChange} />
        </div>
        <div className="form-row">
        <div  className="form-group col-md-6">
        <label htmlFor="password">Company Year</label>
        <input type="number" className="form-control" name="companyyear" placeholder="Enter Company Year" value={this.state.fields.companyyear || ''} onChange={this.onChange}/>
        </div> 
         <div  className="form-group col-md-6">
        <label htmlFor="password1">Company Website</label>
        <input type="email" className="form-control" name="website" placeholder="Enter Company Website" autoComplete="off" value={this.state.fields.website || ''} onChange={this.onChange}/>
        </div> 
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">  
        <label>Company Address</label>
        <input type="text" className="form-control" name="address" placeholder="Enter address" value={this.state.fields.address || ''} onChange={this.onChange} />
        </div> 
        <div className="form-group col-md-6">  
        <label>Company Branch</label>
        <input type="text" className="form-control" name="branch" placeholder="Enter branch" value={this.state.fields.branch || ''} onChange={this.onChange} />
        </div> 
        </div>         
        <div className="form-row">
        <div className="form-group col-md-6">  
        <label>Company Description</label>
        <input type="text" className="form-control" name="description" placeholder="Enter description" value={this.state.fields.description || ''} onChange={this.onChange} />
        </div> 
        <div className="form-group col-md-6">  
        <label>Company Logo</label>
        <input type="file" className="form-control" name="logo" value={this.state.fields.logo || ''} onChange={this.onChange} />
        </div> 
        </div>         
        <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Submit</button>
        
         </form>
        </div>
        </div>
          
          
</div> 
   
      
    );
  }
}
export default company_profile;