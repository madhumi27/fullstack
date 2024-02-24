// import Explore from "../../Assets/images/explore-courses-image.png";
// import Submit from "../../Assets/images/choose-image.png";
// import Yoga from "../../Assets/images/meditate-image.png";

const Work = () => {
  const workInfoData = [
    {
      
      title: "Explore Courses",
      text: "Explore tons of courses available from our application that suits your needs.",
    },
    {
      
      title: "Submit application",
      text: "Submit an application  which get processed faster than your coffee.",
    },
    {
     
      title: "Yoga",
      text: "Let our experts guided you through the course and let your yoga may refine you.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
