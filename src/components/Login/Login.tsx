import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getSessionData } from "../Context/productContext";
import { Navigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required(),
});

const Login = (props: any) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [isLoginLoading, setLoginLoading] = useState<boolean>(false);

  const handleOnSubmit = (credentials: any) => {
    setLoginLoading(true);
    let encrySessiondata = window?.btoa(JSON.stringify(credentials));
    if (credentials && encrySessiondata) {
      setLoginLoading(false);
      sessionStorage.setItem("userData", encrySessiondata);
    }
  };
  console.log(getSessionData(), "data");
  return (
    <React.Fragment>
      {getSessionData()?.email ? (
        <Navigate to="/" />
      ) : (
        <Container
          component="main"
          maxWidth="xs"
          style={{ marginTop: "90px", marginBottom: "90px" }}
        >
          <Box>
            <Typography component="h1" variant="h5" color="primary">
              Login
            </Typography>
            <form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                autoFocus
                {...register("email")}
                error={errors.email ? true : false}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                type="password"
                error={errors.password ? true : false}
                {...register("password")}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
                {isLoginLoading ? (
                  <CircularProgress
                    style={{ position: "absolute" }}
                    size={25}
                  />
                ) : (
                  ""
                )}
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
};
export default Login;
