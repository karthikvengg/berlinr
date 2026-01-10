import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t0bq63h",
        "template_6qriy0m",
        formRef.current,
        "gjRZeSLdj9GVAY1wC"
      )
      .then(
        () => {
          alert("Enquiry sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send enquiry. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <Box component="form" ref={formRef} onSubmit={sendEmail}>
      <Stack spacing={3}>
        <TextField label="Full Name" name="name" required fullWidth />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          required
          fullWidth
        />

        <TextField label="Phone Number" name="phone" fullWidth />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          required
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: "-4rem",
            mr: "2rem",
            px: "34px",
            py: "10px",
            width: "200px",
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "4px",
            backgroundColor: "#DD0000",
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#b50202",
            },
          }}
        >
          Send Enquiry
        </Button>
      </Stack>
    </Box>
  );
}
