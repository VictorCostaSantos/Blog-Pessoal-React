import React, { useState,useEffect, ChangeEvent } from 'react';
import { Box,Grid, TextField, Typography,Button} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import userlogin from '../../models/UserLogin';
import './Login.css'
import { api } from '../../services/Service';

function Login() {

  let history = useHistory();
  const [token,setToken] =useLocalStorage('token');

  const [userLogin, setUserlogin] = useState<userlogin>({
    id: 0,
    usuario: '',
    senha:'',
    token:'',
  })

  useEffect(()=>{
    if(token != '')
    history.push('/home')
  }, [token])

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserlogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

   try{
        const resposta= await api.post('/usuarios/logar', userLogin)
        setToken(resposta.data.token)

        alert('usuario logado com sucesso');
   }catch(error){
      alert('Dados do Usuario inconsistentes. Erro ao logar!');
   }
    
  }

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
                value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel}
                id="usuario"
                label="usuario"
                variant="outlined"
                name="usuario"
                margin="normal"
                style={{ color: "red" }}
                fullWidth
              ></TextField>
              <TextField
                value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel}
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
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Box marginRight={1}>
                    <Typography variant="subtitle1" gutterBottom align="center">
                      {" "}
                      Não tem uma conta?
                    </Typography>
                  </Box>
                  <Link to="/cadastrousuario">
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