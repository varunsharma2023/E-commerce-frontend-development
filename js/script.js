container.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light nv bg-light" id="head">
<div class="container-fluid">
    <a href="#"><img src="/images/logo.png" alt="E-shopping" class="logo"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="serch">
              <input class="form-control me-2 serch_a" type="search" placeholder="Search" aria-label="Search">
              <button class=" serch_b" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="for">
        <ul id="unordr" class="d-flex justify-content-end align-items-center mt-1 mb-1">
        <li><a href="/pages/login.html"><button class=" btn login-btn-dsign text-white me-4">Login</button></a></li>
          <li><a href="/pages/cart.html"><i class=" cart-icon fa-solid fa-cart-shopping fa-2xl me-4" style="color: #fb7e09;"></i></a></li>
        </ul>
        </div>
</div>
</div>
</nav>

   
      <ul class=" nav container-fluid" id="product-nav">
        <li class="nav-item">
          <a class="nav-link" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/allproducts.html">All Products</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Women
          </a>
          <ul class="dropdown-menu down">
            <li><a class="dropdown-item bg-transparent" href="/pages/women-all.html">All Products</a></li>
            <li><a class="dropdown-item bg-transparent" href="/pages/women-dress.html">Dresses</a></li>
            <li><a class="dropdown-item bg-transparent" href="/pages/women-pant.html">Pants</a></li>
            <li><a class="dropdown-item bg-transparent" href="/pages/women-skirt.html">Skirts</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Men
          </a>
          <ul class="dropdown-menu  down">
            <li><a class="dropdown-item bg-transparent" href="/pages/men-all.html">All Products</a></li>
            <li><a class="dropdown-item bg-transparent" href="/pages/men-shirts.html">Shirt</a></li>
            <li><a class="dropdown-item bg-transparent" href="/pages/men-pants.html">Pants</a></li>
            <li><a class="dropdown-item bg-transparent" href="/pages/men-hood.html">Hoodies</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/kidsproducts.html">Kids</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/contactus.html">Contact</a>
        </li>
        
      </ul>
      
  </div>
</nav>




`

//Footer

footer.innerHTML=`<footer class="footer">

<div class="container"></div>
    <div class="row me-0"> 
        <div class="col-12 col-lg-3 text-white foot">
            <h4>Women</h4>
            <ul>
                <li><a href="/pages/women-dress.html">Dresses</a></li>
                <li><a href="/pages/women-pant.html">Pants</a></li>
                <li><a href="/pages/women-skirt.html">Skirts</a></li>
            </ul>
        </div>
        <div class="col-12 col-lg-3 text-white foot">
            <h4>Men</h4>
            <ul>
                <li><a href="/pages/men-hood.html">Hoodies</a></li>
                <li><a href="/pages/men-pants.html">Pants</a></li>
                <li><a href="/pages/men-shirts.html">Shirts</a></li>
            </ul>
        </div>
        <div class=" col-12  col-lg-3 text-white foot">
            <h4><a href="/pages/kidsproducts.html">  Kids</a></h4>
            
        </div>
        <div class="col-12 col-lg-3 text-white foot">
            <h4>Links</h4>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/login.html">Login</a></li>
                <li><a href="/pages/contactus.html">Contact</a></li>
            </ul>

            
        </div>
        <hr class="text-white">
        <p class="text-white cprt"> E-Shopping Copyright 2023
    </div>
    
</div>
</footer>
`

//script for login form

function login(){

  var mail=document.getElementById("eml").value
  var psw=document.getElementById("pswd").value
  if(mail==="admin@admin.com" && psw==="123456"){
    alert("login Successful")
  }
    else{
      alert("Incorrect Id or Password")
  }
  clear();
}

function clear(){
  document.getElementById("eml").value="";
  document.getElementById("pswd").value="";
}
