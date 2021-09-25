import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignUp1 from './Signup1';
import Login from './Login';
import Logout from './Logout';
import Forgot from './Forgot';
import Reset from './Reset';
import checkotp from './checkotp';
import Forntpage from './Forntpage';
import company_profile from './../deshboard/company/company_profile';






class route extends React.Component {
  constructor(props){
    super(props);
    this.state = {};  
  }
  componentWillMount(){
   
      if(sessionStorage.getItem('DatToken') != null && sessionStorage.getItem('DatToken') != null){
          this.setState({loggedIn: true}); 
          
      } 
  }

  render() {
   return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignUp1" component={SignUp1} />
        <Route path='/logout' component={Logout}/> 
         <Route path='/forgot' component={Forgot}/> 
         <Route path='/Reset' component={Reset}/> 
         <Route path='/checkotp' component={checkotp}/> 
         <Route exact path="/Forntpage" component={() => (<Forntpage />)} />
         <Route  path="/company_profile"  component={company_profile}/>



         
      </Switch>
    </BrowserRouter>
    );
  }
};

export default route;
