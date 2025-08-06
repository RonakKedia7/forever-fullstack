import { assets } from "./../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_2fr]  lg:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Company Overview */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Forever Logo" />
          <p className="w-full lg:w-2/3 text-gray-600">
            Forever is your go-to destination for stylish fashion, curated
            collections, and seamless shopping experiences. We’re committed to
            bringing you the best in quality, value, and service – every time
            you shop.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Shipping & Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Phone: +1 (212) 456-7890</li>
            <li>Email: support@forever.com</li>
            <li>Address: 123 Fashion Ave, New York, NY 10001</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center text-gray-600">
          &copy; {new Date().getFullYear()} Forever. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
