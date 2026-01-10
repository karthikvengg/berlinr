import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Box>
      <Header />

      <Container maxWidth="md" sx={{ mt: 7, mb: 10 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Contact Us
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Fill out the form below and our team will get back to you.
        </Typography>

        <ContactForm />
      </Container>

      <Footer />
    </Box>
  );
}
