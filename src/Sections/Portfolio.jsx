import { GitHub, Launch } from "@mui/icons-material";
import { Box, Container, Divider, Grid, IconButton, Link, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-back-flax.vercel.app/api/portfolio")
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Box sx={{ textAlign: "center", color: "white", mt: 10 }}>
        <h1>Portfolio</h1>
      </Box>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            left: "0px",
            top: "-127px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={"/images/portfolio.png"}
            alt="name"
            width={"100%"}
            style={{ minWidth: "100px", maxWidth: "150px" }}
          />
        </Box>
        <Divider sx={{ border: "1px solid #394951", mb: 3 }} />
        <div className="bgEffectLeft"></div>
        <Grid container display={"flex"} justifyContent={"center"}>
          {portfolio.map((item, index) => (
            <Grid item sm="12" md="8" xs="12" key={index}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  pt: 2,
                  px: 2
                }}
              >
                <h3>{item.name}</h3>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  {item.technologies.map((tech) => (
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
                      {tech.name},
                    </Typography>
                  ))}
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: '13px',
                    color: '#394951',
                  }}
                >
                  {item.description}
                  </Typography>
                <Box>
                    <Link target="_blank" href={item.frontGit_link} underline="none" color="white">
                        <Tooltip title={'Front End'} placement="top">
                            <IconButton>
                                <GitHub />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link target="_blank" href={item.backGit_link} underline="none" color="white">
                        <Tooltip title={'Back End'} placement="top">
                            <IconButton>
                                <GitHub />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link target="_blank" href={item.host_link} underline="none" color="white">
                        <Tooltip title={'Web Site'} placement="top">
                            <IconButton>
                                <Launch sx={{color: "#BE699B"}}  />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
