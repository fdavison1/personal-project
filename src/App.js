import React from 'react';
import { Div, Title } from './css/styledComponents'
import routes from './utils/routes'
import { Link } from 'react-router-dom'


function App() {
  return (
    <Div>

      <Link to='/'>
        <button>landing</button>
      </Link>

      <Link to='/login'>
        <button>login</button>
      </Link>

      <Link to='/register'>
        <button>register</button>
      </Link>

      <Link to='/dash'>
        <button>dash</button>
      </Link>


      <Title>App.js</Title>



      {routes}




    </Div>




  );
}

export default App;
