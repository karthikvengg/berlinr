import React from "react";
import { Box, Container, Typography, Chip, Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection({ post }) {
  if (!post) return null;
  return (
    <Box sx={{ position: "relative", bgcolor: "#000", color: "#fff" }}>
      <Box
        sx={{
          height: { xs: 360, md: 480 },
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.75)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", mt: -18 }}>
        <Box sx={{ p: 2, bgcolor: "rgba(0,0,0,0.6)", borderRadius: 2 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              {post.date}
            </Typography>
          </Stack>
          <Typography
            component={RouterLink}
            to={`/article/${post.slug}`}
            variant="h3"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            {post.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.95 }}>
            {post.excerpt}
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            sx={{
              float: "right",
              mt: "-4rem",
              mr: "2rem",
              px: "34px",
              py: "10px",
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
            Get in touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
