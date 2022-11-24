export default function Header({community}){
    return (
        <div className="likes-and-comments w-60 w-md-95 w-sm-100 flex">
        <p>
          <i className="bi bi-people-fill bub-text-accent"></i><br />
          <span className="small-14">{community.members} member{community.members > 1 && "s"}</span>
        </p>
        <p>
          <i className="bi bi-heart-fill bub-text-accent"></i><br />
          <span className="small-14">{community.likes} like{community.likes > 1 && "s"}</span>
        </p>
        <p>
          <i className="bi bi-chat-left-dots bub-text-accent"></i><br />
          <span className="small-14">2K comments</span>
        </p>
    </div>
    )
}