export default function PrivacyPolicy() {
  return (
    <>
      <div className="p-8 bg-teal-400">
        <div className="pt-20"></div>
        <div className="pt-16"></div>
        <h1 className="text-center font-bold text-4xl mb-10">Privacy Policy</h1>

        <div className="flex flex-col place-content-center place-items-center">
          <div className="flex flex-col gap-2 max-w-2xl px-1">
            {" "}
            {/* Added horizontal padding */}
            <p className="text-justify">
              At FundsResearch, we are committed to protecting the privacy and
              security of your personal information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard the
              information you provide when participating in our online
              internship program.
            </p>
            <div className="pt-4"></div>
            <h2 className="font-bold text-xl">Personal Information</h2>
            <p className="text-justify">
              We may collect personal information such as your name, email
              address, contact number, date of birth, educational background,
              and other relevant details necessary for the internship program
              application and administration.
            </p>
            <div className="pt-4"></div>
            <h2 className="font-bold text-xl">Payment Information</h2>
            <p className="text-justify">
              If applicable, we may collect payment details as information or
              other financial data required for processing internship fees.
            </p>
            <div className="pt-4"></div>
            <h2 className="font-bold text-xl">Communication Data</h2>
            <p className="text-justify">
              We may collect information when you communicate with us via email,
              chat, or other means, including the content of your communications
              and any attachments.
            </p>
            <div className="pt-4"></div>
            <h2 className="font-bold text-xl">How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-justify">
              {" "}
              {/* Added indentation for list */}
              <li>
                <strong>Provide Services:</strong> We use the information
                collected to administer the internship program, process
                payments, communicate with participants, and deliver
                program-related materials.
              </li>
              <div className="pt-4"></div>
              <li>
                <strong>Improve Experience:</strong> We may analyze usage data
                to improve our internship program, website usability, and
                overall user experience.
              </li>
              <div className="pt-4"></div>
              <li>
                <strong>Service Providers:</strong> We may share your
                information with trusted third-party service providers who
                assist us in operating our internship program, processing
                payments, or delivering program-related services.
              </li>
              <div className="pt-4"></div>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of the transaction, subject to
                confidentiality agreements and applicable laws.
              </li>
              <div className="pt-4"></div>
            </ul>
            <h2 className="font-bold text-xl">Data Security</h2>
            <p className="text-justify">
              We implement industry-standard security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
            <div className="pt-4"></div>
            <h2 className="font-bold text-xl">Contact Us</h2>
            <p className="text-justify">
              If you have any questions, concerns, or inquiries regarding our
              Privacy Policy or the handling of your personal information,
              please don't hesitate to contact our Privacy Team at{" "}
              <a href="tel:+917276234533" className="text-blue-500 underline">
                (+91) 7276234533
              </a>
              . Your privacy and security are of utmost importance to us, and we
              are committed to addressing any issues or clarifications you may
              have.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
