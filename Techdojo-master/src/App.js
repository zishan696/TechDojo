import React from 'react';
import logo from './logo.svg';
import './App.css';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Ahshan',
  lastName: 'Zishan',
  avatarUrl: "https://media.gettyimages.com/photos/arch-bridge-in-kromlau-picture-id539121576?s=612x612"
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
const element = (
  <div>
    Task 1-3: ,
  <img src={user.avatarUrl}></img>
  <h1>
    Hello, {formatName(user)}!
    <br/>
    <br/>
    Greetings, {getGreeting(user)}
    <br/>
    Greetings, {getGreeting()}
    <br/>
    Clock, It is {new Date().toLocaleTimeString()}
    <br/>
  </h1>
  <h2>
    Task 4: ,
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" /></h2>
  </div>
);
  
  return (
  element
  );
}

export default App;
