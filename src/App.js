import logo from './logo.svg';
import './App.css';
import Router from './Components/Routes/Router';
import { Container } from './Components/Pages/Home/Styled';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Header />
      <Router />
      </BrowserRouter>
    </Container>
  );
}

export default App;
