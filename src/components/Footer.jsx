import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Instagram, LinkedIn, Mail } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 6, py: 6, borderTop: "1px solid #eee", bgcolor: "#fff" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Neuberlinr Private Limited
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block" }}
            >
              CIN: U70200TN2026PTC188018
              <br></br>
              <br></br>
              <b>Head office:</b>
              <br></br>
              No.47, Bharathi Street,
              <br></br>
              Tiruchirappalli- 620005, Tamil Nadu
              <br></br>
              <br></br>
              <b>Opening Hours:</b>
              <br></br>
              Monday to Friday: 9:00 AM IST - 20:00 PM IST
            </Typography>
          </Grid>
          {/* Links Section 
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1">Sections</Typography>
            <Link href="/category/news" underline="none" color="inherit">
              News
            </Link>
            <br />
            <Link href="/category/guides" underline="none" color="inherit">
              Guides
            </Link>
            <br />
            <Link href="/category/life" underline="none" color="inherit">
              Life
            </Link>
            <br />
            <Link href="/category/events" underline="none" color="inherit">
              Events
            </Link>
          </Grid>
          */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1">Company</Typography>
            <br />
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              color="inherit"
            >
              Home
            </Link>
            <br />
            <Link
              component={RouterLink}
              to="/jobs"
              underline="none"
              color="inherit"
            >
              Jobs
            </Link>
            <br />
            <Link
              component={RouterLink}
              to="/contact"
              underline="none"
              color="inherit"
            >
              Contact
            </Link>
            <br />
            {/*
            <Link href="#" underline="none" color="inherit">
              About
            </Link>
            <br />
            <Link href="#" underline="none" color="inherit">
              Privacy
            </Link>
            */}
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Follow us
            </Typography>

            <Box sx={{ mt: 2 }}>
              <IconButton
                component="a"
                href="https://instagram.com/berlinr.eu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  "&:hover": { color: "#DD0000" },
                }}
              >
                <Instagram />
              </IconButton>

              <IconButton
                component="a"
                href="https://linkedin.com/company/berlinr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  "&:hover": { color: "#DD0000" },
                }}
              >
                <LinkedIn />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:karthik@berlinr.eu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mail"
                sx={{
                  "&:hover": { color: "#DD0000" },
                }}
              >
                <Mail />
              </IconButton>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 3, ml: 1 }}
            >
              © {new Date().getFullYear()} Berlinr. All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 3, ml: 1 }}
            >
              Developed by Berlinr Tech Team
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
