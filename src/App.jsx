import './App.scss';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import MyRouter from './layout/MyRouter';
function App() {
  return (
    <>
      <Header />
      <MyRouter />
      <Footer/>
    </>
  );
}

export default App;
