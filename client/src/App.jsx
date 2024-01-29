import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from './components/SocialLinks';
// import Services from './components/Services';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonial from './components/Testimonial';
import Skills from "./components/Skills";
import ContactUs from './components/ContactUs';

function App() {
  const testimonials = [
    {
      id: 1,
      client: "Abhimanyu Chavan",
      feedback: "I loved working with Umer. This was my third project and I would love to work with him again in the coming future. I would recommend him to all clients who want to get good work and within strict timelines."
    },
    {
      id: 2,
      client: "Abhimanyu Chavan",
      feedback: "This is my second project with Umer and I am impressed again by his work and quick delivery. He is eager to learn and ensures the work is perfect and as per the requirement. I am already planning to work with him again soon."
    },
    {
      id: 3,
      client: "Abhimanyu Chavan",
      feedback: "I am satisfied with the job done by Umer. He is proactive and is willing to work and rework if the job is not done as per the requirements. He is also available frequently and replies fast. I would certainly work with him again on other projects."
    },
  ];

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <SocialLinks/>
      <Testimonial testimonials={testimonials} autoSlide autoSlideInterval={4500} />
      <Skills/>
      <ContactUs/>
    </>
  )
}

export default App
