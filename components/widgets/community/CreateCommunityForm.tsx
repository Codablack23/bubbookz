import Link from "next/link";

export default function CreateForm({buttonText}){
  return(
      <form className="w-70 w-md-90 m-auto">
         <label htmlFor="title" className="input-label">Title</label>
         <input type="text" className="curved w-100 input" /><br /><br />
         <label htmlFor="title" className="input-label">About</label>
         <textarea className="curved w-100 input vh-30" ></textarea><br /><br />
         <label className="input-label">Upload Photo</label>
         <label htmlFor="upload" className="upload-image-label d-block curved text-center w-100 min-vh-30">
          <p>
            <img src="/images/community/upload-img.svg" alt="" />
          </p>
         <p className="small-14">Drop a file here or <span className="text-theme small-14">Browse</span></p>
         </label><br />
         <input type="file" className="upload-input" name="upload" id="upload" /><br /><br />

         {buttonText == "Create Community"?(
           <div className="flex w-100">
            <input type="checkbox" name="" id="" style={{marginTop:'4px',marginRight:'5px'}}/>
            <p className="small-14">
              By creating this community, I agree to Bubbooks 
              <Link href={"/"}><a className="text-theme small-14"> Terms and Condition</a></Link> and 
              <Link href={"/"}><a className="text-theme small-14"> Privacy Policy</a></Link></p>
           </div>
         ):null}
         <div className="text-center">
           <button className="btn bg-theme text-white w-75">{buttonText}</button>
         </div>
      </form>
  )
}