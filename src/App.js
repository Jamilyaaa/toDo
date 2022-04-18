import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useTodosContext } from './contexts/todoContext';

function App() {

  
  return (
    <div className="container py-5">
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;



