import React from 'react';

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './My.css';

import "../../node_modules/bootstrap/js/src/dropdown.js";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('DatToken') != null && sessionStorage.getItem('DatToken') != null){
            this.setState({loggedIn: true}); 
        } 
        else{
            this.setState({loggedIn: false}); 
        }
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-dark">
           <div className="container">
               <a className="navbar-brand" href="Forntpage"><h1>job portal website</h1></a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="class=nav-item dropdown">   
                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">SignUp</a>
                <div className="dropdown-menu">
                <a href="/SignUp" className="dropdown-item" > Student</a>
                <a href="/SignUp1" className="dropdown-item">Employment</a>
                                    
            </div>                        
                    </li>
                        {this.state.loggedIn === false ?
                        
                        <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                        </li>
                        :
                       <li className="nav-item">
                         
                          <a className="nav-link" href="/logout">Logout  </a>
              </li>
    }
                    </ul>
               </div>
            </div> 
             
            
            
             </nav>   
     );    
}};

export default Home;