import Title from "../components/Title";
import { assets } from "./../assets/assets";
import NewsletterBox from "./../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contact img"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Out Store</p>
          <p className="text-gray-500">
            123 Fashion Ave,
            <br /> New York, NY 10001
          </p>
          <p className="text-gray-500">
            Tel: +1 (212) 456-7890 <br /> Email: support@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-100">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
