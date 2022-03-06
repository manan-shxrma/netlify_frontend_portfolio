import React from "react"

function education (){
    return(<>
               <section id="education">
    <h2 class="base-head-all">EDUCATION</h2>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline">
                    <div class="timeline">
                        <a href="https://nith.ac.in/" class="timeline-content">
                            <div class="timeline-year">2020</div>
                            <div class="timeline-icon"><i style={{color: "#707070"}} class="fas fa-graduation-cap"></i></div>
                            <h3 style={{color: "#707070"}} class="title">Graduation</h3>
                            <p class="description">
                                Currently, a 2nd-year undergrad student at National Institute of Technology, Hamirpur HP, (177005) I am an Electrical engineering student with web development as a hobby. And yeah, I write blogs too.
                            </p>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="http://www.mcspalampur.in/" class="timeline-content">
                            <div class="timeline-year">2004</div>
                            <div class="timeline-icon"><i class="fas fa-school"></i></div>    
                            <h3 class="title">Schooling</h3>
                            <p class="description">
                                I have completed my primary as well as secondary education from Mount Carmel School, Palampur, HP (176102), well renowned in the region for its well versed teaching coupled with cognitive skill development.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>    
    </>)
}

export default education