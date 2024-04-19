import React from 'react'

const Slider = () => {
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ marginLeft: "5rem" , marginRight:"5rem"}}>
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" >
      <div class="carousel-item active">
        <img class="d-block w-100" src="./images/b1.avif" alt="First slide" style={{height: "500px"}}/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./images/b2.jpeg" alt="Second slide" style={{height: "500px"}}/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./images/b3.webp" alt="Third slide" style={{height: "500px"}}/ >
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    </div>
  )
}

export default Slider;
