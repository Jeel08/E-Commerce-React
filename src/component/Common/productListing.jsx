import React from 'react'
import like from '../../svg/heart-svgrepo-com.svg';
import shopping from '../../svg/shopping-cart-svgrepo-com.svg';
const CommonProductListing = ({ar,i}) => {
  return (
    <div className='main_sub_img_style'  key={i}>

        <div className='img_container'>
        {
            ar.images?.length === 1 ?
            <img src={ar.images[0]} alt="Img" className='imgCard_Style'/>
            : 
                (<div className="carousel slide " data-bs-ride="carousel" data-bs-interval="200">
            <div className="carousel-inner">
            {
                ar.images?.map((imgs,id)=>{
                return (
                    <>
                    <div className={`carousel-item ${id === 0 ? 'active' : ''}`}   key={id}>
                    <img src={imgs}  alt="Img" className='d-block imgCard_Style'/>
                    </div>
                    </>
                    )})
            }
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={`#demo_${i}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#demo_${i}`} data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
                {/* <Carousel data-bs-theme="dark">
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
                </Carousel> */}
            </div>)
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
  )
}

export default CommonProductListing;