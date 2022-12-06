import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/api';
import { Theme } from '../../../models/Theme';

export default function DeletePost() {

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [theme, setTheme] = useState<Theme>()

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
    buscaId(`/themes/${id}`, setTheme, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/themes')
    deleteId(`/themes/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Tema deletado com sucesso');
  }

  function nao() {
    navigate('/themes')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {theme?.description}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
