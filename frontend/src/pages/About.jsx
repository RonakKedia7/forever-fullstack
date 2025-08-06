import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import { assets } from "./../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-16 items-center">
        <img
          className="w-full md:w-3/4 lg:max-w-[450px] object-cover"
          src={assets.about_img}
          alt="about img"
        />
        <div className="flex flex-col justify-center gap-6 lg:w-1/2 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a love for
            fashion. We're more than just an online clothing store — we're a
            community built around style, confidence, and self-expression.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            collection of fashion-forward pieces that cater to every mood,
            moment, and season. From trend-setting designs to timeless
            essentials, Forever is your one-stop destination for affordable,
            high-quality fashion.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers through style. We
            believe that fashion should be accessible to everyone, and we strive
            to deliver exceptional quality, seamless shopping experiences, and
            fresh inspiration with every visit. Whether you're dressing up for
            an occasion or curating your everyday look, Forever is here to help
            you express your unique self with confidence.
          </p>
        </div>
      </div>

      <div className="text-2xl sm:text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col lg:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 lg:px-16 py-8 sm:py-14 lg:py-20 flex flex-col gap-5">
          <p className="text-xl font-medium">Quality Assurance</p>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            highest standards of quality and craftsmanship. Every item in our
            catalog is handpicked for its durability, style, and comfort—so you
            can shop with complete confidence.
          </p>
        </div>

        <div className="border-l border-r lg:border-l-0 lg:border-r-0 lg:border-t lg:border-b border-gray-300 px-10 lg:px-16 py-8 sm:py-14 lg:py-20 flex flex-col gap-5">
          <p className="text-xl font-medium">Convenience</p>
          <p className="text-gray-600">
            With a seamless shopping experience from start to finish, Forever
            makes fashion accessible at your fingertips. Our user-friendly
            platform, flexible payment options, and fast delivery services
            ensure that looking great is always hassle-free.
          </p>
        </div>

        <div className="border border-gray-300 px-10 lg:px-16 py-8 sm:py-14 lg:py-20 flex flex-col gap-5">
          <p className="text-xl font-medium">Exceptional Customer Service</p>
          <p className="text-gray-600">
            At Forever, our customers come first. Our support team is here to
            assist you with quick responses, easy returns, and a commitment to
            solving every issue with care and efficiency. We’re not just selling
            fashion—we’re building lasting relationships.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
