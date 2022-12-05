import React from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './style.css'
import { api } from '../../services/api';

type FormValues = {
  name: string
  email: string
  photo: string
  password: string
  passwordConfirm?: string
}

export default function Register() {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  async function handleRegister(data: FormValues) {
    if (data.password !== data.passwordConfirm) {
      alert('As senhas não coincidem');
    }

    try {

      delete (data.passwordConfirm);

      const response = await api.post('user', data);

      alert('Cadastro realizado com sucesso!');

      navigate('/');

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res)
          alert(res.data.message);
      }
      console.log(error);
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='imagem'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Typography variant='h3' gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>Cadastrar</Typography>
            <TextField {...register('name')} id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth />
            <TextField {...register('email')} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
            <TextField {...register('photo')} id='photo' label='Foto' variant='outlined' name='photo' margin='normal' fullWidth />
            <TextField {...register('password')} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
            <TextField {...register('passwordConfirm')} id='passwordConfirm' label='Confirmar Senha' variant='outlined' name='passwordConfirm' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Link to='/' className='text-decorator-none'>
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
