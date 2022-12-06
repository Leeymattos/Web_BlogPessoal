import React from 'react'
import { Box, Button, Modal, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close'
import RegisterPost from '../resgisterPost';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function ModalPost() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }} >
        <CloseIcon onClick={handleClose} />

      </Box>

      < RegisterPost />

    </div>
  );

  return (
    <div>
      <Button
        sx={{ borderColor: 'white', backgroundColor: 'white' }}
        variant="outlined"
        onClick={handleOpen}>Nova Postagem</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
