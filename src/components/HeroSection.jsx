import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection({ post }) {
  if (!post) return null;

  return (
    <Box sx={{ position: "relative", bgcolor: "#000", color: "#fff" }}>
      {/* Background Image */}
      <Box
        sx={{
          height: { xs: 320, sm: 400, md: 500 },
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.85)",
        }}
      />

      {/* Content Overlay */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            p: { xs: 1, sm: 1, md: 3 },
            bgcolor: "rgba(0,0,0,0.6)",
            borderRadius: 3,
            marginTop: { xs: -20, sm: -20, md: -26 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Categories / Chips placeholder */}
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }} />

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {post.title}
          </Typography>

          {/* Excerpt */}
          <Typography
            variant="body1"
            sx={{
              color: "#f1f1f1",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
              mb: 3,
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            {post.excerpt}
          </Typography>

          {/* CTA Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 
            <Button
              component={RouterLink}
              to="/contact"
              sx={{
                px: { xs: 4, sm: 5 },
                py: { xs: 1.8, sm: 2.2 },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                borderRadius: 2,
                backgroundColor: "#DD0000",
                color: "#fff",
                textTransform: "none",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "#b50202",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.35)",
                },
              }}
            >
              GET IN TOUCH
            </Button>
            */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
