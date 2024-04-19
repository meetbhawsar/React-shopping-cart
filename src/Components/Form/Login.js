import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail]=useState('');
  const [password,setPassword]= useState('');

  const collectData = async() => {
    console.log(email,password);
    let result = await fetch('http://127.0.0.1:80/cart' , {
      method: 'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json()
    console.log(result);
  }
  return (
    <div>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <section class="vh-100" style={{backgroundColor: "#eee"}}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{borderRadius: "25px"}}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
    
                    <form class="mx-1 mx-md-4">
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email'/>
                          <label class="form-label" for="form3Example3c">Your Email</label> 
                        </div>
                      </div>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
                          <label class="form-label" for="form3Example4c">Password</label>
                        </div>
                      </div>
                      
    
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" style={{padding: "2px", width: "5rem"}} onClick={collectData}>
                          SIGN IN</button>
                      </div>
                      <div class="form-check d-flex justify-content-center mb-4">
                      Don't have an account?  <a href="#!">Register</a>
                      </div>
    
                    </form>
    
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample iimage" style={{height: "300px" , width: "auto"}}/>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;
