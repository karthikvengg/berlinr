import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function SocialLinks() {
  return (
    <Box display="flex" gap={1}>
      <IconButton
        component="a"
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook />
      </IconButton>

      <IconButton
        component="a"
        href="https://instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </IconButton>

      <IconButton
        component="a"
        href="https://linkedin.com/company/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter />
      </IconButton>
    </Box>
  );
}
