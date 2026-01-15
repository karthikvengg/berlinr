import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icons from "../assets/icons.png";
import { Link as RouterLink } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer – Entry Level",
    description:
      "Freshers welcome. Must have HTML, CSS, JavaScript, database, Git. Good to have React/Node.js. CI/CD, Kubernetes, Docker, Cloud experience a plus.",
    location: "Madurai (On-site / Remote)",
    type: "Full Time",
    apply: "hello@berlinr.eu",
    salary: "₹3 LPA Take home",
  },
  {
    id: 2,
    title: "Sales and Operations Executive",
    description:
      "Support branch setup & launch, counsel students, manage administrative tasks, candidate database, local outreach.",
    location: "Madurai (Full-Time, Offline)",
    type: "Full Time",
    apply: "hello@berlinr.eu / WhatsApp +49 172 6474278",
    salary: "₹10,000–₹20,000 INR per month",
  },
];

export default function Jobs() {
  return (
    <Box>
      <Header />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#DD0000" }}
        >
          Jobs
        </Typography>

        <img
          src={icons}
          alt="Icons"
          style={{ width: "10%", marginBottom: 32 }}
        />

        {jobs.length === 0 ? (
          <Typography>No job openings available.</Typography>
        ) : (
          jobs.map((job) => (
            <Card key={job.id} sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {job.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {job.location} • {job.type}
                </Typography>

                <Typography sx={{ mt: 1 }}>{job.description}</Typography>

                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2, backgroundColor: "#DD0000" }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Container>

      <Footer />
    </Box>
  );
}
