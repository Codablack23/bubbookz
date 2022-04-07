import Head from "next/head";

export default function FormContainer({title,children,extraClass}){
  return(
      <>
      <Head>
          <title>{title}</title>
      </Head>
      <div className={`form--container ${extraClass}`}>
        {children}
      </div>
      </>
  )
}