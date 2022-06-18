import './App.css';
import Campus from './components/screens/Campus';
import Certificate from './components/screens/Certificate';
import Footer from './components/screens/Footer';
import GetIt from './components/screens/GetIt';
import Header from './components/screens/Header';
import Newtech from './components/screens/Newtech';
import Questions from './components/screens/Questions';
import SchoolPart from './components/screens/SchoolPart';
import Spotlight from './components/screens/Spotlight';
import StudentsPart from './components/screens/StudentsPart';
import Wish from './components/screens/Wish';

function App() {
  return (
  <>
    <Header />
    <Spotlight />
    <Wish />
    <Campus />
    <Newtech />
    <Certificate />
    <SchoolPart />
    <StudentsPart />
    <GetIt />
    <Questions />
    <Footer />
  </>
    
  );
}

export default App;
