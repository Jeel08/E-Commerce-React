import React, { useEffect, useState } from 'react';
import like from '../svg/heart-svgrepo-com.svg';
import shopping from '../svg/shopping-cart-svgrepo-com.svg';
import { Modal } from 'react-bootstrap';
import close from '../image//icons8-close-50.png';
import plus from '../svg/plus-svgrepo-com.svg'
import minus from '../svg/minus-svgrepo-com.svg'
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import star from '../svg/star-svgrepo-com.svg';
import redLike from '../svg/like/red-heart-svgrepo-com.svg';
import Carousel from 'react-bootstrap/Carousel';

const PhoneProducts = () => {
    const [newArr,setNewArr] = useState([]);
    const [show,setShow] = useState(false);
    const [formdata,setFormData] = useState({});
    const [count,setCount] = useState(0);
    const [rate,setRate] = useState(0);
    const [isliked,setIsLiked] = useState(false);


    // useEffect(()=>{
    //   fetch('https://fakestoreapi.com/products')
    //   .then(res=>res.json())
    //   .then(json=>setArr(json));
    // },[]);

    useEffect(()=>{
      fetch('https://dummyjson.com/products/search?q=phone')
      .then(res => res.json())
      .then(json=>setNewArr(json?.products));
    },[]);
    console.log(newArr);
    
    const handleOpen = (data) => {
      setFormData(data);
      setRate(Math.round(data.rating))
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
      if(isliked)
        setIsLiked(false)
      else 
      setIsLiked(true)
    }
  

  return (
    <>
    <div style={{height:"100%",marginTop:"3rem"}}>

      <h3 style={{textAlign:"left",color:"cadetblue",marginBottom:"20px"}}> Mobile and Accessories</h3>
    <section>

        <div className='main_img_style'>
          {
            newArr.map((ar)=>{
              return (
                <>  
                  <div className='main_sub_img_style' >

                      <div className='img_container'>
                          
                            {
                            ar.images?.length === 1 ?
                            <img src={ar.images[0]} alt="Img" className='imgCard_Style'/>
                            : 
                            <div>
                                <Carousel data-bs-theme="dark">
                                    {
                                        ar.images?.map((imgs,id)=>{
                                        return (
                                            <>
                                            <Carousel.Item key={id}>
                                                <img src={imgs}  alt="Img" className='d-block w-100'/>
                                            </Carousel.Item>
                                            </>
                                            )
                                    })
                                    }
                                </Carousel>
                            </div>
                        }
                      </div>

                      <div className='p-3'>
                        <div className='mb-1'>
                          <label htmlFor="category" className='category_style'>{ar.category}</label>
                          <p className='title_style'>{ar.title}</p>
                          <span className='text_style'>{ar.description}</span>
                        </div>
                        
                        <div className='price_style'>

                          <div style={{left:"0",position:"absolute"}}>
                              <span style={{color:"green",fontSize:"20px"}}><span>&#8377;</span>{ar.price}</span>
                              <br />
                              <span style={{color:"red"}}>Avaliable Products :{ar.stock}</span>
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
                  <img src={formdata.images} alt="img" style={{width:"15rem",height:"15rem"}}/>
                  <br />
                  <img src={like} alt="like" className='svg_style' onClick={handleLiked} hidden={isliked}/>
                  {isliked ? <img src={redLike} alt="like" className='svg_style' onClick={handleLiked}/> 
                  : ""}
                </div>

                <div className='w-half'>

                  <div className='mb-3'>
                    <h2>{formdata.title}</h2>
                    <label htmlFor="category" className='category_style'>{formdata.category}</label>
                  </div>

                  <div className='mb-3'>
                    Rating :
                    {
                      [...Array(rate)].map((ar,i)=>{
                        return <img src={star} alt="star" key={i} style={{height:"2rem",width:"2rem"}}/> })
                    }
                    <i>{formdata.rating} out of 5</i>
                  </div>

                    <div className='mb-3'>
                      <OverlayTrigger

                        overlay={(props) => (
                          <Tooltip {...props} >
                            <p>{formdata.description}</p>
                          </Tooltip>
                        )}

                        placement="right" delayShow={300}
                        delayHide={150}
                      >
                      <Button variant="warning" >Description</Button>
                      </OverlayTrigger>
                    </div>
          
                    <div className='mb-3'>
                      <p className='offer-style'>Great Indian Festival</p>
                      <span style={{color:"green",fontSize:"20px"}}><span>&#8377;</span>{formdata.price}</span>
                      <br />
                      <span style={{color:"green"}}>Product Avalible : {formdata.stock}</span>
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

export default PhoneProducts