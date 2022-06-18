import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/index"
import Content from "./components/content/index"
import Content2 from './components/content2/index2';
import Content3 from './components/content3/index3';
import Content4 from './components/content4/index4';
import Home from "./components/home/index"
import Cavescontent from "./components/content2/content-caves/caves"
import Cavescontent2 from './components/content2/content-caves2/caves2';
import Cavescontent3 from './components/content2/content-caves3/caves3';
import Cavescontent4 from './components/content2/content-caves4/caves4';
import Sightcontent from './components/content3/sights-of-almaty/sight-almaty';
import Sightcontent2 from './components/content3/borovoye-sights/sight-borovoye';
import Lakecontent3 from './components/content3/bukhtarma-lake/bukhtarma-lake';
import Sightcontent4 from './components/content3/sights-of-pavlodar/sight-pavlodar';
import Palaceaccord from './components/content4/palace-of-peace/palace-of-peace';
import Historymuseum from './components/content4/military-history-museum/history-museum';
import Cathedralofchirst from './components/content4/cathedral-of-christ-the-savior/cathedral-of-chirst';
import Alakolsky from './components/content4/alakolsky-state-nature-reserve/alakolsky-state-nature-reserve';

function App() {
  return (
  
  <Router>
    <div className='content'>
      <div className='header'>
        <Header/>
      </div> 
      <div className='dashboard'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Content' element={<Content />} />
        <Route path='/Content2' element={<Content2 />} />
        <Route path='/Content2/content-caves' element={<Cavescontent />} />
        <Route path='/Content2/content-caves2' element={<Cavescontent2 />} />
        <Route path='/Content2/content-caves3' element={<Cavescontent3 />} />
        <Route path='/Content2/content-caves4' element={<Cavescontent4 />} />
        <Route path='/Content3' element={<Content3 />} />
        <Route path='/Content3/sight-of-almaty' element={<Sightcontent />} />
        <Route path='/Content3/borovoye-sights' element={<Sightcontent2 />} />
        <Route path='/Content3/bukhtarma-lake' element={<Lakecontent3 />} />
        <Route path='/Content3/sights-of-pavlodar' element={<Sightcontent4 />} />
        <Route path='/Content4' element={<Content4 />} />
        <Route path='/Content4/palace-of-peace-and-accord' element={<Palaceaccord/>} />
        <Route path='/Content4/military-history-museum' element={<Historymuseum />} />
        <Route path='/Content4/cathedral-of-christ-the-savior' element={<Cathedralofchirst />} />
        <Route path='/Content4/alakolsky-state-nature-reserve' element={<Alakolsky />} />
      </Routes>
      </div>
      {/* <div className='footer'>
        <Footer/>
      </div> */}
    </div>
    </Router>

  
  );
}

export default App;
