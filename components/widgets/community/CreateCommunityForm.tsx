import Link from "next/link";
import Image from "next/image";
import {Image as AntdImage, Modal, Spin} from 'antd'
import { useContext, useState } from "react";
import { message, Progress } from "antd";
import axios from "axios";
import Dropzone from "react-dropzone";
import { validateFields } from "~/helpers/validator";
import Communities from "~/helpers/Communities";
import { AuthContext } from "~/context/auth/AuthContext";

interface DropZoneProps {
  title?:string,
  action:([key]:any)=>any,
  errors?:string

}

const filetypes =["jpeg","jpg","png","svg","jif"]

function DropzoneWidget({action,errors}:DropZoneProps){
  const [file,setFile] = useState<FileList[]|{}>({})
  const [isUploading,setIsUploading] = useState(false)
  const [imageUrl,setImageUrl] = useState<any>("")
  const [progress,setProgress] = useState<any>(0)
  const [progressObj,setProgressObj] = useState<any>({loaded:0.00,total:0.00})
  
  async function handleUpload(e:any){
    e.preventDefault()
    setIsUploading(true)
    const response =  await axios.post("http://localhost:5505/upload",file,{
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "Set-Cookie"
      },
      withCredentials:true,
      onUploadProgress:(event:{[key:string]:any})=>{
        setProgressObj({loaded:event.loaded,total:event.total})
        const loaded = parseFloat(event.loaded)
        const total = parseFloat(event.total)
        const percent = ((loaded/total) * 100).toFixed(2)
        setProgress(percent)
      }
     })
     .then((res:any)=>res.data)
     .catch((err:any)=>{
      return{
      status:"Failed",
      error:"couldnt connect to server",
      axios:err
     }})
     if(response.status == "success"){
      setImageUrl(response.file.url)
      action(response.file.url)
     }else{
      setIsUploading(false)
      message.error(response.error)
     }

  }
  return(
    <div>
       <Dropzone onDrop={files=>{
    const currentFile =files[0]
    const type = files[0].type.slice(currentFile.type.indexOf("/")+1)
    if(filetypes.includes(type)){
      const url = URL.createObjectURL(files[0])
      setImageUrl(url)
      setFile(files)
    }
    else{
      message.error(`Unsupported image types only ${filetypes.toString()} are accepted`)
    }
    
  }}>
     {(({getRootProps, getInputProps})=>
      <form action="" className="upload" onSubmit={handleUpload}>
          {imageUrl ?
          <div className="bg-gray-200 rounded-lg p-3 text-center">
            {!isUploading && (
                <header className="flex justify-between items-center">
                <button 
                type="button"
                {...getRootProps()}
                className="btn-smaller"><i className="bi bi-pencil"></i></button>
                <button 
                type="button"
                onClick={()=>setImageUrl("")}
                className="btn-smaller"
                ><i className="bi bi-trash text-xl text-red-400 "></i></button>
               </header>
            )}
            <AntdImage src={imageUrl as string} height={200} alt="book-photo"/>
          </div>
          :
            <>
            <label className="upload-image-label d-block curved text-center w-100 min-vh-30"
            {...getRootProps()}
            >
           <div>
            
           <i className="small-40 bi bi-image text-gray-500"></i><br /><br />
           <p className="small-14">Drag and Drop or Click to upload image</p>
           </div>
           </label> 
           <p className="small-13 err-text">{errors && ("Please upload a banner image")}</p>
            </>  
          }         
          {imageUrl && (isUploading ?null
           :<button className="btn-small bub-bg-theme" onClick={handleUpload}>Upload</button>  
          )}
         <input type="file"  className="upload-input" name="" id="upload" {...getInputProps()} />
         
     </form>
     )}
   </Dropzone>
   {isUploading && (
     <div className="border border-gray-300 rounded p-2">
     <div className="flex items-center">
     <div className="w-100 ml-3 disabled:bg-gray-300">
       <p className="">Your Banner Image</p>
       <Progress percent={progress.toString()} strokeColor={"#1DCEFD"}/>
       <p className="mt-1">{(progressObj.loaded/(1024 * 1024)).toFixed(2)}mb of {(progressObj.total/(1024 * 1024)).toFixed(2)}mb</p>
     </div>
     </div>
   </div>
   )}
    </div>
  )
 
}

export default function CreateForm({buttonText}){
  const {state} = useContext(AuthContext)
  const [title,setTitle] = useState('')
  const [about,setAbout] = useState('')
  const [banner_img,setBannerImg] = useState('')
  const [errors,setErrors] = useState<any>({})
  const [loading,setLoading] = useState(false)
  async function handleSubmit(e){
    e.preventDefault()
    if(state.isLoggedIn){
      const fieldErrors = validateFields([
        {inputField:title,inputType:"text",inputName:"Title"},
        {inputField:about,inputType:"text",inputName:"About"},
        {inputField:banner_img,inputType:"link",inputName:"Banner"},
      ])
      console.log(fieldErrors)
      const errObj = {}
      fieldErrors.forEach((err)=>{
        errObj[err.field] =  err.error
      })
      setErrors(errObj)
      if(fieldErrors.length == 0){
       setLoading(true)
       const response = await Communities.createCommunity({
        title,
        about,
        banner_img
       })
       setLoading(false)
       if(response.status == "success"){
        message.success("Community created Successfully")
        setTimeout(()=>{
          window.location.assign("/community")
        },5000)
       }else{
       message.error(response.error)
       }
       console.log(response)
      }
    }else{
      message.warning("You can not create a community without login ")
    }
  }

  
  return(
      <form className="w-70 w-md-90 m-auto">
        <Modal visible={loading} footer={false} closable={false} centered={true}>
          <div >
            <div className="flex justify-content-center align-items-center w-100 min-h-30">
              <Spin size="large"/>
            </div>
            <p className="small-13 bub-m-0 text-center">Creating Your Community</p>
            <p className="small-13 bub-m-0 text-center">This may take a few minutes</p>
          </div>
        </Modal>
         <label htmlFor="title" className="input-label">Title</label>
         <input 
          type="text" 
          className="curved w-100 input" 
          value={title}
          onChange={(e:any)=>{setTitle(e.target.value)}}
          /><br />
         <p className="small-13 err-text"> {errors.title}</p>
          <br />

         <label htmlFor="title" className="input-label">About</label>
         <textarea
          className="curved w-100 input vh-30" 
          value={about}
          onChange={(e:any)=>{setAbout(e.target.value)}}
         ></textarea><br />
         <p className="small-13 err-text">{errors.about}</p>
         <br />

         <label className="input-label">Upload Photo</label>
         {/* <label htmlFor="upload" className="upload-image-label d-block curved text-center w-100 min-vh-30">
          <p>
            <Image src="/images/community/upload-img.svg" height={"100%"} width={"100%"} alt="" />
          </p>
         <p className="small-14">Drop a file here or <span className="text-theme small-14">Browse</span></p>
         </label><br />
         <input type="file" className="upload-input" name="upload" id="upload" /><br /><br /> */}
         <DropzoneWidget action={setBannerImg} title={title} errors={errors.banner}/>
         <br />
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
           <button className="btn bg-theme text-white w-75" onClick={handleSubmit}>{buttonText}</button>
         </div>
      </form>
  )
}