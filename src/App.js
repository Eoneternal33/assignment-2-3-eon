import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Page1 } from './page_1';
import { Page2 } from './page_2';
import { Page3 } from './page_3';
import { Page4 } from './page_4';
import { All } from './all-pages';
import { Even } from './even-pages';
import { Odd } from './odd-pages';
function App() {
  return (
    <main>
      <h1>Routing Assignment</h1>
      
      <Link to="/page_1">
        <button>Page 1</button>
      </Link>
 
      <Link to="/page_2">
        <button>Page 2</button>
      </Link>

      <Link to="/page_3">
        <button>Page 3</button>
      </Link>

      <Link to="/page_4">
        <button>Page 4</button>
      </Link>

      <Link to="/all-pages">
        <button>All Pages</button>
      </Link>

      <Link to="/even-pages">
        <button>Even Pages</button>
      </Link>

      <Link to="/odd-pages">
        <button>Odd Pages</button>
      </Link>

      <Route path="/page_1" component={Page1} />
       <Route path="/page_2" component={Page2} />
     <Route path="/page_3" component={Page3} />
      <Route path="/page_4" component={Page4} />
      <Route path="/all-pages" component={All} />
      <Route path="/even-pages" component={Even} />
      <Route path="/odd-pages" component={Odd} />
    </main>
    
  );
} 

export default App;
