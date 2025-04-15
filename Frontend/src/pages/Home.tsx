import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {companyLogo}  from "../ConpanyLogo.ts"
import heroImage from "../../public/ai-human.42e1479a.svg"
import { FaRobot, FaUsers, FaChartLine, FaPlug, FaComments, FaShieldAlt } from "react-icons/fa";
import FeatureCard from '../components/FeatureCard.tsx';
import TestimonialCard from '../components/TestimonialCard.tsx';






interface TestimonialProps {
    logo: string;
    company: string;
    feedback: string;
    name: string;
    position: string;
    image: string;
  }

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: Infinity,
        cssEase: "linear"
      };

      const features = [
        {
          icon: <FaRobot className="text-[#6C5CE7]" />,
          title: "AI Powered Collections",
          description: "Our AI algorithms determine the best time, channel, and approach to reach each customer based on their behavior patterns.",
          bgColor: "bg-[#F4F0FF]",
          borderColor: "border-[#6C5CE7]"
        },
        {
          icon: <FaUsers className="text-[#3B82F6]" />,
          title: "Customer-Centric Approach",
          description: "Personalized payment plans and communication that respects the customer's situation and preferences.",
          bgColor: "bg-[#EAF1FF]",
          borderColor: "border-[#3B82F6]"
        },
        {
          icon: <FaChartLine className="text-[#F59E0B]" />,
          title: "Advanced Analytics",
          description: "Gain actionable insights with real-time reporting and predictive analytics to optimize your debt recovery strategy.",
          bgColor: "bg-[#FEF9C3]",
          borderColor: "border-[#F59E0B]"
        },
        {
          icon: <FaPlug className="text-[#22C55E]" />,
          title: "Seamless Integration",
          description: "Easily integrate with your existing systems through our flexible API and pre-built connectors.",
          bgColor: "bg-[#E7F6EE]",
          borderColor: "border-[#22C55E]"
        },
        {
          icon: <FaComments className="text-[#6366F1]" />,
          title: "Omnichannel Communication",
          description: "Engage with customers through their preferred channels - email, SMS, voice, or messaging apps.",
          bgColor: "bg-[#E8EAFD]",
          borderColor: "border-[#6366F1]"
        },
        {
          icon: <FaShieldAlt className="text-[#F43F5E]" />,
          title: "Regulatory Compliance",
          description: "Stay compliant with automated processes that adhere to regional and international regulations.",
          bgColor: "bg-[#FDE2E4]",
          borderColor: "border-[#F43F5E]"
        }
      ];






      const testimonials: TestimonialProps[] = [
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/CASHe_logo.jpg", 
          company: "CASHe",
          feedback: "DPDzero has been able to actively support in CASHe's endeavor to rethink collections from the perspective of digital contactless lending.",
          name: "Yashoraj Tyagi",
          position: "CEO, CBO",
          image: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/KreditBee_logo.png", 
          company: "KreditBee",
          feedback: "Our objective was to ensure a seamless customer experience across all stages of the repayment process, a task that DPDzero is well-prepared for.",
          name: "Ajeet Kumar",
          position: "COO",
          image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Pocketly_logo.png", 
          company: "Pocketly",
          feedback: "Lack of visibility on borrower contactability was hindering our efforts to reach borrowers. DPDzero provided a way to track collections efficiently.",
          name: "Aarav Bhatia",
          position: "Co-founder",
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/PayMe_logo.png", 
          company: "PayMe",
          feedback: "DPDzero has Pan India Coverage for debt collection. They provide expertise in debt collection, compliance, and quality.",
          name: "Manav Munjal",
          position: "Co-founder",
          image: "https://randomuser.me/api/portraits/men/13.jpg"
        }
      ];






  return (
    <>
    // <div className="min-h-screen ">
    //   <Navbar />

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-12  md:py-32 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-blue-900 mb-6">
            We solve <span className="text-sky-600">delinquency</span> at scale
          </h1>
          <p className="text-xl md:text-2xl text-blue-500 mb-10">
            Full stack collections stack for lenders
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" text-white px-16 py-4 rounded-full font-semibold text-3xl shadow-lg bg-blue-600"
            
          >
            Request for a loan
          </motion.button>
          <div className="mt-6">
            <p className="text-2xl font-semibold text-purple-900">
              Leading lenders trust us
            </p>
          </div>

          <div className="slider-container mt-12 mb-1">
            <Slider {...settings}>
              {companyLogo.map((item) => (
                <div key={Math.random()}>
                  <img src={item.logo} className="h-32 w-60" />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center mt-16"
        >
          <ChevronDown size={32} className="mx-auto" />
        </motion.div> */}
      </header>

      {/* hero image section */}
      <section>
        <div>
          <img src={heroImage} alt="SVG as an image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto px-4 py-16">
        <div className="flex flex-col justify-center items-center gap-4 py-3">
          <p className="text-blue-950 text-4xl font-bold">AI + Human magic</p>
          <p className="text-lg text-gray-600 text-center">
            DPDzero combines AI, data analytics and human expertise to deliver a
            superior debt collection
            <p>experience with infinite scale and consistent performance</p>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section>
        <div className=" py-10">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold text-[#2D2D63]">
              The best lenders love us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
          <p className="text-5xl md:text-4xl font-bold text-[#2D2D63]">
            Take the first step <br /> to put collections on auto-pilot
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" text-white px-16 py-4 rounded-full font-semibold text-3xl shadow-lg bg-blue-600"
          >
            Request a Meeting
          </motion.button>
        </div>
      </section>

      {/* <footer>
        <Footer/>
      </footer> */}
     </div>
    </>
  );
}

export default Home











