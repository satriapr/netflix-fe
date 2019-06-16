import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './App.css';
import Header from './components/Header/Header.view'
import Home from './modules/Home/Home.view'
import MovieDetail from './modules/MovieDetail/MovieDetail.view'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
