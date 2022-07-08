export default function SpeakersWidget():JSX.Element{
    return(
        <div className="event-cover w-100">
        <img src="/images/events/event3.svg" className="w-100 img-fluid" alt="" />
        <div className="img-overlay">
         <h1 className="font-a text-white w-100" style={{fontWeight:400,fontSize:"26px"}}>Explore the Metaverse World</h1><br />
          <div className="flex justify-content-space-between">
              <div className="w-30 speaker">
                  <img src="/images/events/profile1.svg" className="w-80 speaker-img" alt="" />
                  <h1 className="text-white w-100 speaker-name">
                      Kenny D.
                  </h1>
              </div>
              <div className="w-30 speaker">
                  <img src="/images/events/profile2.svg" className="w-80 speaker-img" alt="" />
                  <h1 className="text-white w-100 speaker-name">
                      Jackie J.
                  </h1>
              </div>
              <div className="w-30 speaker">
                  <img src="/images/events/profile3.svg" className="w-80 speaker-img" alt="" />
                  <h1 className="text-white w-100 speaker-name">
                      Laurel B.
                  </h1>

              </div>
          </div>
        </div>
        </div>
    )
}