
import React, { Fragment } from "react";
import "../App.css";
import {Link , withRouter} from "react-router-dom";



const currentTab = (history,path) => {
    if(history.location.pathname === path){
        return{ color:"#FDFEFE "};
    }else{
        return{color:"#ABB2B9 "};
    }
};

const Menu = ({history}) =>(

	<div >
    	<nav >
	<div className="nav-wrapper black z-depth-2">

	
	  <ul id="nav-mobile" className="left">
     <li className="brand">MERN STACK APP</li> 

      <li><Link style={currentTab(history ,"/home") } to="/home" className="item nav-margin">Home</Link></li>
      <li><Link style={currentTab(history ,"/users") } to="/users" className="item">User</Link></li>
      <li><Link style={currentTab(history ,"/adduser") } to="/adduser" className="item">Add User</Link></li>


	         
	
        
		
	  </ul>
	</div>
	</nav>
	
	</div>

  )



export default withRouter(Menu) ;
