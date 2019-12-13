import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function getProdutos(itens) {
      itens.map(produto => {
          return (
            <Grid container item xs={12} spacing={3}>
                <CardComponent titulo={produto.nome}/>
            </Grid>
          );
      })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {
            itens.map((produto, index) => {
                return (
                  <Grid key={index} container item xs={12} spacing={3}>
                      <CardComponent item={produto} rotaDeletar="http://localhost:8080/api/deletar" titulo={produto.nome}/>
                  </Grid>
                );
            })
        }
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}