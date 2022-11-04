import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menu, setmenu] = React.useState(null);
  const open = Boolean(menu);
  const handleClick = (event) => {
    setmenu(event.currentTarget);
  };
  const handleClose = () => {
    setmenu(null);
  };

  return (
    <Box >
      <AppBar sx={{backgroundColor:'#A0A0A0'}}>
        <Toolbar>
      <IconButton 
        aria-controls={open ?'' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </IconButton>
      <Menu
        menu={menu}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem 
         component={Link}
         to='./Home'
        onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem 
         component={Link}
         to='./Contact'
        onClick={handleClose}>
          Contacts
          </MenuItem>
        <MenuItem 
         component={Link}
         to='./About'
        onClick={handleClose}>
          About
        </MenuItem>
      </Menu>
      </Toolbar>
      </AppBar>
      </Box>
  );
}