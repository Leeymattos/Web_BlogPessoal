import Theme from './Tema'

interface Postagem {
  id: string;
  title: string;
  text: string;
  theme?: Theme | null
}

export default Postagem;