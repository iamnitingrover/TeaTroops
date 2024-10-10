export default function PrivacyPage() {
  return (
    <div className="container font-light mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-6">Privacy Policy</h1>
      
      <p className="font-light mb-4">
        Tea Troops places the utmost attention on our guest&apos;s privacy and safety. This policy outlines 
        the precautions we take to protect and securely handle your personal data whenever you visit 
        or interact with our website or staff. First and foremost, without your consent, we never rent, 
        sell, or trade any of your personal information—such as name, address, phone number, credit 
        card information, etc.—to outside parties.
      </p>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">Information Gathered from You</h2>
        <p>
          Information that you submit by completing forms on our website, www.teatroops.com, such 
          as those for purchases or registration, may be gathered and processed by us about you. When 
          you get in touch with us, the information you provide may be kept on file.
        </p>
        <ul className="font-light list-disc pl-5 mt-2">
          <li>Specifics of the purchases you make on our website.</li>
          <li>Information about your visits to our website, such as traffic, location, weblog, and other 
          communication data; including the resources you access and other information needed for our 
          own invoicing purposes.</li>
        </ul>
      </section>

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">IP addresses and cookies</h2>
        <ul className="list-disc font-light pl-5 space-y-2">
          <li>We might collect information about your computer for our services and our advertisers, 
          such as your IP address, operating system, and browser type. This information does not 
          personally identify any individual; rather, it is statistical and aggregate data on your browsing 
          habits and behaviors.</li>
          <li>Additionally, we might use a cookie file that is kept on your computer&apos;s hard drive to gather 
          data about how you generally use the Internet. They support our efforts to make our website 
          better and provide you with more individualized service.</li>
        </ul>
      </section>

      {/* Add more sections as needed */}

      <section className="font-light mb-6">
        <h2 className="text-2xl font-light mb-3">COMMUNICATION</h2>
        <p>
          We encourage your feedback and concerns regarding this privacy policy, which can be sent 
          to <a href="mailto:help@teatroops.com" className="underline text-blue-600">help@teatroops.com</a>.
        </p>
      </section>
    </div>
  )
}