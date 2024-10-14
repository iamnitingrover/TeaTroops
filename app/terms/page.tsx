export default function TermsPage() {
  return (
    <div className="container font-light mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-6">Terms and Conditions</h1>
      
      <p className="font-light mb-4">
        These terms and conditions are applicable to all products we sell on our website, <a href="https://www.teatroops.com" className="underline text-blue-600">www.teatroops.com</a>. 
        Note that by using any of our products, you consent to be bound by these terms and conditions.
      </p>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Overview</h2>
        <p>
          Pahari Brothers runs the website <a href="https://www.teatroops.com" className="underline text-blue-600">www.teatroops.com</a>. Its registered office is located at C-54, 
          Khasra no 17/3/3, Gali Number 7, Ambedkar Vihar, Gokalpuri, North East Delhi, Delhi-
          110094. We are an Indian company with its headquarters in Delhi. You, the user, are granted 
          access to this website and all of its content, tools, and services by Pahari Brothers, subject to 
          your acceptance of all of the notices, terms, and conditions found here.
        </p>
      </section>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Ordering and Dispatch</h2>
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

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Prices</h2>
        <p>
        The prices on our website are all subject to change, but they won&apos;t have an impact on orders that we have already accepted. Shipping and VAT are not included in the prices listed on our website; these will be added at the time of checkout. Our website lists the carefully calculated prices of our products. But if the goods you bought has been priced wrongly owing to inadvertent mistakes, we will let you know by phone or email before we accept your order so you can get the proper information. At that point, you can choose to pay the difference or cancel your order if you&apos;d like. Prior to dispatch, all payments must be paid using UPI.
        </p>
      </section>
      
      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Delivery</h2>
        <p>
        All retail orders received by 12 p.m. IST or earlier are typically shipped the following business day. Order processing; however, may take up to five business days in unusual cases.
        After payment has been cleared, we try to ship out the products within 24 hours, and we strive to deliver all orders to consumers in India in 5-7 working days. If a product isn&apos;t available, we&apos;ll let you know and ship it as soon as it becomes available again.
        You can find out about delivery costs and details on our Shipping & Delivery Page.
        </p>
      </section>
      
      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Shelf Life and Storage Conditions</h2>
        <p>
          The tea we offer is good for 24 months after purchase. We are able to achieve such a long shelf life because of our superior vacuum technique and packing materials. Please take into account the storage conditions for tea in order to fully appreciate its extended shelf life. Tea should be kept in airtight containers away from heat, moisture, and odors from food. It needs to be kept somewhere dry and cool. Since freezing can shorten the tea&apos;s shelf life, we do not advise it.
        </p>
      </section>

      {/* Add more sections as needed */}
      
      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Variations in the Terms and Conditions</h2>
        <p>
          We retain the right, at any time, to modify the terms and conditions listed above in order to 
          reflect changes in the law or in our policies and capabilities.
        </p>
      </section>
    </div>
  )
}