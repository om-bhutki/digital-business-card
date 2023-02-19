import React from "react"

export default function Card() {
    return (
  <div className="card mx-auto" style={{width: "21rem", height: "10rem"}}>
    <img src="../images/profile-pic.png" className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-white">
        <h5 className="card-title text-center medium">Laura Smith</h5>
        <p className="role card-text text-center small">Frontend Developer</p>
        <p className="website card-text text-center small">laurasmith.website</p>
        <button type="button" className="btn btn btn-light me-3"><i className="icon fa-solid fa-envelope"></i>Email</button>
        <button type="button" className="btn btn-primary"><i className="icon fa-brands fa-linkedin"></i>Linkedin</button>
        
    </div>
    
    <div className="card-body bg-dark text-white">
        <h4 className="card-text ms-2 small">About</h4>
        <p className="card-text ms-2 small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull.
        </p>
        <h4 className="card-text ms-2 small">Interests</h4>
        <p className="card-text ms-2 small">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         Rcesdf saareg ereegere Crgere Ceargerge Cergergee eerg Rerge aliguq. Ut enim ad minim, veniam quis nostrud exercitation ull.
         </p>
    </div>
    <div className="card-footer text-white">
      <div class="container pt-2">
    
    <section class="mb-2">
    
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

            
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>
    </div>
 </div>
    )
}