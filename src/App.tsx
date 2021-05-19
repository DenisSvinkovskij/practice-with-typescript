import React  from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import { TodoPage } from './pages/TodoPage';
import UserByIdPage from './pages/UserByIdPage';
import { UsersPage } from './pages/UsersPage';


const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <TodoPage />
        </Route>
        <Route path="/users" exact >
          <UsersPage />
        </Route>
        <Route path="/users/:id" >
          <UserByIdPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
