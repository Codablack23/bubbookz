export default function BookOrder(){
    return(
        <div className="book-order min-vh-30 flex flex-wrap align-items-flex-start">
        <div className="cover w-30 vh-25 w-sm-90 m-sm-auto">
          <img src="/images/book2.svg" alt="" className="img-fluid br vh-25" />
        </div>
        <div className="w-55 w-sm-90 m-sm-auto"
        style={{margin:'0.8em 0 0.8em 0.5em'}}
        >
          <p className="small-16">Principles Of Biochemistry</p>
          <p className="text-disabled small-14">By Mariana Diego</p>
          <div className="flex align-items-center justify-content-space-between"
          style={{
           marginTop:'15vh'                          
          }}
          >
           <p className="small-14">Quantity: 2</p>
           <p className="small-14">Price:N10,000</p>
         </div>
        </div>

      </div>
    )
}