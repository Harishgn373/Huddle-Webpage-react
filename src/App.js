import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import MainData from './Component/MainData';
import Footer  from './Component/Footer';

function App() {

   let MainContent = MainData.map((ele)=>{
          return <Main data={ele}/>
   });
  return (
   <>
    <Header/>
    {MainContent}
    <Footer/>
   </>
  );
}

export default App;
