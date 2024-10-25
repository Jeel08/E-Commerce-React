/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../style.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

const Navbars = ({handleClick}) => {
    // [
    //     "beauty",
    //     "fragrances",
    //     "furniture",
    //     "groceries",
    //     "home-decoration",
    //     "kitchen-accessories",
    //     "laptops",
    //     "mens-shirts",
    //     "mens-shoes",
    //     "mens-watches",
    //     "mobile-accessories",
    //     "motorcycle",
    //     "skin-care",
    //     "smartphones",
    //     "sports-accessories",
    //     "sunglasses",
    //     "tablets",
    //     "tops",
    //     "vehicle",
    //     "womens-bags",
    //     "womens-dresses",
    //     "womens-jewellery",
    //     "womens-shoes",
    //     "womens-watches"
    //   ]
  return (
    <>
        <nav>
            <div className='row main'>

            <div className='col mt-2'>
                <p style={{color:"white",cursor:"pointer"}} className=' mt-2' title='Do Shopping' onClick={()=>handleClick("https://dummyjson.com/products")}>Shopping</p>
            </div>

            <div className='col mt-2'>
                <div className="dropdown">
                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" title='Accessories' className='anchorStyle'
                style={{backgroundColor:"black"}}> Accessories </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><p className="dropdown-item cursor-pointer" href="/clothes/mens-wear" title="Kitchen Accessories" onClick={()=>handleClick("https://dummyjson.com/products/category/kitchen-accessories")}>Kitchen Accessories</p></li>
                    <li><p className="dropdown-item cursor-pointer" href="/clothes/mens-wear" title="Sports Accessories" onClick={()=>handleClick("https://dummyjson.com/products/category/sports-accessories")}>Sports Accessories</p></li>
                    <li><p className="dropdown-item cursor-pointer" href="/clothes/mens-wear" title="Mobile Accessories" onClick={()=>handleClick("https://dummyjson.com/products/category/mobile-accessories")}>Mobile Accessories</p></li>
                </ul>
                </div>
            </div>

            <div className='col mt-2'>
                <div className="dropdown">
                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" title='Clothes' className='anchorStyle'
                style={{backgroundColor:"black"}}> Men's Collections </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><p className="dropdown-item cursor-pointer" href="/clothes/mens-wear" title="Man's Wear" onClick={()=>handleClick("https://dummyjson.com/products/category/mens-shirts")}>Shirts</p></li>
                    <li><p className="dropdown-item cursor-pointer" href="/clothes/mens-wear" title="Man's Wear" onClick={()=>handleClick("https://dummyjson.com/products/category/mens-shoes")}>Shoes</p></li>
                    <li><p className="dropdown-item cursor-pointer" href="/clothes/mens-wear" title="Man's Wear" onClick={()=>handleClick("https://dummyjson.com/products/category/mens-watches")}>Watches</p></li>
                </ul>
                </div>
            </div>


            <div className='col mt-2'>
                <div className="dropdown">
                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" title='Clothes' className='anchorStyle'
                style={{backgroundColor:"black"}}> Women's Collections </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><p className="dropdown-item cursor-pointer" href="/womens-wear" title="Women's Wear" onClick={()=>handleClick("https://dummyjson.com/products/category/tops")}>Top's</p></li>
                    <li><p className="dropdown-item cursor-pointer" href="/womens-wear" title="Women's Wear" onClick={()=>handleClick("https://dummyjson.com/products/category/womens-shoes")}>Shoes</p></li>
                    <li><p className="dropdown-item cursor-pointer" href="/womens-wear" title="Women's Wear" onClick={()=>handleClick("https://dummyjson.com/products/category/womens-watches")}>Watches</p></li>
                </ul>
                </div>
            </div>

            <div className='col mt-2'>
                <p  className='anchorStyle paddingNavbar' onClick={()=>handleClick("https://dummyjson.com/products/category/groceries")}>Groceries</p>
            </div>
            <div className='col mt-2'>
                <p  className='anchorStyle paddingNavbar' onClick={()=>handleClick("https://dummyjson.com/products/category/sunglasses")}> Sunglasses</p>
            </div>
            <div className='col mt-2'>
                <p  className='anchorStyle paddingNavbar'>Electronics</p>
            </div>
            </div>
      </nav>

    </>
  )
}

export default Navbars