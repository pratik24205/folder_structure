export default function ProductAndPricing() {
    return (
      <>
        <div className="pt-20"></div>
        <div className="pt-16"></div>
        <h1 className="text-3xl text-center font-bold mb-10">Program Pricing</h1>
        <div className="flex flex-col place-items-center">
          <div className="max-w-4xl px-6">
            {" "}
            {/* Added padding for edges */}
            <p className="mb-4 text-justify">
              {" "}
              {/* Added text-justify */}
              At Fundsresearch, we're committed to providing high-quality online
              internship experiences that equip participants with valuable skills
              and insights to succeed in their chosen fields. Our pricing is
              designed to offer competitive rates while ensuring the utmost value
              for our participants. Below, you'll find details on our pricing
              structure:
            </p>
            <div className="mb-8">
              <h2 className="text-xl text-center font-semibold my-5">
                Standard Pricing
              </h2>
              <ul className="list-disc ml-6 text-justify">
                {" "}
                {/* Added text-justify */}
                <li>
                  <strong>Duration:</strong> Our online internship program
                  typically runs for 45 Days.
                </li>
                <li>
                  <strong>Program Features:</strong> Participants will have access
                  to a comprehensive set of features including:
                  <ul className="list-disc ml-6">
                    <li>Interactive live sessions</li>
                    <li>Real-world projects and assignments</li>
                    <li>Mentorship from our experts</li>
                    <li>Certificate of completion</li>
                  </ul>
                </li>
                <li>
                  The standard price for our program is ₹3000 INR, it may vary
                  based on management decisions.
                </li>
              </ul>
            </div>
            <div className="my-10">
              <h2 className="text-xl font-semibold text-center my-5">
                Get Started Today!
              </h2>
              <p className="text-justify">
                {" "}
                {/* Added text-justify */}
                Don't miss out on this opportunity to enhance your skills and
                kickstart your career journey. Register now to secure your spot in
                our upcoming online internship program.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
  