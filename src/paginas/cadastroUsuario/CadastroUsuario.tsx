import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
    {
      id: '',
      name: '',
      email: '',
      photo: '',
      password: ''
    })

  const [userResult, setUserResult] = useState<User>(
    {
      id: '',
      name: '',
      email: '',
      photo: '',
      password: ''
    })

  useEffect(() => {
    if (userResult.id != '') {
      navigate("/login")
    }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.password) {
      console.log(user);
      cadastroUsuario(`/user`, user, setUserResult)
      toast.success('Usuario cadastrado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='imagem2'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
            <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth />
            <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
            <TextField value={user.photo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='photo' label='Foto' variant='outlined' name='photo' margin='normal' fullWidth />
            <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Link to='/login' className='text-decorator-none'>
                <Button variant='contained' color='secondary' className='btnCancelar'>
                  Cancelar
                </Button>
              </Link>
              <Button type='submit' variant='contained' color='primary'>
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>



    </Grid>
  );
}

export default CadastroUsuario;