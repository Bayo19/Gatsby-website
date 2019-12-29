import React from 'react'
import Header from './header'
import Footer from './footer.js'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import SideDrawer from './SideDrawer/sideDrawer'
import Backdrop from './Backdrop/backdrop'

class Layout extends React.Component {
    state = {
        SideDrawerOpen: false
    };
    
    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
          return {SideDrawerOpen: !prevState.SideDrawerOpen};
      });  
    };

    backdropClickHandler = () => {
        this.setState({SideDrawerOpen: false});
    }

    
    render() {

    let sideDrawer;
    let backDrop;

    if(this.state.SideDrawerOpen) {
        sideDrawer = <SideDrawer/>;
        backDrop = <Backdrop click={this.backdropClickHandler}/>
    }
    const {children} = this.props;
    return (
        <div className={layoutStyles.container}>
            <Header drawerClickHandler={this.drawerToggleClickHandler}/>
            {sideDrawer}
            {backDrop}
            {children}
            <Footer />
        </div>
    )
        
    }
}
    


export default Layout