import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import SignIn from './components/signIn/SignIn';
import SignInCheck from './components/signInCheck/SignInCheck';
import NotFound from './components/notFound/NotFound'
import Main from './components/main/Main'
import ViewContent from './components/viewContent/ViewContent';
import Oauth from './components/oauth/Oauth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path='/signInCheck'element={<SignInCheck/>}/>
        <Route path='/ViewContent' element={<ViewContent/>}/>
        <Route path='login/oauth2/code/google' element={<Oauth/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
