import HomeLayout from '../components/layout/home/HomeLayout'
const faqs:{
    id:string | number
    question:string,
    answer:string
}[]= [
    {
        id:1,
        question:"How can I Order and have my books delivered to me if I am not in Lagos?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores consectetur quod quo molestiae repudiandae recusandae amet dolorem aperiam eos!"
    },
    {
        id:2,
        question:"Can we make purchase in wholesale quantities",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores consectetur quod quo molestiae repudiandae recusandae amet dolorem aperiam eos!"
    },
    {
        id:3,
        question:"I cannot find the book I am looking for",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores consectetur quod quo molestiae repudiandae recusandae amet dolorem aperiam eos!"
    },
    {
        id:4,
        question:"Do you sell second hand books",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores consectetur quod quo molestiae repudiandae recusandae amet dolorem aperiam eos!"
    }
]

function showAnswer(id){
   const content = document.querySelector(`#answer-${id}`) as HTMLDivElement

   if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
export default function FAQS(){
  return(
      <HomeLayout title={"FAQs"}>
        <div className='faqs container'>
           <header className="faq-header">
           <h1 className="font-a">FAQs</h1>
            <p className='text'>having any doubts and want to get clearified, Look through some of the questions our customers have asked over time</p>
           </header>

            <section className="faq-questions">
                {faqs.map(faq=>(
                      <div className="question" key={faq.id}>
                      <header>
                          <p>{faq.question}</p>
                          <span className="collapse-btn" onClick={()=>showAnswer(faq.id)} >
                              <i className="bi bi-plus-lg"></i>
                          </span>
                      </header>
                      <main className="answer" id={`answer-${faq.id}`}>
                          <hr />
                          <div className="content">
                          {faq.answer}
                          </div>
                      </main>
                  </div>
                ))}
            </section>
        </div>
      </HomeLayout>
  )
}