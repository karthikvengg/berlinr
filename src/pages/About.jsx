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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const teamMembers = [
  {
    name: "Karthikeyan V",
    role: "Founder & CEO",
    photo: "/team/karthik.png",
    link: "https://www.linkedin.com/in/karthikuma/",
  },
  {
    name: "Muthukumar B",
    role: "Managing Director",
    photo: "/team/Muthukumar.jpg",
    link: "https://www.babymasala.co.in",
  },
  {
    name: "Logeshwaran VP",
    role: "Director of Operations",
    photo: "/team/Logesh.jpg",
    link: "https://www.linkedin.com/in/logeshwaran-vp-26317134/",
  },
  {
    name: "Jeyaveeran P",
    role: "Head of Operations",
    photo: "/team/jeyaveeran.png",
  },
  {
    name: "Gayathri M",
    role: "Interior Designer - Freelance",
    photo: "/team/gayu.jpg",
  },
  {
    name: "Tamilselvi D",
    role: "Senior Sales Executive",
    photo: "/team/TamilselviD.jpeg",
  },
  {
    name: "Priyadharshini M",
    role: "Sales Executive Intern",
    photo: "/team/PriyadharshiniM.jpeg",
  },
];

const exEmployees = [
  {
    name: "Yokith S",
    role: "Sales Executive Intern",
    photo: "/team/Yokith.jpg",
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

      {/* Partners Section */}
      <Container maxWidth="lg" sx={{ mt: 10, mb: 2 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#DD0000" }}
        >
          Our Partners
        </Typography>
        <img src={icons} alt="Icons" style={{ width: "10%", height: "auto" }} />

        <Box
          display="flex"
          flexWrap="wrap"
          gap={4}
          mt={3}
          mb={6}
        >
          <a
            href="https://www.eurocas.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              p={3}
              borderRadius={3}
              boxShadow={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 140,
                width: 200,
                ":hover": { boxShadow: 3, backgroundColor: "#F5F5F5" },
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/partners/eurocas.png"
                alt="EUROCAS"
                sx={{ maxHeight: 60, maxWidth: 160, objectFit: "contain" }}
              />
            </Box>
          </a>

          <a
            href="https://babymasala.co.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              p={3}
              borderRadius={3}
              boxShadow={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 140,
                width: 200,
                ":hover": { boxShadow: 3, backgroundColor: "#F5F5F5" },
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/partners/babymasala.png"
                alt="Baby Masala"
                sx={{ maxHeight: 60, maxWidth: 160, objectFit: "contain" }}
              />
            </Box>
          </a>

          <a
            href="https://shoum.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              p={3}
              borderRadius={3}
              boxShadow={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 140,
                width: 200,
                ":hover": { boxShadow: 3, backgroundColor: "#F5F5F5" },
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/partners/shoum.png"
                alt="Shoum"
                sx={{ maxHeight: 60, maxWidth: 160, objectFit: "contain" }}
              />
              <Typography variant="caption" color="text.secondary" mt={1}>
                Shoum Tech Solutions
              </Typography>
            </Box>
          </a>
        </Box>
      </Container>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#DD0000" }}
        >
          Our Team
        </Typography>
        <img src={icons} alt="Icons" style={{ width: "10%", height: "auto" }} />

        <Grid container spacing={12} justifyContent="center" sx={{ mt: 1 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 1,
                  ":hover": { boxShadow: 2 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "3 / 4", // controls image box shape
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={member.photo}
                    alt={member.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top", // keeps head visible
                      display: "block",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {member.name}
                    {member.link ? (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginLeft: 8 }}
                      >
                        <OpenInNewIcon
                          sx={{
                            fontSize: "0.9rem",
                            opacity: 0.7,
                            color: "black",
                          }}
                        />
                      </a>
                    ) : null}
                  </Typography>
                  <img
                    src={icons}
                    alt="Icons"
                    style={{ width: "10%", height: "auto" }}
                  />
                  <Typography color="text.secondary">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Ex Employees Section */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#888" }}
        >
          Ex Employees
        </Typography>
        <img src={icons} alt="Icons" style={{ width: "10%", height: "auto" }} />

        <Grid container spacing={12} justifyContent="flex-start" sx={{ mt: 1 }}>
          {exEmployees.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 1,
                  ":hover": { boxShadow: 2 },
                }}
              >
                <Box sx={{ width: "100%", aspectRatio: "3 / 4", overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={member.photo}
                    alt={member.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>{member.name}</Typography>
                  <img src={icons} alt="Icons" style={{ width: "10%", height: "auto" }} />
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
