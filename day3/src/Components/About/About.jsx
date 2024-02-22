import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about_women.png";
import bg from "../../assets/about_blob.png";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={bg} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Yoga: Transforming Lives, Mind, Body.       </h1>
        <p className="primary-text">
        Our purpose is to bring the transformative power of meditation to everyone, regardless of age, background, or proficiency. We strive for a world where individuals experience mental and emotional equilibrium, fostering healthier and more harmonious communities. Join us on the journey to a calmer, more balanced life.        </p>
      </div>
    </div>
  );
};

export default About;
