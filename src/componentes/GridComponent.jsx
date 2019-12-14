import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardComponent from '../componentes/CardComponent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GridComponent(props) {
  const classes = useStyles();
  const itens = props.itens;

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {
            itens.map((produto, index) => {
                return (
                  <Grid key={index} container item xs={3} spacing={2}>
                      <CardComponent history={props.history} item={produto} rotaDeletar="http://localhost:8080/api/deletar" titulo={produto.nome}/>
                  </Grid>
                );
            })
        }
      </Grid>
    </div>
  );
}