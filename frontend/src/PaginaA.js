import React, { Component } from "react";
import axios from "axios";

export default class PaginaA extends Component {

    state = {
        data: null
    };

    componentDidMount() {
        axios.get("/api/teste/get").then(response => {
            this.setState({data: response.data});
        });
    }

    render() {
        let dados = null;
        if (this.state.data) {
            dados = (
                <div>
                    <p>{this.state.data.id}</p>
                    <p>{this.state.data.nome}</p>
                </div>
            );
        }

        return (
            <div>
                <div>Pagina A</div>
                {dados}
            </div>
        );
    }
}