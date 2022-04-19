import Link from "next/link";

const footerLinks =[
    {
     head:"Company",
     links:[
        {
         url:"/about",
         text:"About Us"
        },
        {
         url:"/",
         text:"Our Blog"
        },
        {
         url:"/",
         text:"Contact Us"
        },
        {
         url:"/",
         text:"Privacy / Policy"
        },
        {
         url:"/",
         text:"Terms and Condition"
        },        
        
     ],
    },
    {
        head:"Work with Us",
        links:[
        {
         url:"/",
         text:"Sell On Bubbookz"
        },
        {
         url:"/",
         text:"Advertise"
         },     
        ],
    },
    {
        head:"Connect with Us",
        links:[],

       }
]

export default function Footer(){
    return(
        <footer className="footer container">
           <div className="footer--row">
              <div className="footer--row-link w-60 w-md-100">
                  {
                      footerLinks.map(link=>(
                    <div className="footer--links w-40 w-sm-100" key={link.head}>
                        <p className="text-white font-a fw-reg heading">{link.head}</p>
                        {link.links.length > 0?
                         <ul style={style.liststyle}>
                             {link.links.map(l=>(
                              <li key={l.text} className="text-white">
                                <Link href={l.url}>
                                  <a className="text-white" >{l.text}</a>
                                </Link>
                              </li>
                              ))
                             }
                         </ul>
                        :(
                         <ul style={style.liststyle}
                          className="social--links flex">
                            <li className="bg-white">
                             <Link href={"/"}>
                              <a><i className="bi bi-facebook"></i></a>
                             </Link>
                            </li>
                            <li className="bg-white">
                             <Link href={"/"}>
                              <a><i className="bi bi-instagram"></i></a>
                             </Link>
                            </li>
                            <li className="bg-white">
                             <Link href={"/"}>
                              <a><i className="bi bi-twitter"></i></a>
                             </Link>
                            </li>
                         </ul>
                        )}
                        {/* <ul style={style.liststyle}>
                            {link.links.length > 0?
                              link.links.map(l=>(
                              <li key={l.text} className="text-white">
                                <Link href={l.url}>
                                  <a className="text-white" >{l.text}</a>
                                </Link>
                              </li>
                              ))
                              :null
                             }
                        </ul> */}
                     </div>
                      ))
                  }
                  {/* <div className="footer--links w-40">
                     <p className="text-white font-a fw-reg heading">Company</p>
                     <ul>
                         <li>
                             <Link></Link>
                         </li>
                     </ul> */}
                  </div>
                  {/* <div className="footer--links w-40">
                    <p className="text-white font-a fw-reg heading">Work with Us</p>
                  </div>
                  <div className="footer--links w-40">
                    <p className="text-white font-a fw-reg heading">Connect with Us</p>
                  </div> */}
              <div className="brand--details">
                  <p style={{
                      marginBottom:"0.5em",
                  }}><img src="/images/logo2.svg" alt="" /></p>
                  <p className="font-a text-white">Hardwork Made easy</p><br /><br />
                  <p style={{
                      color:"#ffff",
                      fontSize:"16px",
                      fontWeight:"200",
                      lineHeight:"18.2px"
                  }}>© 2021 Bubbooks, Inc</p>
              </div>
           </div>
        </footer>
    )
}

const style ={
    liststyle:{
        listStyle:'none',
        marginTop:"1.2em",
    }
}