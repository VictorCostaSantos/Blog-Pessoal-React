import { Box,Grid, TextField, Typography,Button} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form>
              <Typography
                variant="h3"
                gutterBottom
                color="secondary"
                component="h3"
                align="center"
                style={{ fontWeight: "bold", color: "#9c68ff" }}
              >
                Entrar
              </Typography>
              <TextField
                id="usuario"
                label="usuario"
                variant="outlined"
                name="usuario"
                margin="normal"
                style={{ color: "red" }}
                fullWidth
              ></TextField>
              <TextField
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                className="border"
                fullWidth
              ></TextField>
              <Box marginTop={2} textAlign="center">
                <Link to="/home" className="text-decoration-none">
                  <Button
                    type="submit"
                    variant="contained"
                    className="secondary"
                    style={{
                      borderColor: "white",
                      backgroundColor: "#6d49b3",
                      color: "white",
                    }}
                  >
                    Logar
                  </Button>
                </Link>
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Box marginRight={1}>
                    <Typography variant="subtitle1" gutterBottom align="center">
                      {" "}
                      Não tem uma conta?
                    </Typography>
                  </Box>
                  <Link to='/cadastrousuario'>
                    {" "}
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      align="center"
                      className="border"
                    >
                      cadastre-se
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>

        <Grid xs={6} className="image1"></Grid>
      </Grid>
    );

}
export default  Login;