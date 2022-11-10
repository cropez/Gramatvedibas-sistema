import * as React from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AddchartIcon from "@mui/icons-material/Addchart";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Dati",
      pageURL: "/dati"
    },
    {
      menuTitle: "Ekonomiskais bloks",
      pageURL: "/ekonommiskaisblocks"
    },
    {
      menuTitle: "Datu eksports",
      pageURL: "/dashboard"
    }
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AddchartIcon
            sx={{ display: { xs: "none", md: "flex", fontSize: 40 }, mr: 2 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            GRĀMATVEDĪBAS SISTĒMA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {menuItems.map((menuItem) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <MenuItem onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <AddchartIcon
            sx={{ display: { xs: "flex", md: "none", fontSize: 40 }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="Outlined"
              onClick={() => handleButtonClick("/dati")}
            >
              Dati
            </Button>

            <Button
              variant="Outlined"
              onClick={() => handleButtonClick("/ekonommiskaisblocks")}
            >
              Ekonomiskais bloks
            </Button>

            <Button
              variant="Outlined"
              onClick={() => handleButtonClick("/dashboard")}
            >
              Datu eksports
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withRouter(Header);