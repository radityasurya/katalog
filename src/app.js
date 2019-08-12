import React from 'react'
import NavBar from './components/NavBar'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <NavBar />
      </div>  
    </React.Fragment>
  )
}

export default App