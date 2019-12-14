import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const axios = require('axios');

class Editar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto:{
                id: '',
                nome: '',
                preco: '',
                imagem: ''
            },
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        
        axios.get('http://localhost:8080/api/produto/'+id)
        .then(result => {
            this.setState({produto: result.data[0]});
            // this.setState({produto: {
            //     nome: result.data[0].nome
            // }});

            // this.setState({produto: {
            //     preco: result.data[0].preco
            // }});

            // this.setState({produto: {
            //     imagem: result.data[0].imagem
            // }});
        })
        .catch(error => {
            console.log(error);
        });
    }

    watch(e,field){
        let produto = this.state.produto;
        produto[field] = e.target.value;
        this.setState({...this.state, produto});
    }

    atualizar() {
        let form = document.getElementById('form-atualizar');
        let dataForm = new FormData(form);
        let object = {};
        dataForm.forEach((value, key) => {object[key] = value});

        axios.put('http://localhost:8080/api/atualizar/'+this.state.produto.id, object)
        .then(result => {
            alert(result.data.message);
        })
        .catch(error => {
            Object.keys(error.response.data.error).map(chave => {
                let mensagem = `${error.response.data.error[chave]}`;
                alert(mensagem);
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Editar Produto</h1>
                <div>
                    <form id="form-atualizar">
                        <Grid container spacing={4}>
                            <Grid container item xs={8} spacing={1}>
                                <TextField
                                    onChange={e => this.watch(e,"nome")}
                                    id="nome"
                                    label="Nome do Produto"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.produto.nome}
                                    variant="outlined"
                                    name="nome"
                                />
                            </Grid>
                            <Grid container item xs={4} spacing={1}>
                                <TextField
                                    id="preco"
                                    onChange={e => this.watch(e, "preco")}
                                    label="Preço"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={this.state.produto.preco}
                                    name="preco"
                                    type="number"
                                />
                            </Grid>
                            <Grid container item xs={12} spacing={1}>
                                <TextField
                                    id="imagem"
                                    label="Link da imagem"
                                    onChange={e => this.watch(e, "imagem")}
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={this.state.produto.imagem}
                                    name="imagem"
                                />
                            </Grid>
                        </Grid>
                        <Button onClick={this.atualizar.bind(this)} variant="contained" color="primary">
                            Atualizar
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Editar;