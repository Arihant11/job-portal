import React from 'react';
//  import './MyCss.css';
 import '../deshboard/Sidebar.css';
 import { Link } from 'react-router-dom';
export default Sidebar => {
    return (
 



<div className="container">

      <ul className="list-group">
      <Link to="/Forntpage"><i className="fa fa-tachometer" aria-hidden="true"></i>  Dashboard</Link>
                {/* <li className="list-group ">Dashboard </li> */}
                {/* <li className="list-group ">Company profile </li> */}
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i> Company profile</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>Candidates</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>Candidates Notes</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>Hiring Companies</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>Post Jobs</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>Billy History</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>Mange Jobs</Link>
                <Link to="/company_profile"><i className="list-group" aria-hidden="true"></i>MyJobs</Link>

                {/* <li className="list-group ">candidates</li>
                <li className="list-group ">candidates Notes</li>
                <li className="list-group ">Hiring Companies</li>
                <li className="list-group ">Posy Jobs</li>
                <li className="list-group ">Billy History</li>
                <li className="list-group ">Mange Jobs</li>
                <li className="list-group">MyJobs</li> */}


               </ul>
</div>
);
};
// import { slide as Menu } from 'react-burger-menu';

// export default Sidebar => {
//   return (
//       <div className="menu-container">
//     <Menu className="menu">
//       <a className="menu-item" href="/">
//         Home
//       </a>

//       <a className="menu-item" href="/Myprofile">
//       Myprofile
//       </a>

//       <a className="menu-item" href="/Login">
//       Login
//       </a>

//       <a className="menu-item" href="/Job">
//       Job
//       </a>

//       <a className="menu-item" href="/Employee">
//       Employee
//       </a>

//       <a className="menu-item" href="/Logout">
//       Logout
//       </a>
//     </Menu></div>
//   );
// };