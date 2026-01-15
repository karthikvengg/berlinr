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
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const buttonStyles = {
  color: "black",
  textTransform: "none",
  fontSize: "1rem",
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation(); // <-- Get current path

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const pages = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Career", path: "/jobs" },
    {
      label: "Employee Mailbox",
      path: "https://mail.berlinr.eu",
      external: true,
    },
  ];

  const getButtonStyle = (path) => ({
    ...buttonStyles,
    color: location.pathname === path ? "#DD0000" : "black",
    borderBottom:
      location.pathname === path
        ? "2px solid #DD0000"
        : "2px solid transparent",
  });

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
                component={page.external ? "a" : RouterLink}
                to={!page.external ? page.path : undefined}
                href={page.external ? page.path : undefined}
                target={page.external ? "_blank" : undefined}
                rel={page.external ? "noopener noreferrer" : undefined}
                sx={{
                  ...getButtonStyle(page.path),
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {page.label}
                {page.external && (
                  <OpenInNewIcon sx={{ fontSize: "0.9rem", opacity: 0.7 }} />
                )}
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
                  component={page.external ? "a" : RouterLink}
                  to={!page.external ? page.path : undefined}
                  href={page.external ? page.path : undefined}
                  target={page.external ? "_blank" : undefined}
                  rel={page.external ? "noopener noreferrer" : undefined}
                  onClick={handleCloseMenu}
                  selected={!page.external && location.pathname === page.path}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  {page.label}
                  {page.external && (
                    <OpenInNewIcon sx={{ fontSize: "1rem", opacity: 0.6 }} />
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
