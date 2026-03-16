import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Modal,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icons from "../assets/icons.png";
import { Link as RouterLink } from "react-router-dom";

const features = [
  {
    title: "Invoice & Expense Management",
    description:
      "Upload invoices, track daily expenses, and manage approvals with a structured workflow — all in one place.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Fine-grained permissions for employees, managers, and admins. Every user sees only what they need to.",
  },
  {
    title: "Approval Workflows",
    description:
      "Managers can approve or reject submitted invoices with comments. Full audit trail on every action.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Visual expense breakdowns by category, date range, and team. Export to CSV for accounting.",
  },
  {
    title: "Recurring Expenses",
    description:
      "Set up recurring invoices on monthly, quarterly, or yearly cycles — auto-generated on schedule.",
  },
  {
    title: "Timesheet Tracking",
    description:
      "Employee check-in/check-out with lunch and break deductions. Simple, accurate attendance records.",
  },
  {
    title: "Task Management",
    description:
      "Assign tasks with priorities and due dates. Track completion and add comments inline.",
  },
  {
    title: "White-Label Ready",
    description:
      "Full branding customisation — your logo, your colours, your domain. Looks like your own product.",
  },
];

const screenshots = [
  {
    label: "Dashboard",
    src: "/screenshots/dashboard.png",
    description: "At-a-glance overview of expenses, invoices, and team activity.",
  },
  {
    label: "Work — Todos",
    src: "/screenshots/todos.png",
    description: "Assign and track tasks with priorities, due dates, and inline comments.",
  },
  {
    label: "Work — Timesheet",
    src: "/screenshots/timesheets.png",
    description: "Employee check-in/check-out with automatic break and lunch deductions.",
  },
  {
    label: "People",
    src: "/screenshots/people.png",
    description: "Manage employees, roles, and permissions from one place.",
  },
];

export default function Products() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <Box>
      <Header />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Chip
          label="IT Products & Services"
          size="small"
          sx={{ backgroundColor: "#DD0000", color: "#fff", mb: 2 }}
        />
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Built for businesses.{" "}
          <Box component="span" sx={{ color: "#DD0000" }}>
            Ready for yours.
          </Box>
        </Typography>
        <img src={icons} alt="" style={{ width: "10%", height: "auto" }} />
        <Typography color="text.secondary" variant="h6" mt={2} mb={6} maxWidth={720}>
          Alongside our talent mobility work, Berlinr builds internal software
          that solves real operational problems. We use these tools ourselves
          and offer them as white-label solutions to client companies.
        </Typography>
      </Container>

      {/* Product: BackOffice */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Box
          p={5}
          borderRadius={3}
          boxShadow={1}
          sx={{ backgroundColor: "#FAFAFA" }}
        >
          <Box display="flex" alignItems="center" gap={2} mb={1}>
            <Typography variant="h4" fontWeight={700}>
              Berlinr BackOffice
            </Typography>
            <Chip label="Available as White-Label" size="small" sx={{ backgroundColor: "#DD0000", color: "#fff" }} />
          </Box>
          <Typography color="text.secondary" variant="h6" mb={4}>
            A complete business back office — expense management, approvals,
            timesheets, and analytics — packaged as a ready-to-deploy product.
          </Typography>

          {/* Features grid */}
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={3}
            mb={5}
          >
            {features.map((f, i) => (
              <Card
                key={i}
                elevation={0}
                sx={{
                  border: "1px solid #eee",
                  borderRadius: 2,
                  ":hover": { boxShadow: 2, backgroundColor: "#fff" },
                }}
              >
                <CardContent>
                  <Typography fontWeight={600} gutterBottom>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Screenshot gallery */}
          <Box mb={5}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              See it in action
            </Typography>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)" }}
              gap={3}
            >
              {screenshots.map((s) => (
                <Box
                  key={s.label}
                  onClick={() => setLightbox(s)}
                  sx={{ cursor: "pointer", borderRadius: 2, overflow: "hidden", border: "1px solid #e0e0e0", "&:hover img": { transform: "scale(1.02)" } }}
                >
                  <Box sx={{ overflow: "hidden", lineHeight: 0 }}>
                    <img
                      src={s.src}
                      alt={s.label}
                      style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease" }}
                    />
                  </Box>
                  <Box p={2} sx={{ backgroundColor: "#fff" }}>
                    <Typography fontWeight={600} gutterBottom>{s.label}</Typography>
                    <Typography variant="body2" color="text.secondary">{s.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Lightbox */}
          <Modal open={!!lightbox} onClose={() => setLightbox(null)}>
            <Box
              onClick={() => setLightbox(null)}
              sx={{
                position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex", alignItems: "center", justifyContent: "center", p: 2, cursor: "zoom-out",
              }}
            >
              {lightbox && (
                <Box onClick={e => e.stopPropagation()} sx={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 2, overflow: "hidden" }}>
                  <img src={lightbox.src} alt={lightbox.label} style={{ maxWidth: "100%", maxHeight: "85vh", display: "block" }} />
                  <Box p={2} sx={{ backgroundColor: "#fff" }}>
                    <Typography fontWeight={700}>{lightbox.label}</Typography>
                    <Typography variant="body2" color="text.secondary">{lightbox.description}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Modal>

          {/* White-label pitch */}
          <Box
            p={4}
            borderRadius={2}
            sx={{ backgroundColor: "#111", color: "#fff" }}
          >
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Offer it under your brand
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 3, maxWidth: 640 }}>
              License Berlinr BackOffice as your own product. We customise the
              branding — logo, colours, and domain — so your clients never know
              it's built by us. You focus on selling; we handle the tech.
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="/contact"
              sx={{ backgroundColor: "#DD0000", ":hover": { backgroundColor: "#bb0000" } }}
            >
              Get in Touch
            </Button>
          </Box>
        </Box>
      </Container>

      {/* IT Services pitch */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 12 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{ color: "#DD0000" }}>
          Custom IT Services
        </Typography>
        <img src={icons} alt="" style={{ width: "10%", height: "auto" }} />
        <Typography color="text.secondary" variant="h6" mt={2} mb={4} maxWidth={720}>
          Need something built from scratch? Our team designs and develops
          web applications, internal tools, and automation systems tailored
          to your business workflows.
        </Typography>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/contact"
          sx={{ borderColor: "#DD0000", color: "#DD0000", ":hover": { borderColor: "#bb0000", color: "#bb0000" } }}
        >
          Talk to Us
        </Button>
      </Container>

      <Footer />
    </Box>
  );
}
