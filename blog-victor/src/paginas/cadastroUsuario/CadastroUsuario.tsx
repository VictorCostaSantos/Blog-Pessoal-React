import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import {Link} from 'react-router-dom'
import React from 'react';
import './CadastroUsuario.css'
function cadastroUsuario(){
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} className="img1"></Grid>
        <Grid item xs={6} alignItems="center">
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
                Cadastrar
              </Typography>
              <TextField
                id="usuario"
                label="nome"
                variant="outlined"
                name="usuario"
                margin="normal"
                style={{ color: "red" }}
                fullWidth
              ></TextField>

              <TextField
                id="senha"
                label="email"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                className="border"
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
              <TextField
                id="senha"
                label="Confirmar senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                className="border"
                fullWidth
              ></TextField>
              <Box marginTop={2} textAlign="center" margin={10}>
                <Link to="/home" className="text-decoration-none">
                  <Button
                    variant="contained"
                    className="text1"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    cancelar
                  </Button>
                <Link to="/home" className="text-decoration-none">
                  <Button type="submit" variant="contained" className="text1">
                    Cadastrar
                  </Button>
                </Link>
                </Link>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    );
}
export default cadastroUsuario;