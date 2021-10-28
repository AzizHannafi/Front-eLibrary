import './Footer.css'
function Footer(){
    return(
        <div className="footer">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
            </head>
            <footer class="bg-dark text-center text-white"  id="footer__element_one">
                <div class="container p-4">
                    <div class="row ">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                             <h5 class="text-uppercase">About E-LIBRARY</h5>
                                <p>
                                 E Library is a free website that provides you the possibility of reading multiple books with all the genres and with high quality 
                                </p>
                        </div>
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                     <h5 class="text-uppercase">Contact Us</h5>
                        <p>
                         Contact us if need help withanything <br/>
                        +216 55 266 649 <br/>
                        hannafimedaziz@gmail.com
                        </p>
                </div>
                    </div>
                   
                </div>
       
               
                <div class="text-center text-dark p-3" id="last__footer" >
                    <p>
                         © 2021 Copyright <br/>
                        hannafimedaziz@gmail.com
                    </p> 
         
                </div>
           </footer>
        </div>
    )
}
 export default Footer;