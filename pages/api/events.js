// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const events = {
  all:[
      {
          id:1,
          name:"Chess Tournament",
          img:"/images/events/event1.svg",
          location:"Ebitimi Banigo Hall",
          information:"     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
          price:"5000",
          start_time:"2:00PM",
          end_time:"3:00PM",
          status:"ongoing",
          speakers:[
            {
              profile_img:"",
              name:"",
              title:"",
              info:"",
              social_links:""
            }
          ]
          

      },
      {
        id:2,
        name:"Sports Festival",
        img:"/images/events/event2.svg",
        location:"online",
        information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
        price:"5000",
        start_time:"2:00PM",
        end_time:"3:00PM",
        status:"ongoing",
        speakers:[
          {
            profile_img:"",
            name:"",
            title:"",
            info:"",
            social_links:""
          }
        ]
        

    },
    {
      id:3,
      name:"Explore The Metaverse",
      img:"/images/events/event3.svg",
      location:"online",
      information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
      price:"5000",
      start_time:"2:00PM",
      end_time:"3:00PM",
      status:"ongoing",
      speakers:[
        {
          profile_img:"",
          name:"",
          title:"",
          info:"",
          social_links:""
        }
      ]  },
  {
    id:4,
    name:"Devops Hackathon",
    img:"/images/events/event4.svg",
    location:"online",
    information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
    price:"5000",
    start_time:"2:00PM",
    end_time:"3:00PM",
    status:"upcoming",
    speakers:[
      {
        profile_img:"",
        name:"",
        info:"",
        title:"",
        social_links:""
      }
    ]
    

},
{
  id:5,
  name:"Book Launch: Principles Of General Chemistry",
  img:"/images/events/event5.svg",
  location:"online",
  information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
  price:"5000",
  start_time:"2:00PM",
  end_time:"3:00PM",
  status:"upcoming",
  speakers:[
    {
      profile_img:"",
      name:"",
      info:"",
      title:"",
      social_links:""
    }
  ]
  

},
{
  id:6,
  name:"Music Festival",
  img:"/images/events/event6.svg",
  location:"Uniport Arena",
  information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
  price:"5000",
  start_time:"2:00PM",
  end_time:"3:00PM",
  status:"upcoming",
  speakers:[
    {
      profile_img:"",
      name:"",
      info:"",
      title:"",
      social_links:""
    }
  ]
  

},
{
  id:7,
  name:"African Art",
  img:"/images/events/event7.svg",
  location:"online",
  information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
  price:"5000",
  start_time:"2:00PM",
  end_time:"3:00PM",
  status:"upcoming",
  speakers:[
    {
      profile_img:"",
      name:"",
      info:"",
      title:"",
      social_links:""
    }
  ]
  

},
{
  id:8,
  name:"Women in Tech Convention",
  img:"/images/events/event8.svg",
  location:"online",
  information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
  price:"5000",
  start_time:"2:00PM",
  end_time:"3:00PM",
  status:"upcoming",
  speakers:[
    {
      profile_img:"",
      name:"",
      info:"",
      title:"",
      social_links:""
    }
  ]
  

},
{
  id:9,
  name:"Designers and Developers Meet",
  img:"/images/events/event9.svg",
  location:"online",
  information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
  price:"5000",
  start_time:"2:00PM",
  end_time:"3:00PM",
  status:"upcoming",
  speakers:[
    {
      profile_img:"",
      name:"",
      info:"",
      title:"",
      social_links:""
    }
  ]
  

}
  ]
}
export default function handler(req, res) {
  res.status(200).json(events)
}
