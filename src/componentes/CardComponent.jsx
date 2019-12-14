import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const axios = require('axios');

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
});

export default function CardComponent(props) {
  const classes = useStyles();
  const produto = props.item;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={produto.imagem}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {produto.nome}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ {produto.preco}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="secondary" onClick={() => props.deletar(produto.id)}>
          Deletar
        </Button>
        <Button onClick={() => props.editar(produto.id)} variant="contained" color="primary">
          Atualizar
        </Button>
      </CardActions>
    </Card>
  );
}