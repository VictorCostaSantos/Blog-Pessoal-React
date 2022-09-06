import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';


function Home() {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="caixa"
        >
          <Grid alignItems="center" item xs={6} >
            <Box paddingX={20}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Aqui é um lugar feito para você que gosta de ensinar e aprender.
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}></Box>
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://stories.freepiklabs.com/api/vectors/left-hander/cuate/render?color=FF0000FF&background=complete&hide="
              alt="Desenho de menina estudando"
            />
            <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
          </Grid>
        </Grid>
      </>
    );
}

export default Home;