import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router
} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import dogs from './dogs';
import './App.css';

function App() {
  return (
    <Router basename="/React-Router-DogFinder">
      <Routes>
        <Route exact path="/dogs"
          element={
            <>
              <h1>Pick a dog and learn facts about him/her!</h1>
              <DogList dogs={dogs} />
            </>
          } />
        <Route path="/dogs/:dogName"
          element={<DogDetails dogs={dogs} />} />
        <Route path="*"
          element={<Navigate to="/dogs" replace />} />
      </Routes>
    </Router>
  );
}

export default App;