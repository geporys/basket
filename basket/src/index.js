import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Menu from './nav.jsx';
import './index.css';
import Footer from './footer.jsx';
import Basket from './basket.jsx';
import {Router} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
     <Header /> 
     <Menu />
     <Basket />
     <Footer />
     </div>, document.getElementById('root'));
registerServiceWorker();
