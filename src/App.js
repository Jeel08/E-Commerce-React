import './App.css';
import Navbar from './component/Sections/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ImgCard from './component/imgCard.jsx'
import PhoneProducts from './component/phone.jsx';
import CLothes from './component/clothe.jsx';

<>
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

</>

function App() {
  return (
    <>
    <Navbar />
    <div style={{paddingInline:"2rem"}}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ImgCard/>} />
      <Route path="/phone" element={<PhoneProducts/>} />
      <Route path="/cloth" element={<CLothes/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
