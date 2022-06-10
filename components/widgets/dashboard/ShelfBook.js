export default function ShelfBook(){
    return(
        <div className="bub__shelf-book bg-accent-1 w-100 w-md-60 w-sm-95">
            <p className="bub__book-index">1</p>
            <div className="bub__book-cover w-25">
                <img src="/images/book1.svg" alt="" />
            </div>
            <div className="bub__book-desc text-white w-45 w-md-100">
              <p className="small-16 text-white">Principles of Biochemistry</p>
              <p className="small-14 text-disabled">by Mariana P. Diego and Sebastain L. Mateo</p>
              <p className="text-disabled small-16">
                Unit Price :<span className="text-white"> 5,000</span>
              </p>
              <br />
              <p className="bub__book-text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis 
              </p><br />
              <p>
                <span className="text-disabled small-16">Course Title: </span>
                <span className="small-16">Biology</span>
              </p>
              <p>
                <span className="text-disabled small-16">Course Code: </span>
                <span className="small-16">FSB 101</span>
              </p><br />

              <div className="bub__book-action-mobile w-60">
              <button className="btn bg-theme text-white w-40">Buy</button>
            </div>

            </div>
            <div className="bub__book-action w-25">
              <button className="btn bg-theme text-white w-70">Buy</button>
            </div>
        </div>
    )
}