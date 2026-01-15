import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { blue, yellow } from "@mui/material/colors";

const buttonStyles = {
  color: "black",
  textTransform: "none",
  fontSize: "1.0rem",
  "&:hover": {
    backgroundColor: "#DD0000",
    color: "white",
  },
};

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", gap: 1, color: "white" }}>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={buttonStyles}
            >
              Home
            </Button>
            {/*
            <Button
              component={RouterLink}
              to="/category/news"
              color="inherit"
              sx={buttonStyles}
            >
              Services
            </Button>
            <Button
              component={RouterLink}
              to="/category/guides"
              color="inherit"
              sx={buttonStyles}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/category/life"
              color="inherit"
              sx={buttonStyles}
            >
              Reviews
            </Button>
            <Button
              component={RouterLink}
              to="/category/events"
              color="inherit"
              sx={buttonStyles}
            >
              FAQs
            </Button>
            */}
            <Button
              component={RouterLink}
              to="/jobs"
              color="inherit"
              sx={buttonStyles}
            >
              Jobs
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={buttonStyles}
            >
              Contact
            </Button>
          </Box>
          {/* Search Icon 
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
