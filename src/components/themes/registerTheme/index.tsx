
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Theme } from '../../../models/Theme';
import { buscaId } from '../../../services/api';

export default function RegisterTheme() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [theme, setTheme] = useState<Theme>({
    id: '',
    description: ''
  })

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/theme/${id}`, setTheme, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function onSubmit() {

  }

  function back() {
    navigate('/temas')
  }
  return (
    <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
      <form>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro theme</Typography>
        <TextField id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}
