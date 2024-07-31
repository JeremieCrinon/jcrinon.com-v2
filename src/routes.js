import Home from './pages/Home/Home';

const routes = [
    { path: '/', name: 'home', element: <Home /> },
    { path: '/about', name: 'about', element: <h1>about</h1> },
    { path: '/portfolio', name: 'portfolio', element: <h1>portfolio</h1> },
    { path: '/contact', name: 'contact', element: <h1>contact</h1> }
  ];
  
  export default routes;