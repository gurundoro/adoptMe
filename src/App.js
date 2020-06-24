import React from 'react'
import {render} from 'react-dom'
import { Router, Link } from "@reach/router"
import SearchParams from './SerachParams';
import Details from './Details';

const App = () => {


    return (
        <React.StrictMode>
        <div>
          <header>
            <Link to="/"> Adopt ME</Link>
          </header>
            <Router>
                <SearchParams path= "/" />
                <Details path="/details/1" />
             </Router>
        </div>
        </React.StrictMode>
    )
};

render(<App />, document.getElementById('root'))
