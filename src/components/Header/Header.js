import React, {Component} from 'react';

import './Header.css';

class Header extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        showMenu: false,
        isTop: true
      }
    }

    showMenu = () => {
        if (this.state.showMenu) {
            this.setState({ showMenu: false })
        } else {
            this.setState({ showMenu: true })
        };
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 300;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }

    render() {
        
      return (
          this.state.showMenu ? (
            <div className="header-container">
                <div className={this.state.isTop ? "nav-bar-container-parent" : "nav-bar-container-parent nav-bar-scrolling"}>
                    <nav className="nav-bar-container">
            
                    <div className="nav-bar-title">Start Bootstrap</div>
            
                    <div className="nav-bar-menu">
            
                        <button className="nav-bar-button" onClick={() => this.showMenu()}>MENU ☰</button>
            
                    </div>
                    </nav>

                    <div className="nav-bar-options-active">
                        <span>SERVICES</span>
                        <span>PORTFOLIO</span>
                        <span>ABOUT</span>
                        <span>TEAM</span>
                        <span>CONTACT</span>
                    </div>
                </div>

                <div className="welcome-container-parent">
                    <div className="welcome-container">
                        <div className="greeting1">Welcome To Our Studio!</div>
                        <div className="greeting2">IT'S NICE TO MEET YOU</div>
                        <button className="welcome-button">TELL ME MORE</button>
                    </div>
                </div>
        
            </div>
          ) : (
            <div className="header-container">
                <div className={this.state.isTop ? "nav-bar-container-parent" : "nav-bar-container-parent nav-bar-scrolling"}>
                    <nav className="nav-bar-container">
    
                    <div className="nav-bar-title">Start Bootstrap</div>
        
                    <div className="nav-bar-menu">
        
                    <button className="nav-bar-button" onClick={() => this.showMenu()}>MENU ☰</button>
                    
                    <div className="nav-bar-options">
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>TEAM</span>
                    <span>CONTACT</span>
                    </div>
        
                    </div>
                    </nav>
                </div>

                <div className="welcome-container-parent">
                    <div className="welcome-container">
                        <div className="greeting1">Welcome To Our Studio!</div>
                        <div className="greeting2">IT'S NICE TO MEET YOU</div>
                        <button className="welcome-button">TELL ME MORE</button>
                    </div>
                </div>
                
            </div>
        )
      );
    };
};

export default Header;