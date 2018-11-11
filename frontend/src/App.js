import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaginaA from "./PaginaA";
import PaginaB from "./PaginaB";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        Aplicação react funcionando.
                    </div>
                    <Switch>
                        <Route path="/paginaA" component={PaginaA}/>
                        <Route path="/paginaB" component={PaginaB}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
