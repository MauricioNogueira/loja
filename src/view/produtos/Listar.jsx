import React, { Component } from 'react';
import GridComponent from '../../componentes/GridComponent';
const axios = require('axios');

class Listar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: []
        }
        this.history = props.history;
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
                <GridComponent itens={this.state.produtos} history={this.history} />
            </div>
        );
    }
}

export default Listar;