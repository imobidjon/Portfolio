import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const [loading, setloading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    info: "",
    severity: "",
  });

  const onSubmit = (data) => {
    setloading(true);
    axios
      .post("https://portfolio-back-flax.vercel.app/api/message", data)
      .then((res) => setSnackbar({open: true, info: res.data.info, severity: 'success'}), setloading(false))

      .catch((err) => setSnackbar({open: true, info: err, severity: 'error'}), setloading(false));
    reset()
  };

  return (
    <div>
      <Snackbar
        open={snackbar.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity || 'success'}
          sx={{ width: "100%" }}
        >
          {snackbar.info}
        </Alert>
      </Snackbar>
      <Box sx={{ textAlign: "center", color: "white", mt: 15 }}>
        <h1>Contact</h1>
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            backgroundColor: "rgb(255 255 255 / 0.3)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: "0px",
              top: "-70px",
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={"/images/contact2.png"}
              alt="name"
              width={"100%"}
              style={{ minWidth: "80px", maxWidth: "100px" }}
            />
          </Box>
          <div className="bgEffectRight"></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src={"/images/contact.png"}
                alt="name"
                width={"100%"}
                style={{ minWidth: "300px", maxWidth: "500px" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component="form"
                sx={{ p: 3 }}
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <Box>
                  <TextField
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "10px",
                      border: "none",

                      "& fieldset": { border: "none" },
                    }}
                    placeholder={"Name*"}
                    {...register("name", { required: true })}
                  />
                  <Box>
                    {errors.name && errors.name.type === "required" && (
                      <span  style={{color: '#BE699B'}}>Enter a valid email</span>
                    )}
                  </Box>
                </Box>

                <Box sx={{my: 3,}}>
                  <TextField
                    sx={{
                      width: "100%",
                      
                      background: "#fff",
                      borderRadius: "10px",
                      border: "none",
                      "& fieldset": { border: "none" },
                    }}
                    variant="outlined"
                    placeholder={"Email*"}
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  <Box>
                    {errors.email && errors.email.type === "required" && (
                      <span  style={{color: '#BE699B'}}>
                        This is required field
                      </span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <span  style={{color: '#BE699B'}}>Enter a valid email</span>
                    )}
                  </Box>
                </Box>

                <Box>
                  <TextField
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "10px",
                      border: "none",
                      "& fieldset": { border: "none" },
                    }}
                    rows={4}
                    placeholder={"Message*"}
                    multiline
                    variant="outlined"
                    required
                    {...register("message", { required: true })}
                  />

                  <Box>
                    {errors.message && errors.message.type === "required" && (
                      <span style={{color: '#BE699B'}}>
                        This is required field
                      </span>
                    )}
                  </Box>
                </Box>
                {!loading ? (
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      background: "white",
                      borderRadius: "10px",
                      width: "40%",
                      fontWeight: "bolder",
                      boxShadow: "0 5px 15px 0px rgba(255, 255, 255, 0.40)",
                      color: "#BE699B",
                      mt: 2,
                      "&:hover": {
                        background: "white",
                      },
                    }}
                  >
                    Send
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "10px",
                      width: "40%",
                      fontWeight: "bolder",
                      boxShadow: "0 5px 15px 0px rgba(255, 255, 255, 0.40)",
                      color: "#BE699B",
                      mt: 2,
                      "&:hover": {
                        background: "white",
                      },
                    }}
                  >
                    <CircularProgress />
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
