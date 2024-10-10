export default function TermsPage() {
  return (
    <div className="container font-light mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-6">Terms and Conditions</h1>
      
      <p className="font-light mb-4">
        These terms and conditions are applicable to all products we sell on our website, 
        <a href="https://www.teatroops.com" className="underline text-blue-600">www.teatroops.com</a>. Note that by using any of our products, you consent to be bound by 
        these terms and conditions.
      </p>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">OVERVIEW</h2>
        <p>
          Pahari Brothers runs the website <a href="https://www.teatroops.com" className="underline text-blue-600">www.teatroops.com</a>. Its registered office is located at C-54, 
          Khasra no 17/3/3, Gali Number 7, Ambedkar Vihar, Gokalpuri, North East Delhi, Delhi-
          110094. We are an Indian company with its headquarters in Delhi. You, the user, are granted 
          access to this website and all of its content, tools, and services by Pahari Brothers, subject to 
          your acceptance of all of the notices, terms, and conditions found here.
        </p>
      </section>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">ORDERING AND DISPATCH</h2>
        <p>
          You have the option to place product orders over the phone or through our website. We will 
          give you an order confirmation as soon as we receive your order, which is our way of saying 
          that we have accepted it.
        </p>
        <p className="font-light mt-2">
          As soon as we receive your money, we will send you an email or message to confirm that 
          your order has been shipped and that your payment has been received. We frequently buy in 
          bulk to guarantee the highest level of freshness and quality. We ask that you give us 
          sufficient notice when placing orders because the dispatch for these products may take up to 
          three to five working days.
        </p>
        <p className="font-light mt-2">
          If a product is unavailable, we reserve the right to cancel any purchase and return your money 
          at any point before shipping.
        </p>
      </section>

      {/* Add more sections as needed */}

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">VARIATIONS IN THE TERMS AND CONDITIONS</h2>
        <p>
          We retain the right, at any time, to modify the terms and conditions listed above in order to 
          reflect changes in the law or in our policies and capabilities.
        </p>
      </section>
    </div>
  )
}