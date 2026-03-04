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
      "We welcome freshers with a passion for web development. Must have a strong foundation in HTML, CSS, JavaScript, and database management. Experience with Git is required. Knowledge of React and Node.js is a plus. Familiarity with CI/CD pipelines, Kubernetes, Docker, and cloud platforms will be an added advantage.",
    location: "Madurai (On-site)",
    type: "Full Time",
    apply: "career@berlinr.eu",
    salary: "₹3 LPA Take home",
  },
  {
    id: 2,
    title: "Certified German Language Teacher",
    description:
      "We are looking for a certified German language teacher who is highly proficient — near-native level. The candidate must have completed at least C1 level (Goethe-Zertifikat or equivalent) and be experienced in teaching German to students preparing for language proficiency exams or relocation to Germany. Strong communication skills and a passion for teaching are essential.",
    location: "Madurai (On-site)",
    type: "Full Time",
    apply: "career@berlinr.eu",
    salary: "Based on experience",
  },
  {
    id: 3,
    title: "Sales and Operations Executive",
    description:
      "Join our team to support branch setup and launch, guide and counsel students, manage administrative tasks, maintain candidate databases, and conduct local outreach. Ideal for organized, proactive individuals who enjoy working in a dynamic environment.",
    location: "Madurai (On-site)",
    type: "Full Time",
    apply: "career@berlinr.eu / WhatsApp +49 172 6474278",
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
            <Card
              key={job.id}
              sx={{
                mb: 3,
                ":hover": { boxShadow: 2, backgroundColor: "#F5F5F5" },
              }}
            >
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
