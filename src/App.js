import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <Main />
      <Footer />
    </>
  );
}

export default App;
