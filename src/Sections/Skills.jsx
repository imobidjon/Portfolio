import { Box, Container, Divider, Grid, Tooltip } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkill] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-back-flax.vercel.app/api/skills")
      .then((res) => setSkill(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Box sx={{ textAlign: "center", color: "white" }}>
        <h1>Skills</h1>
      </Box>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            right: "0px",
            top: "-127px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={"/images/student.png"}
            alt="name"
            width={"100%"}
            style={{ minWidth: "100px", maxWidth: "150px" }}
          />
        </Box>
        <Divider sx={{ border: "1px solid #394951", mb: 3 }} />
        <div className="bgEffectRight"></div>
        <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
          {skills.map((item) => (
            <Grid xs="3" md='1' key={item._id}>
              <Tooltip title={item.name} placement="top">
                <Box
                  sx={{
                    background: "#2F3D46",
                    width: "50px",
                    height: "50px",
                    color: "#BE699B",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <img src={item.image} alt={item.name} width={"30px"} />
                </Box>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
