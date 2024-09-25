import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import payment from "../assets/payment.png";
import shipped from "../assets/shipped.png";
import support from "../assets/support.png";
import laptop from "../assets/laptop.png";
import men from "../assets/men.png";
import washing from "../assets/washing.png";
import women from "../assets/women.png";
import logo from "../assets/logo.PNG";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";



//https://chatgpt.com/share/66f2f86f-cf88-800a-8c08-47199daa39a5
const Home = () => {
    const navigate = useNavigate();
   
return(<div>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" onClick={()=>navigate("/")}><img className="logo" src={logo} alt="pic" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>navigate("/")}>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onClick={()=>navigate("/cloths")}>Fashion</a></li>
        <li class="nav-item"></li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onClick={()=>navigate("/electronics")}>Electronics</a></li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onClick={()=>navigate("/homeapply")}>Home&Appliances</a></li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onClick={()=>navigate("/")}>Sports</a></li>
        <li class="nav-item">
          <img className="logo1" src={cart} alt="pic"/>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search Products" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div>
<Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        showIndicators={true}
        dynamicHeight={true} 
        interval={3000}
      >
        <div >
          <img src="https://images.hdqwalls.com/download/penelope-cruz-v-magazine-spring-2024-hf-1920x1080.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://images.hdqwalls.com/download/2019-irina-shayk-4k-new-tr-1920x1080.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://images.hdqwalls.com/download/irina-shayk-ellen-tracy-2018-sp-1920x1080.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://images.hdqwalls.com/download/irina-shayk-4k-5k-cc-1920x1080.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://images.hdqwalls.com/download/irina-shayk-harpers-bazaar-5k-2023-79-1920x1080.jpg" alt="Slide 3" />
        </div>
      </Carousel>
</div>

<div className="shop">
    <h1>Shop Collection</h1>
    <p>Get your favourit stylish cloths and be unique.</p>
</div>

<div class="card">
    <div class="card-body">
        <div onClick={()=>navigate("/cloths")}>
        <img src={men} alt="pic" />
            <p>Men</p>
        </div>
        <div onClick={()=>navigate("/cloths")}>
        <img src={women} alt="pic" />
        <p>Women</p>
        </div>
        <div onClick={()=>navigate("/electronics")}>
        <img src={laptop} alt="pic" />
        <p>Electronics</p>
        </div>
        <div onClick={()=>navigate("/homeapply")}>
        <img src={washing} alt="pic" />
        <p>Home Appliances</p>
        </div>
    </div>
</div>

<div className="grid-container">
    <div className="grid"><img src="https://img.freepik.com/free-vector/sale-landing-page-template-with-photo_23-2148271949.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid"><img src="https://img.freepik.com/free-psd/online-sale-flyer-template_23-2148553839.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid"><img src="https://img.freepik.com/free-vector/abstract-sale-landing-page-template_23-2148283473.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid"><img src="https://img.freepik.com/premium-photo/female-models-smiling-woman-peeking-into-shopping-bag-adult-woman-posing-with-shopping-bags-abst_1283069-5736.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid"><img src="https://img.freepik.com/premium-photo/female-models-smiling-woman-peeking-into-shopping-bag-adult-woman-posing-with-shopping-bags-adve_1283069-1414.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid"><img src="https://img.freepik.com/premium-photo/woman-is-sitting-yellow-poster-that-says-big-sale_1115474-81326.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid7"><img src="https://img.freepik.com/premium-vector/online-fashion-sale-template-vector_963014-174.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid7"><img src="https://img.freepik.com/premium-photo/vibrant-social-media-sale-post-mockup_1194840-1707.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
    <div className="grid7"><img src="https://img.freepik.com/premium-vector/new-collection-sale-banner-design_105164-276.jpg?uid=R87424454&ga=GA1.1.735808131.1721850184&semt=ais_hybrid" alt="pic" /></div>
</div>

<div class="card">
    <div class="card-body">
        <div>
            <img className="card-photo" src={shipped} alt="pic" />
            <p >Free Shipping</p>
            <p>Free Shipping Over $100</p>
        </div>
        <div><img className="card-photo" src={payment} alt="pic" />
            <p>Secure Payment</p>
            <p>100% Secure Payment</p></div>
        <div> <img className="card-photo" src={support} alt="pic" />
            <p>24/7 Support</p>
            <p>Support 24 hours a day</p></div>
    </div>
</div>

</div>)
}

export default Home;