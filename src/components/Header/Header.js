import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import './Header.css'
const drawerWidth = 240;
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  

// import { Link } from 'react-router-dom'
// function Header() {
//     return (
//         <header className='header'>

//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <div >
//                     <Link className="navbar-brand px-4" href="/">
//                         <span>LOGO</span>
//                         </Link>
//                     </div>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse  justify-content-end" id="navbarTogglerDemo02">
//                         <ul className="navbar-nav  mb-2 mb-lg-0 navbar_container ">
//                             <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active"   to='/'>Home</NavLink></li>
//                             <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active" to='/about'>About Us</NavLink></li>
//                             <li className="nav-item px-3"> <NavLink className="nav-link"  activeClassName="active" to='/services'>Services</NavLink></li>
//                             <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/blogs'>Blogs</NavLink></li>
//                             <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/contact'>Contact Us</NavLink></li>
//                         </ul>

//                     </div>
//                     <div className='chat-tag'>
//      {/* <Chatbot
//         config={config}
//         messageParser={MessageParser}
//         actionProvider={ActionProvider}
//       /> */}
//       </div>
//                 </div>
//             </nav>

//             <div className='header_underline' ></div>

//             {/* <div className='container d-flex justify-content-between'>
//                 <div>
//                     <img src='' alt='LGOG' />
//                 </div>
//                 <div className='navlink'>
//                     <ul className='d-flex flex-row'>
//                         <li className='px-4'> <Link to='/'>Home</Link></li>
//                         <li className='px-4'> <Link to='/about'>About Us</Link></li>
//                         <li className='px-4'> <Link to='/services'>Services</Link></li>
//                         <li className='px-4'> <Link to='/blogs'>Blogs</Link></li>
//                         <li className='px-4'> <Link to='/contact'>Contact Us</Link></li>
//                     </ul>
//                 </div>
//             </div> */}

//         </header>
//     )
// }
// export default Header
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const styles = () => ({
    color: "white",
    listStyle: "none",
  });
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))} */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink activeClassName="active" to="/">
              <Button sx={{ color: "#000000" }}>Home</Button>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink activeClassName="active" to="/contact">
              <Button sx={{ color: "#000000" }}>Contact Us</Button>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink activeClassName="active" to="/blogs">
              <Button sx={{ color: "#000000" }}>Blogs</Button>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink activeClassName="active" to="/services">
              <Button sx={{ color: "#000000" }}>Services</Button>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink activeClassName="active" to="/about">
              <Button sx={{ color: "#000000" }}>About Us</Button>
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar component="nav" className="Navbar" style={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{color:"black"}}
          >
            LOGO
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }} className="navlinks_contaner">
          <ul className="nav_item_container d-flex">
                             <li className="nav-item  px-3"> <NavLink className="nav-link" style={{color:"black"}} activeClassName="active"   to='/'>Home</NavLink></li>
                           <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active" to='/about'>About Us</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link"  activeClassName="active" to='/services'>Services</NavLink></li>
                             <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/blogs'>Blogs</NavLink></li>
                             <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/contact'>Contact Us</NavLink></li>
                         </ul>
          </Box>
        </Toolbar>

      </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
      <Container>
     
      </Container>
    </React.Fragment>
  
  );
}



export default Header;
