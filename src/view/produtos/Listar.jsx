import React, { Component } from 'react';
import GridComponent from '../../componentes/GridComponent';
const axios = require('axios');

class Listar extends Component {
    constructor() {
        super();
        this.state = {
            produtos: []
        }
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
                <GridComponent itens={this.state.produtos} />
                {/* <Grid container spacing={4}>
                    {
                        this.state.produtos.map(produto => {
                            return (
                                <Grid container item xs={12} spacing={3}>
                                    <CardComponent titulo={produto.nome} />
                                </Grid>
                            )
                        })
                    }
                </Grid> */}
            </div>
        );
    }
}

export default Listar;