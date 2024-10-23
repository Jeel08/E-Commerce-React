import React, { useEffect, useState } from 'react';
import like from '../svg/heart-svgrepo-com.svg';
import shopping from '../svg/shopping-cart-svgrepo-com.svg';
import { Modal } from 'react-bootstrap';
import close from '../image//icons8-close-50.png';
import plus from '../svg/plus-svgrepo-com.svg'
import minus from '../svg/minus-svgrepo-com.svg'

<>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.1.2/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-lBISJVJ49zh34fnUuAaSAyuYzQ2ioGvhm4As4Z1JFde0kVpaC1FFWD3f9adpZrdD" crossorigin="anonymous"></link>
  </>

const ImgCard = () => {
    const [arr,setArr] = useState([]);
    const [show,setShow] = useState(false);
    const [formdata,setFormData] = useState({});
    const [count,setCount] = useState(0);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setArr(json));
    },[]);

    const handleOpen = (data) => {
      setFormData(data);
      setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleIncrement = ()=> setCount(count + 1);
    const handleDecrement = ()=> {
      if(count === 0){
        setCount(0);
      }
      else
      setCount(count - 1)
    }

      const handleLiked = () =>{
        return (<>
             <img src={like} alt=""  style={{backgroundColor:"red"}}/>
        </>)
      }
  

  return (
    <>
    <div style={{height:"100%",marginTop:"3rem"}}>

      <h3 style={{textAlign:"left",color:"cadetblue",marginBottom:"20px"}}> Product List</h3>
    <section>

        <div className='main_img_style'>
          {
            arr.map((ar)=>{
              return (
                <>  
                  <div className='main_sub_img_style' onClick={() => handleOpen(ar)}>

                      <div className='img_container'>
                        <img src={ar.image} alt="Img" className='imgCard_Style'/>
                      </div>

                      <div style={{padding:"1rem"}}>
                        <div className='mb-1'>
                          <label htmlFor="category" className='category_style'>{ar.category}</label>
                          <p className='title_style'>{ar.title}</p>
                          <span className='text_style'>{ar.description}</span>
                        </div>
                        
                        <div className='price_style'>

                          <div style={{left:"0",position:"absolute"}}>
                              <span style={{color:"green",fontSize:"20px"}}><span>&#8377;</span>{ar.price}</span>
                              <br />
                              <span style={{color:"red"}}>Out of Stock</span>
                          </div>

                          <div style={{right:"0",position:"absolute"}}>
                            <img src={like} alt="like" className='svg_style'/>
                            <img src={shopping} alt="like" className='svg_style'/>
                          </div>

                        </div>

                      </div>

                  </div>
                </>  
              )
            })
          }
        </div>

        <Modal size='lg'  show={show} onHide={handleClose} animation={false}>
            <p onClick={handleClose} >
              <img src={close} alt="" className='close-btn-style'/>
            </p>
            <div className='preview-style'>

                <div className='w-half'>
                  <img src={formdata.image} alt="img" style={{width:"15rem",height:"15rem"}}/>
                  <img src={like} alt=""  className='svg_style' onClick={handleLiked}/>
                </div>

                <div className='w-half'>
                    <h2>{formdata.title}</h2>
                    <label htmlFor="category" className='category_style'>{formdata.category}</label>
                    {Math.round(formdata.rating?.rate)}
          
                    <div className='mb-3'>
                      <p className='offer-style'>Offer price</p>
                      <span style={{color:"green",fontSize:"20px"}}><span>&#8377;</span>{formdata.price}</span>
                      <br />
                      <span style={{color:"green"}}>In Stock</span>
                    </div>

                    <div className='mb-3' style={{display:"flex",gap:"1rem"}}>
                        <p>Quantity</p>
                        <img src={plus} alt="increase" onClick={handleIncrement} className='qunt-icon-style'/>
                        <span className='fs-4'>{count}</span>
                        <img src={minus} alt="decrease" onClick={handleDecrement} className='qunt-icon-style'/>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div>
                        <p className='bottom-btn-style'>Buy Now</p>
                      </div>
                      <div>
                        <p className='bottom-btn-style'>Add to Cart</p>
                      </div>
                    </div>
                </div>
            </div>
        </Modal >

    </section>
    </div>
    </>
  )
}

export default ImgCard