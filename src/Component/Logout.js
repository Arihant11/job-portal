import React from 'react';
class Logout extends React.Component{
    componentDidMount(){
        sessionStorage.clear(); 
        window.location.assign('/');
    }

    render(){
        return(
            <div>
            
            </div>
        )
    }
}

export default Logout;