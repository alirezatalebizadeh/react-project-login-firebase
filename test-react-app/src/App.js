import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header'
import { useRoutes } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import routes from './routes';




function App() {

  let router = useRoutes(routes)


  return (
    <>
      <Container className='my-2' >
        <Row>
          <Header />
        </Row>
      </Container>
      {router}
    </>
  );
}

export default App;
