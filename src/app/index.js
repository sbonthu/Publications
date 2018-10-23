import React from 'react';
import { Provider } from 'react-redux';
import store from "../app/store"; 
import  LoginForm from "../app/screens/login"
const App = () =>(
<Provider store ={store}>
    <LoginForm />
</Provider>
)

export default App;
