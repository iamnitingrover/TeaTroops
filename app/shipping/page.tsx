export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-6">Shipping Policy</h1>
      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">1. SHIPPING GUIDELINES AND TIMES</h2>
        <ul className="list-disc font-light pl-5 space-y-2">
          <li>For every order, we provide regular delivery services.</li>
          <li>Orders are shipped out in one to two business days after processing.</li>
          <li>Within India, the estimated delivery time is five to seven business days.</li>
          <li>After your order is placed, the Tea Troops customer service number will send you a confirmation message.</li>
          <li>Shipping Address: To prevent any delivery problems, please make sure the shipping address you enter at checkout is correct.</li>
          <li>Shipments that cannot be delivered or have the wrong shipping address are not our responsibility.</li>
        </ul>
      </section>
      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">2. Assistance with Shipping</h2>
        <p>
          Please email our customer support staff at <a href="mailto:help@teatroops.com" className="underline text-blue-600">help@teatroops.com</a> or message at tea 
          troops customer care number if you have any questions or need assistance with your 
          order or shipment.
        </p>
      </section>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">3. SHIPPING RATES</h2>
        <p>
          The weight of your order and your location are used to determine the shipping rates 
          and orders over a specific amount qualify for free shipping.
        </p>
      </section>
    </div>
  )
}