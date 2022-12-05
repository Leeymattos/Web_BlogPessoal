import React, { useState } from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { api } from '../../services/api';
import './style.css';

type FormValues = {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormValues>();

  async function handleLogin(data: FormValues) {
    try {

      const res = await api.post('auth/login', data);

      localStorage.setItem("token", res.data.token);

      navigate('/home');

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res) {
          alert(res.data.message);
        }
      }
      console.log(error);
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography variant='h3' color='textPrimary' sx={{ fontWeight: "bold", textAlign: "center" }}>Entrar</Typography>
            <TextField {...register('email')} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
            <TextField {...register('password')} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Button type='submit' variant='contained' color='primary'>
                Logar
              </Button>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1'>Não tem uma conta?</Typography>
            </Box>
            <Link to='/register'>
              <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Cadastre-se</Typography>
            </Link>

          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="image">

      </Grid>
    </Grid >
  );
}