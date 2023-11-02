import { Call, Email, LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>About</h1>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          sx={{ position: "relative" }}
        >
          <div className="bgEffectLeft  "></div>
          <Grid item xs={12} sm={12} md={6} sx={{ color: "white" }}>
            <Box sx={{ marginLeft: { xs: "0", md: "-15%" } }}>
              <img
                src={"/images/aboutPageImage.png"}
                alt="name"
                width={"100%"}
                style={{ minWidth: "300px", maxWidth: "500px" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              color: "#fff",
            }}
            xs={12}
            sm={12}
            md={6}
          >
            <p>
             My full name is Abdurakhmanov Obidzhon. I am 18 years old. I'm Uzbek. I have
            been studying programming since 2021. I get to know other
            people quickly. I have worked on many large and realistic projects, but I cannot tell you
            this because most of them are personal. If I don't know what you're asking, I'm definitely learning and I enjoy working on it myself
            </p>
            <Divider sx={{ border: "1px solid #394951", width: "60%" }} />
            <Box
              sx={{
                my: 2,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <LocationOn sx={{ color: "#BE699B" }} />
                <Typography>Andijan, Uzbekistan</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Call sx={{ color: "#BE699B" }} />
                <Link href="tel:+998947802724" underline="none" color="white">
                  <Typography>+998947802724</Typography>
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Email sx={{ color: "#BE699B" }} />
                <Link
                  target="_blank"
                  href="mailto:imobidjon@gmail.com"
                  underline="none"
                  color="white"
                >
                  <Typography>imobidjon@gmail.com</Typography>
                </Link>
              </Box>
            </Box>
            <Link target="_blank" href="https://t.me/imobidjon"  underline="none" color="white">
              <Button
                variant="contained"
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  width: "40%",
                  fontWeight: "bolder",
                  boxShadow: "0 5px 15px 0px rgba(255, 255, 255, 0.40)",
                  color: "#BE699B",
                  "&:hover": {
                    background: "white",
                  },
                }}
              >
                Hire Me
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
