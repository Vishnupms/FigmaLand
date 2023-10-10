
import shapes from '../assets/shapes.png'
import draw from '../assets/draw.png'
import brush from '../assets/brush.png'
import newsletter from '../assets/newsletter.png'
import VideoPlayer from './VideoPlayer';
import mac from '../assets/mac.png'
import './feature.css'

const Features = () => {

    const featureInfoData = [
        {
          image: shapes,
          title: "Pick Meals",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: draw,
          title: "Choose How Often",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: brush,
          title: "Fast Deliveries",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
      ];
      
      return (
        <>
        <div className="feature-section-wrapper">
          <div className="feature-section-top">
            <h1 className="primary-heading">Features</h1>
            <p className="primary-text">
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
          </div>
            <div className='mobile-screen'> 
        <VideoPlayer/>
          </div>
          <div className="feature-section-bottom">
            {featureInfoData.map((data) => (
              <div className="feature-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt=""  style={{ width: '100px', height: '100px'  }} />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
          <div className='video-screen'> 
        <VideoPlayer/>
          </div>
        <div className="bottom-container">
      <div className="bottom-banner-container">
        <div className="bottom-text-section">
          <h1 className="primary-heading" style={{textAlign:"start"}}>
            Fastest way to Organize 
          </h1>
          <p className="primary-text" style={{textAlign:"start"}}>
          Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <button className="secondary-button">
            Try For Free
          </button>
        </div>
        <div className="bottom-image-section">
          <img src={mac} alt=""  />
        </div>
    </div>
  </div>
  <div className='news-letter'>
        <div className="newsletter-image-section">
          <img src={newsletter} alt="" style={{width:"450px"}} />
        </div>
        <div className="newsletter-text-section">
          <h1 className="newsletter-heading">
           Lightning fast prototyping
          </h1>
          <p >
           Subscribe to our Newsletters
          </p>
          <p >
           Available exclusively on figmaland
          </p>
          <button className="secondary-button">
            Order Now 
          </button>
        </div>
      </div>
      </div>
   
      </>
      );
    };
    

export default Features