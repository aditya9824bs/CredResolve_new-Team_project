import aboutPageImage from '../../public/about-us-page.png'
const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white text-black">
      {/* Text Section */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-3xl md:text-5xl sm:text-center font-bold mb-6 mt-16">
          About <span className="text-blue-600">CredEasy</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          CredEasy is a smart and simple solution to manage your credit and
          finances. Our platform is built to empower users with insightful tools
          to track spending, understand credit, and stay on top of their
          financial health.
        </p>
        <p className="text-lg text-gray-700">
          We believe financial clarity should be accessible to everyone.
          Whether you're just starting out or looking to optimize your
          financial habits, CredEasy is here to help.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={aboutPageImage}
          alt="About CredEasy"
          className="w-[100%] max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default About;

