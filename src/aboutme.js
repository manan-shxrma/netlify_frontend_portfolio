import React from "react"

function about(){
    return(<>
       <section id="about">
                 

                 <h2 class="base-head-all">ABOUT ME</h2>
                 <p class="base-head-text-all">I am a sophomore at National Institute of Technology, Hamirpur. I am an Electrical engineering undergrad and have
                      a keen interest in Web development. 
                 </p>
                 <div class="container my-5">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
                          <div class="full-content-about">
                        <p class="lead">Full Name</p>
                        <div class="stat">Manan Sharma</div>
                        <p class="lead">Date of Birth</p> 
                        <div class="stat">16th April, 2002</div> 
                        <p class="lead">Currently pursuing</p> 
                        <div class="stat">B-Tech-EE, NITH</div> 
                        <p class="lead">Location</p> 
                        <div class="stat">Palampur, HP(176102)</div> 
                        <div style={{paddingTop: "1.6%"}} class="mob-resume-ico d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                          <a href="https://www.quora.com/profile/Manan-Sharma-252" class="underline-about">Here's My Resume</a> 
                          <i  style={{paddingTop: "1.3%"}} class=" far fa-file-alt"></i>
                          </div> 
                        </div>
                      </div>
                      <div class="col-lg-4 img-about-box offset-lg-1 p-0 overflow-hidden ">
                          <img class="rounded-lg-4 img-about" src="images/Manan.png" alt="" width="720" />
                      </div>
                    </div>
                  </div>
                
   </section>
    </>)
}

export default about