import CommunityDetailLayout from "../../../components/layout/community/CommunityDetail";

export default function CommunityAbout(){
    return(
       <CommunityDetailLayout pageName={"Community"} activepage={"about"}>
         <div className="community-about">
            <div className="w-80 w-md-100 curved bg-white container-small card">
                <h1 className="small-24 fw-reg">About this community</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorum quibusdam fuga eligendi suscipit quam qui non officiis, et sint perspiciatis autem accusantium in dolores obcaecati tempore odit earum. Tempora voluptatibus molestiae quisquam suscipit debitis mollitia, necessitatibus praesentium obcaecati repellendus.</p>
            </div><br /><br />
            <div className="w-80 w-md-100 bg-white container-small curved card">
                <br />
                <h1 className="small-24 fw-reg">Community Rules</h1><br />
                <ul className="community-rules">
                    <li className="small-14"><span>1</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="small-14"><span>2</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="small-14"><span>3</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="small-14"><span>4</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
            </div><br />
         </div>
       </CommunityDetailLayout>
    )
}