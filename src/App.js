import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

function App() {
  return (
    <div className="App">
        <AppBar position="static">
            <Toolbar>
                <Link href="#" variant="inherit" color="textPrimary">
                    Cadastrar
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default App;
