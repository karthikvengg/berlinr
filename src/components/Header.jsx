import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Container,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

const buttonStyles = {
  color: "black",
  textTransform: "none",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#DD0000",
    color: "white",
  },
};

const pages = [
  { label: "Home", path: "/" },
  { label: "Jobs", path: "/jobs" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ boxShadow: "0 1px 2px rgba(0, 0, 0, 0.01)" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={logo}
              alt="Berlinr"
              style={{
                height: 100,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={RouterLink}
                to={page.path}
                sx={buttonStyles}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Menu">
              <IconButton onClick={handleOpenMenu} color="inherit">
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseMenu}
                >
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
