import './testimonial.css'
import ibm from '../assets/ibm.png'
import client from '../assets/client.png'
const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper">
      <div className="testimonial-section-top">
        <h1 className="primary-subheading">Testimonials</h1>
        <div className='testimonial-logo'>

        <img src={ibm} alt="ibm" />
        </div>
       
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <div className="testimonial-content">
    <img src={client} alt="ibm" />
    <button className="secondary-button">More Testimonials</button>
  </div>  
      </div>
    </div>
  );
};

export default Testimonial;