export default function RefundPage() {
  return (
    <div className="font-light container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-6">Cancellation and Refund Policy</h1>
      
      <p className="font-light mb-4">
        We appreciate you selecting Tea Troops. You can contact our Customer Experience Team at <a href="mailto:help@teatroops.com" className="underline text-blue-600">help@teatroops.com</a> if you&apos;re not happy 
        with your order, and they will get back to you right away.
      </p>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Cancellations</h2>
        <ul className="font-light list-disc pl-5 space-y-2">
          <li>All cancellation requests must be initiated before the order is dispatched for shipping.</li>
          <li>All payemnts will be credited within 5-7 business days from cancellation.</li>
          <li>In case your order has already been shipped, it cannot be cancelled as our service partners charge us as soon as the pickup is completed.</li>
        </ul>
      </section>

        <section className="font-light mb-6">
            <h2 className="text-2xl font-light mb-3">Replacements</h2>
            <p className="font-light mb-2">
                A request for replacement must be initiated within a maximum of 5 days from the day of delivery.
            </p>
            <p className="font-light mb-2">
                Product replacements typically take 5-7 business days to be delivered to you. We strive to ensure a smooth and timely process.
            </p>
            <p className="font-light mb-2">
                Please attach a picture of the delivered order along with the invoice and send a mail to <a
                href="mailto:help@teatroops.com" className="underline text-blue-600">help@teatroops.com</a>.
                Our Audit team will review and send you a replacement, if applicable, in the following conditions:
            </p>
            <ul className="font-light list-disc pl-5 space-y-2">
                <li>Damaged/Incorrect Product Received</li>
                <li>Item missing from order</li>
                <li>Expired Product Received (Please attach a picture of the product showing the expiry date along with
                    the invoice)
                </li>
            </ul>
        </section>

        <section className="font-light mb-6">
            <h2 className="text-2xl font-light mb-3">Returns</h2>
            <p>
                Due to the perishable nature of Tea we do not accept returns on any products, instead we can replace the same if applicable.
        </p>
      </section>
    </div>
  )
}