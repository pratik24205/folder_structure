export default function Footer() {
    return (
      <div className="bg-gradient-to-r from-primary-50 to-[#EAF5F1] px-16 py-20">
        {/* Root container */}
        <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap md:gap-6">
          {/* First Section Container */}
          <div className="md:mt-6">
            <div className="flex items-left gap-x-5 mb-10 md:mb-0">
              <div className="flex flex-col">
                <h1 className="mt-2 font-semibold"></h1>
              </div>
            </div>
          </div>
          {/* Second Section Container */}
          <div className="flex flex-col mt-11">
            <a
              href="/privacy-policy"
              rel="noopener noreferrer"
              className="footer-link "
            >
              Privacy Policy
            </a>
            <div className="pt-4"></div>
            <a>
              East street galleria, East<p> street road, Camp,</p>
              Pune -411001
            </a>
            <a
              href="/about-us"
              rel="noopener noreferrer"
              className="footer-link font-normal mt-3"
            >
              About us
            </a>
            <div className="pt-1"></div>
            {/* Help and Support with Phone Number */}
  
            <a href="tel:+917385234536" className="footer-link font-normal mt-3">
              Help and Support - Call Us: +917385234536
            </a>
            <a href="tel:+918421034535" className="footer-link font-normal mt-3">
              {" "}
              +918421034535
            </a>
            <a href="tel:+918237634532" className="footer-link font-normal mt-3">
              {" "}
              +918237634532
            </a>
            <a href="tel:+918446874534" className="footer-link font-normal mt-3">
              {" "}
              +918446874534
            </a>
          </div>
  
          {/* Third Section Container */}
          <div className="flex flex-col mt-11">
            <a
              href="/publication"
              rel="noopener noreferrer"
              className="footer-link "
            >
              Publication
            </a>
            <div className="pt-4"></div>
            <a
              href="/contact-us"
              rel="noopener noreferrer"
              className="footer-link "
            >
              ContactUs
            </a>
            <div className="pt-4"></div>
            <a href="/login" rel="noopener noreferrer" className="footer-link ">
              Login
            </a>
            <div className="pt-14"></div>
            <a>Internships at Fundsresearch</a>
          </div>
          {/* Fourth Section Container */}
          <div className="flex flex-col mt-11">
            <a>Follow us on</a>
            {/* SOCIAL LINKS */}
            <div className="flex gap-6 mt-6"></div>
          </div>
        </div>
      </div>
    )
  }
  