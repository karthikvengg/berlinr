import React from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icons from "../assets/icons.png";

const teamMembers = [
  {
    name: "Karthikeyan V",
    role: "Founder & CEO",
    photo: "/team/karthik.png",
  },
  {
    name: "Muthukumar B",
    role: "Managing Director",
    photo: "/team/muthukumar.png",
  },
  {
    name: "Jeyaveeran P",
    role: "Head of Operations",
    photo: "/team/jeyaveeran.png",
  },
];

export default function About() {
  return (
    <Box>
      <Header />

      {/* About / Mission / Vision / Values Section */}
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#DD0000" }}
        >
          About Berlinr
        </Typography>
        <img src={icons} alt="Icons" style={{ width: "10%", height: "auto" }} />

        <Typography color="text.secondary" variant="h6" mb={6} mt={2}>
          Berlinr is a global talent mobility platform dedicated to transforming
          lives through meaningful international careers. We connect qualified
          healthcare professionals with trusted employers in Germany and support
          them through language training, professional recognition, relocation,
          and long-term settlement.
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
          gap={4}
          mb={8}
        >
          <Box
            p={4}
            borderRadius={3}
            boxShadow={1}
            sx={{ ":hover": { boxShadow: 2, backgroundColor: "#F5F5F5" } }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Our Mission
            </Typography>
            <Typography color="text.secondary">
              To empower global healthcare professionals with seamless access to
              international career opportunities while strengthening healthcare
              systems with skilled and well-prepared talent.
            </Typography>
          </Box>

          <Box
            p={4}
            borderRadius={3}
            boxShadow={1}
            sx={{ ":hover": { boxShadow: 2, backgroundColor: "#F5F5F5" } }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Our Vision
            </Typography>
            <Typography color="text.secondary">
              To become the most trusted global mobility partner for healthcare
              professionals, enabling sustainable migration and better
              healthcare outcomes worldwide.
            </Typography>
          </Box>

          <Box
            p={4}
            borderRadius={3}
            boxShadow={1}
            sx={{ ":hover": { boxShadow: 2, backgroundColor: "#F5F5F5" } }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Our Values
            </Typography>
            <Typography color="text.secondary">
              Integrity, people-first approach, excellence, global inclusion,
              and long-term commitment to every professional we support.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#DD0000" }}
        >
          Our Team
        </Typography>
        <img src={icons} alt="Icons" style={{ width: "10%", height: "auto" }} />

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 1 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 3,
                  ":hover": { boxShadow: 4 },
                }}
              >
                <Box
                  component="img"
                  src={member.photo}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: 480,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {member.name}
                  </Typography>
                  <Typography color="text.secondary">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
