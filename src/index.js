import React from 'react';
import ReactDOM from 'react-dom';
import Profiles from './components/profiles';
import './index.css'

const App=()=>{
  return(
    <div className="component">
      <Profiles />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));