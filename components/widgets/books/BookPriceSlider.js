export default function BookPriceSlider(){
    return(
        <div className="w-100 card book-price-slider min-vh-30">
        <header className="flex align-items-center justify-content-space-between">
        <p className="small-20 fw-red">Price (N)</p>
        <p className="text-theme">Apply</p>
        </header><br />
          <input type="range" className="price-slider w-100" /><br /><br />
          <div className="flex align-items-center mxw-100">
              <div className="price-range">
                <input type="text" name="" id="" />
              </div>
              <p><i className="bi bi-dash-lg"></i></p>
              <div className="price-range">
                <input type="text" name="" id="" />
              </div>

          </div>
        </div>
    )
}