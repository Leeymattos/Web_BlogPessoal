import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, Theme, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

import { Post } from '../../../models/Post';
import { api } from '../../../services/api';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [token, setToken] = useLocalStorage('token')

  const navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token])

  async function getPost() {

    const res = await api.get('posts', {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost();

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.text}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.theme?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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
  )
}
