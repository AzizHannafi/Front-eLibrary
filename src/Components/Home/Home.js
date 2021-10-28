import './Home.css'

function Home(){
    return(
        <div className="home__element"> 
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
            </head>
            <body>
             <section class="banner">
                <div class="container">
                    <div class="row">
                         <div class="col-sm-6"></div>
                            <div class="col-sm-6 introduction">
                                 <h2> Introduction to E-LIBRARY</h2>
                                 <p>
                                     E-library is a  website that provide around the clock online access to digitized audio, video, and written material. It provides free copies of books, journals, etc. available to the users. Normally these materials are classics which have no copyright digital formats (as opposed to print, microform, or other media) and accessible by computers. The digital content may be stored locally, or accessed remotely via computer networks. A digital library is a type of information retrieval system.
                                 </p>
                            </div>
                        </div>
                    </div>
            </section>
            </body>
        </div>
    )   
}
export default Home;