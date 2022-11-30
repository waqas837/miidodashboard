import { Helmet } from "react-helmet-async";
// @mui
import { Link, Typography, Paper, Box } from "@mui/material";
import { LoginForm } from "../sections/auth/login";

export default function LoginPage() {
  return (
    <div style={{ background: "#363740", width: "100%", height: "130vh" }}>
      <Helmet>
        <title> Log In to Dashboard Kit </title>
      </Helmet>

      <Box pt={4}>
        <Paper sx={{ width: "26%", m: "auto", p: 3, height: "auto" }}>
          <Box mb={2}>
            {/* see the public folder for assests of your svgs icons */}
            <img
              style={{ margin: "auto" }}
              src="/assets/icons/logoOnLogin.svg"
              alt="SVG as an image"
            />
          </Box>
          <Typography
            variant="h5"
            color="lightgray"
            sx={{ textAlign: "center" }}
          >
            Dashboard Kit
          </Typography>
          <br />
          <Typography variant="h4" gutterBottom textAlign={"center"}>
            Log In to Dashboard Kit
          </Typography>

          <Typography
            variant="body2"
            color="lightgray"
            gutterBottom
            textAlign={"center"}
          >
            Enter Your Email and Passoword below
          </Typography>

          <br />
          <LoginForm />

          <Typography variant="body2" sx={{ my: 5 }}>
            Don't have an account? {""}
            <Link variant="subtitle2">Sign up</Link>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
