import { FaLinkedin,  FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../public/logoImage.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FF] text-[#2D2D63] py-10">
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-base">
        {/* Left Section - Logo & Social Links */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="DPDzero Logo" className="h-10 w-36" />
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-[#6C5CE7] text-xl">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#6C5CE7] text-xl">
              <FaXTwitter />
            </a>
          </div>
          <img src="/iso-certification.png" alt="ISO 27001 Certified" className="h-12" />
        </div>

        {/* Middle Section - HQ Info */}
        <div>
          <h3 className="font-semibold text-[#6C5CE7]">HQ</h3>
          <p>DPDZERO TECHNOLOGIES PRIVATE LIMITED</p>
          <p>Sarakki Industrial Layout, 3rd Phase, J. P. Nagar, Bengaluru 560078.</p>
          <div className="flex items-center text-[#6C5CE7] space-x-2 mt-2">
            <FaMapMarkerAlt />
            <a href="#" className="hover:underline">View on Map</a>
          </div>
          <p className="mt-2">Telephone: 080 4681 0971</p>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-[#6C5CE7]">COMPANY</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#6C5CE7]">LEGAL & COMPLIANCE</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Terms of service</a></li>
              <li><a href="#" className="hover:underline">Security policy</a></li>
              <li><a href="#" className="hover:underline">Grievance</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-600 mt-10 border-t pt-4">
        © 2025 DPDzero Technologies Pvt Ltd.
      </div>
    </footer>
  );
};

export default Footer;
