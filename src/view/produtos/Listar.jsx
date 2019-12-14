import React, { Component } from 'react';
import GridComponent from '../../componentes/GridComponent';
import Grid from '@material-ui/core/Grid';
import CardComponent from '../../componentes/CardComponent';
const axios = require('axios');

class Listar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: []
        }
        this.history = props.history;
    }

    deletar(id) {
        axios.delete('http://localhost:8080/api/deletar/'+id)
        .then(result => {
            this.setState({produtos: result.data});
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    editar(id) {
        this.history.push(`/editar/`+id);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/produtos')
        .then(result => {
            this.setState({produtos: result.data});
        })
        .catch(error => {
            console.log("Erro ao carregar dados da API");
            this.setState({produtos: []});
        });
    }

    render() {
        return (
            <div>
                <h1>Listagem de produtos</h1>
                <Grid container spacing={4}>
                    {
                        this.state.produtos.map((produto, index) => {
                            return (
                            <Grid key={index} container item xs={3} spacing={2}>
                                <CardComponent deletar={this.deletar.bind(this)} editar={this.editar.bind(this)} item={produto}/>
                            </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        );
    }
}

export default Listar;