import './App.css';
import Navbar from './component/Sections/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgCard from './component/imgCard.jsx'
import { useState } from 'react';

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
  const [url,setUrl] = useState("https://dummyjson.com/products");
  const handleClick = (url) => {
    setUrl(url)
};
  return (
    <>
    <Navbar handleClick={handleClick}/>
    <div style={{paddingInline:"2rem"}}>
        <ImgCard  url={url}/>
    </div>
    </>
  );
}

export default App;
