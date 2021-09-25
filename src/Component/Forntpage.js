import React from 'react';
import './front.css';
import Sidebar from '../deshboard/Sidebar';
import Footer from '../deshboard/Footer';


class Forntpage extends React.Component {
    render(){
    
    return (
      
  // <div className="sidebar-containe"  style={{ border:' 1px solid black',height: "100vh", margin:" 1%"}}>   
  //  <div style={{ border:' 1px solid red',height: "80vh",width:"20%"}}>
             
  //           <Sidebar/>    
                 
  //           {/* <footer/> */}
            
           
  //            </div> 
  //             <div style={{float:"right",width:"80%",height:"100%"}}>
  //                   <h2>djkjdvhdskkdjfghfdghgfuhdfuihvu du fh ru hgirhg</h2>
  //             </div>
  //            </div>
  <div>
      <div style={{height: "75vh",width:"20%",float:"left"}}>
            <Sidebar/>   
      </div>
      <div style={{float:"right",width:"80%",height:"75vh"}}>
              <div style={{ float:"left",width:"30%",height:"45%",margin:"1%"}}>
                  <img src={"https://thumbs.dreamstime.com/z/post-button-arrow-cursor-illustration-22254846.jpg"}
                  style={{height:"50%",width:"50%",margin:"5%"}}/>
                        
                        <h1  style={{ color:"white"}}>Post jobs</h1>
              </div>
              <div style={{ float:"left",width:"30%",height:"45%",margin:"1%"}}>
                  <img src={"http://www.pngall.com/wp-content/uploads/2016/07/Jobs-PNG-Picture.png"}
                  style={{height:"50%",width:"50%",margin:"5%"}}/>                  
                              
                          <h1 style={{ color:"white"}}>JObs</h1>
                              
              </div>
              <div style={{ float:"left",width:"30%",height:"45%",margin:"1%"}}>
                  <img src={"https://www.w3schools.com/howto/img_avatar.png"}
                  style={{height:"50%",width:"50%",margin:"5%"}}/>
                              
                              <h1 style={{ color:"white"}}>Candidates</h1>
                    
              </div>
              <div style={{ float:"left",width:"30%",height:"45%",margin:"1%"}}>
                    <img src={"https://ya-webdesign.com/transparent250_/magnifying-glass-png-no-background-6.png"}
                    style={{height:"40%",width:"50%",margin:"5%"}}/>
                    
                              <h1 style={{ color:"white"}}>Billing History</h1>
              </div>
              <div style={{ float:"left",width:"30%",height:"45%",margin:"1%"}}>
                    <img src={"https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-lock-icon-png-image_4144043.jpg"}
                    style={{height:"50%",width:"50%",margin:"5%"}}/>
                      
                            <h1 style={{ color:"white"}}>Change Password</h1>
              </div>
              <div style={{ float:"left",width:"30%",height:"45%",margin:"1%"}}>
                    <img src={"https://png.pngtree.com/png-clipart/20190516/original/pngtree-announcement-icon-vector-for-hiring-png-image_3712481.jpg"}
                    style={{height:"50%",width:"50%",margin:"5%"}}/>
                          
                            <h1 style={{ color:"white"}}>Hiring Companies</h1>

              </div>
    </div>
          <div className="footer" style={{ height:"12vh",float:"left",width:"100%"}}>
           <Footer/>
           </div>
          
</div>

    
   
      
    );
  }
}
export default Forntpage;