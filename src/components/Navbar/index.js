import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <div>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          color='inherit'
        >
          <MenuIcon />
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/' className='navLink'>
              <h3> Home</h3>
            </Link>
          </MenuItem>
          <Divider variant='inset' component='li' />
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Architecture' className='navLink'>
              <h3> Architectural Portfolio</h3>
            </Link>
          </MenuItem>
          <Divider variant='inset' component='li' />
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Code' className='navLink'>
              <h3>Coding Portfolio</h3>
            </Link>
          </MenuItem>
          <Divider variant='inset' component='li' />
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Gallery' className='navLink'>
              <h3>Gallery</h3>
            </Link>
          </MenuItem>
          <Divider variant='inset' component='li' />
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/About' className='navLink'>
              <h3> About</h3>
            </Link>
          </MenuItem>
          <Divider variant='inset' component='li' />
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Contact' className='navLink'>
              <h3> Contact</h3>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
