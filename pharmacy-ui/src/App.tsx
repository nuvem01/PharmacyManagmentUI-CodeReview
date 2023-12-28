import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './views/PageNotFound/PageNotFound';
import './App.scss'
import { Layout } from './layouts/Layout';
import Home from './views/Home/Home';
import { Chart } from './views/Chart/Chart';
import { Drug } from './views/Drug/Drug';


function App() {
  return (      
      <Router>   
            
              <Route path="/" element={<Layout someComponent={<Home/>}/>}/>
              <Route path="/" element={<Layout someComponent={<PageNotFound/>}/>}/>
              <Route path="/" element={<Layout someComponent={<Chart/>}/>}/>
              <Route path="/" element={<Layout someComponent={<Drug/>}/>}/>
            
      </Router> 
  )
}

export default App
