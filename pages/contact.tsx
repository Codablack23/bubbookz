import HomeLayout from "../components/layout/home/HomeLayout";
import FormContainer from "../components/layout/user/forms";

export default function Contact(){
    return(
        <HomeLayout title={"Contact"}>
          <FormContainer title={"Bubbookz | Contact"} extraClass={"form-container-lg"}>
              <header className="form--title">
                  <h1 className="heading font-a" style={{fontWeight:400}}>Contact Us</h1><br />
                  <p className="sub-heading">Fill in the form below, and we would get back to you shortly</p>
                  <div className="flex justify-content-center d-md-block " style={{padding:" 0.65em 2.5em",textAlign:"center"}}>  
                     <p style={{marginRight:"1em",marginBottom:"0.8em"}}> 
                     <span style={{marginRight:"0.5em"}}>
                            <i className="bi bi-telephone sm-text"></i>
                        </span>
                     <span className="small-text">+234 908305 6789</span>
                     </p>
                      <p style={{marginLeft:"1em"}}>
                        <span style={{marginRight:"0.5em"}}>
                            <i className="bi bi-envelope small-text"></i>
                        </span>
                        <span className="small-text">info@bubbooks.com</span>
                      </p>
                     
                  </div>
              </header>
            <form className="form">
                <label htmlFor="">Name</label>
                <div className="form--input-group">
                    <input type="text" />
                </div><br />
                <label htmlFor="">Email</label>
                <div className="form--input-group">
                    <input type="email" />
                </div><br />
                <label htmlFor="">Phone Number</label>
                <div className="form--input-group">
                    <input type="number" />
                </div><br />
                <label htmlFor="">Message</label>
                <textarea className="form--input-group min-vh-20 w-100">
                </textarea>
            </form>
          </FormContainer>
        </HomeLayout>
    )
}