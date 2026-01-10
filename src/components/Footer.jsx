import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 6, py: 6, borderTop: "1px solid #eee", bgcolor: "#fff" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Neuberlinr Private Limited
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 3 }}
            >
              © {new Date().getFullYear()} Berlinr. All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 3 }}
            >
              Developed by Berlinr Tech
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
            <Link href="/contact" underline="none" color="inherit">
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
        </Grid>
      </Container>
    </Box>
  );
}
