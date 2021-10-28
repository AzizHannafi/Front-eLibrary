import './Header.css'
import logo from '../../Assets/library.png'
import { NavLink } from "react-router-dom";
import { Component } from 'react';


export default class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }
  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return(


 <div className="header__element">

   <div id="container__header">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div class="container-fluid">
                 <img src={logo}  alt="LOGO" />
                     <a class="navbar-brand" href="/">E-LIBRARY</a>
                     <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                       <span class="navbar-toggler-icon"></span>
                     </button>
                 <div className={"collapse navbar-collapse " + show}>
                  <div className="navbar-nav">
                    <NavLink id="link" exact activeClassName="active" to="/">Home</NavLink>
                    <NavLink id="link" exact activeClassName="active" to="/Books">Books</NavLink>
                    <NavLink  id="link" exact activeClassName="active" to="/Contact">Contact</NavLink>
                  </div>
                
                 </div>
           </div>
         </nav>
   </div>

</div>    
     
    );
  }
}