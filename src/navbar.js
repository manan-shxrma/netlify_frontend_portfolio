import React from "react"


function navbar(){
return(<><div class="nav-main">


<ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    <li>
        <a href="#top" class="nav-link py-3 " title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="fas fa-2x fa-pastafarianism" style={{color:"black"}}></i> 
        </a>
        </li>
    <li class="nav-item">
    <a href="#top" class="nav-link  py-3 " aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
        <i class="fas fa-2x fa-home" style={{color:"black"}}></i>
    </a>
    </li>
    <li>
       <a href="#about" class="nav-link py-3 " title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="fas fa-2x fa-user-circle" style={{color:"black"}}></i>
        </a>
        </li>
    
    <li>
    <a href="#skills" class="nav-link py-3 " title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
        <i class="fas fa-2x fa-chart-line" style={{color:"black"}}></i>
    </a>
    </li>
    <li>
    <a href="#education" class="nav-link py-3 " title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
        <i class="fas fa-2x fa-user-graduate" style={{color:"black"}}></i>
    </a>
        </li>
  
    <li >
        <a href="#contact" class="nav-link py-3 " title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="fas fa-2x fa-envelope" style={{color:"black"}}></i>
        </a>
        </li>
</ul>   

</div></>)
}

export default navbar

