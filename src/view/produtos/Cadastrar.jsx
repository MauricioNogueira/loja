import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const axios = require('axios');

class Cadastrar extends Component {
    constructor() {
        super();
        this.state = {
            produto:{
                nome: '',
                preco: '',
                imagem: ''
            },
        }
    }

    teste(e,field){
        let produto = this.state.produto;
        produto[field] = e.target.value;
        this.setState({...this.state, produto});
        console.log(this.state);
    }

    cadastrar() {
        let form = document.getElementById('form-cadastrar');
        let dataForm = new FormData(form);
        let object = {};
        dataForm.forEach((value, key) => {object[key] = value});

        axios.post('http://localhost:8080/api/cadastrar', object)
        .then(result => {
            form.reset();
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
                <h1>Cadastrar Produto</h1>
                <div>
                    <form id="form-cadastrar">
                        <Grid container spacing={4}>
                            <Grid container item xs={8} spacing={1}>
                                <TextField
                                    onChange={e => this.teste(e,"nome")}
                                    id="nome"
                                    label="Nome do Produto"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="nome"
                                />
                            </Grid>
                            <Grid container item xs={4} spacing={1}>
                                <TextField
                                    id="preco"
                                    onChange={e => this.teste(e,"preco")}
                                    label="Preço"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="preco"
                                    type="number"
                                />
                            </Grid>
                            <Grid container item xs={12} spacing={1}>
                                <TextField
                                    id="imagem"
                                    label="Link da imagem"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="imagem"
                                />
                            </Grid>
                        </Grid>
                        <Button onClick={this.cadastrar} variant="contained" color="primary">
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Cadastrar;