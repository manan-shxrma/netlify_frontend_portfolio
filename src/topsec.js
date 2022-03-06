import React from "react"

function topsec(){
       /*Typing effect */
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #000 }";
    document.body.appendChild(css);
  };



    return(<>
     <section id="top" class="main-sec">
       <img class="bk-img-top" src="images/neon.png" alt="" /> 
       <img class="mob-bk-im-top" src="images/mobile-bk.png" alt="" /> 
       
       <div class="top-sec-content">
         
              <h1 class="im-inline-top-mob" >Hey!</h1>
              <h3 class="im-inline-top-mob" >I'm </h3>
              <h1><b> MANAN SHARMA</b></h1>
             
                    <h1>A 
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " Web developer.", " Footballer.", " Sophomore.", " Blogger."]'></span>
                    </h1>
                    <div class=" soc-links">
                            <a class="soc-item" href="https://www.linkedin.com/notifications/"><i style={{color:"black"}} class="fab fa-lg fa-linkedin-in"></i></a>
                            <a class="soc-item" href="https://www.instagram.com/manan_shxrma/"><i style={{color:"black"}} class="fab fa-lg fa-instagram"></i></a>
                            <a class="soc-item" href="https://github.com/manan-shxrma"><i style={{color:"black"}} class="fab fa-lg fa-github"></i></a>
                            <a class="soc-item" href="https://www.quora.com/profile/Manan-Sharma-252"><i style={{color:"black"}} class="fab fa-lg fa-quora"></i></a>
                   </div>
        </div>
    </section> </>)
}

export default topsec