import { Email, GitHub, Telegram } from "@mui/icons-material";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            sx={{ position: "relative" }}
          >
        <div className="bgEffectRight"></div>
            <Grid item xs={12} sm={12} md={6} sx={{ color: "white"}}>
              <Box sx={{ mb: 5 }}>
                <Typography variant="h6" sx={{ color: "#BE699B" }}>
                  Hi there!
                </Typography>
                <Typography variant="h4" sx={{ my: 1 }}>
                  I'm Obidjon Abdurahmonov
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    backgroundImage:
                      " linear-gradient(90deg, rgba(190,105,155,1) 50%, rgba(149,143,255,1) 80%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundRepeat: "repeat",
                  }}
                >
                  MERN Stack Web Developer
                </Typography>
              </Box>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, id alias! Dolorum praesentium nihil expedita voluptate
                explicabo necessitatibus illum quia!
              </p>

              {/* Buttons */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 2 }}
              >
                <Link target="_blank" href="/images/OBIDJON ABDURAHMONOV.pdf" underline="none" color="white">
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "10px",
                      fontWeight: "bolder",
                      boxShadow: "0 5px 15px 0px rgba(255, 255, 255, 0.40)",
                      color: "#BE699B",
                      "&:hover": {
                        background: "white",
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Link>
                <Link target="_blank" href="https://t.me/imobidjon"  underline="none" color="white">
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "white",
                      borderRadius: "10px",
                      fontWeight: "bolder",
                      boxShadow: "0 5px 15px 0px rgba(255, 255, 255, 0.40)",
                      color: "#fff",
                      "&:hover": {
                        color: "#BE699B",
                        background: "white",
                      },
                    }}
                  >
                    Hire me
                  </Button>
                </Link>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                  <img src={'/images/arrow.gif'} alt={'arrow'} width='100%' style={{rotate: '100deg', minWidth: "10px", maxWidth: "120px"}} />
                </Box>
              </Box>

              {/* Social Media */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 3, gap: '10px' }}>
                {/* Email */}
                <Link target="_blank" href="mailto:imobidjon@gmail.com" underline="none" color="white">
                  <Box
                    sx={{
                      background: "#2F3D46",
                      width: "50px",
                      height: "50px",
                      color: '#BE699B',
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Email />
                  </Box>
                </Link>

                {/* Telegram */}
                <Link target="_blank" href="https://t.me/imobidjon"  underline="none" color="white">
                  <Box
                    sx={{
                      background: "#2F3D46",
                      width: "50px",
                      height: "50px",
                      color: '#BE699B',
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Telegram />
                  </Box>
                </Link>

                {/* GitHub */}
                <Link target="_blank" href="https://github.com/imobidjon" underline="none" color='white'>
                  <Box
                    sx={{
                      background: "#2F3D46",
                      width: "50px",
                      height: "50px",
                      color: '#BE699B',
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GitHub />
                  </Box>
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              xs={12}
              sm={12}
              md={6}
            >
              <Box sx={{marginRight: {xs: "0", md: "-35%" }}}>
                <img
                  src={"/images/homePageImage.png"}
                  alt="name"
                  width={"100%"}
                  style={{ minWidth: "300px", maxWidth: "500px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}
