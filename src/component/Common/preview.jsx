import React from 'react';
import '../style.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import star from '../../svg/star-svgrepo-com.svg';
import redLike from '../../svg/like/red-heart-svgrepo-com.svg';
import close from '../../image//icons8-close-50.png';
import plus from '../../svg/plus-svgrepo-com.svg'
import minus from '../../svg/minus-svgrepo-com.svg'
import like from '../../svg/heart-svgrepo-com.svg';

const Preview = ({handleClose,formdata,handleLiked,isliked,handleIncrement,handleDecrement,rate,count,i}) => {
  return (
        <div key={i}>
            <p onClick={handleClose} >
              <img src={close} alt="" className='close-btn-style'/>
            </p>
            <div className='preview-style'>

                <div className='w-half'>
                  <img src={formdata.images[0]} alt="img" style={{width:"15rem",height:"15rem"}}/>
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
                      <span style={{color:"green"}}>Product Avalible : {formdata.stock > 0 ? formdata.stock : "Comming Soon"}</span>
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
          </div>
  )
}

export default Preview;