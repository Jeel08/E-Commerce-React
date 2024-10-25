/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CommonProductListing from './Common/productListing';
import Preview from './Common/preview';
import search from '../svg//search-svgrepo-com.svg';

const ImgCard = ({url}) => {
    const [newArr,setNewArr] = useState([]);
    const [show,setShow] = useState(false);
    const [formdata,setFormData] = useState({});
    const [count,setCount] = useState(0);
    const [rate,setRate] = useState(0);
    const [isliked,setIsLiked] = useState(false);
    const [index,setIndex] = useState(0);
    const [searchProduct,setSearchProduct] = useState([]);

    useEffect(()=>{
      fetch(`${url}`)
      .then(res => res.json())
      .then(json=>{
        setNewArr(json?.products)
      });
    },[url]);

    const handleOpen = (data,i) => {
      setFormData(data);
      setIndex(i)
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
    
    const handleSearchProduct = (e) => {
      console.log(`https://dummyjson.com/products/search?q=${e.target?.value}`);
      e.preventDefault();
      
      fetch(`https://dummyjson.com/products/search?q=${e.target?.value}`)
      .then(res => res.json())
      .then(json=>{
        console.log(json);
        setSearchProduct(json?.products)
      });
    }

    // useEffect(()=>{
    //   fetch(`${searchProduct}`)
    //   .then(res => res.json())
    //   .then(json=>{
    //     setSearchProduct(json?.products)
    //   });
    // },[searchProduct]);

    console.log(searchProduct.length);

  return (
    <>
    <div style={{height:"100%",marginTop:"3rem"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}>

        <h3 style={{textAlign:"left",color:"cadetblue",marginBottom:"20px"}}> Product List</h3>

        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex gap-1 ">
            <input type="text" placeholder='Search a Product' className='rounded'  
            onSubmit={(e)=>handleSearchProduct(e)} />
            <button className="btn btn-success" type="button">Search</button>
          </form>
        </div>
      </nav>

    </div>

    <section>

      <div className='main_img_style mt-1'>
        {
        searchProduct.length === 0 ? 
          newArr.map((ar,i)=>{
            return (
              <div onClick={() => handleOpen(ar,i)}>
                <CommonProductListing ar={ar} i={i} />
              </div>
              )
          })
        : 
        searchProduct.map((ar,i)=>{
              return (
                <div onClick={() => handleOpen(ar,i)}>
                  <CommonProductListing ar={ar} i={i} />
                </div>
                )
            })
          }
      </div>

      <Modal size='lg' animation={false} show={show}>
        <Preview
        handleClose={handleClose}
        formdata={formdata} 
        handleLiked={handleLiked} 
        isliked={isliked}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        rate={rate}
        count={count}
        i={index}
        />
      </Modal >

    </section>
    </div>
    </>
  )
}

export default ImgCard