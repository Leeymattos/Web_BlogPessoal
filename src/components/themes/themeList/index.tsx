import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../../models/Theme';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../../services/api';

export default function ThemeList() {
  const [temas, setTemas] = useState<Theme[]>([])
  const [token, setToken] = useLocalStorage('token')
  const navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getTema() {
    const res = await api.get("/themes", {
      headers: {
        'Authorization': token
      }
    })

    setTemas(res.data);
  }

  useEffect(() => {
    getTema();
  }, [temas.length])

  return (
    <>
      {
        temas.map(tema => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  {tema.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formTheme/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deleteTheme/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}
