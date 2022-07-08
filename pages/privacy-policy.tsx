import HomeLayout from "~/components/layout/home/HomeLayout";

export default function PrivacyPolicy():JSX.Element{
   return(
    <HomeLayout title={"Privacy Policy"}>
      <div className="container bub-mt-5 bub-mb-5">
        <p className="fw-reg text-accent-1 small-26 font-a text-center bub-mb-3">Privacy Policy</p>

       <div>
       <p className="fw-bold">What information do we collect?</p>
       We collect information from you when you fill out a form <br />
       When sending a message to us on our site, you may be asked to enter your: name and e-mail address. You may, however, visit our site anonymously.              
       </div><br />

       <div>
       <p className="fw-bold"> What do we use your information for?</p>
       Any of the information we collect from you may be used in one of the following ways: <br />
       - To process transactions <br />
       - send periodic emails. <br />
       - The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.

       </div><br />

      <div>
      <p className="fw-bold">How do we protect your information?</p>
      We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.

      </div><br />

      <div>
      <p className="fw-bold">Do we use cookies? </p>  
      Yes, we use cookies to record your preferences.
      </div><br />

      <div>
      <p className="fw-bold">Do we disclose any information to outside parties?</p>
      We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.

      </div><br />

      <div>
       <p className="fw-bold"> Online Privacy Policy Only</p>
      This online privacy policy applies only to information collected through our website and not to information collected offline.
      </div>
      </div>
    </HomeLayout>
   )
}