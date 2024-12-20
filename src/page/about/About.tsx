import "./About.scss";
import aboutBanner from "../../assets/images/aboutBanner.png";
import { Collapse } from '../../components/collapse/Collapse';
import aboutContent from '../../data/string.json';
import Banner from "../../components/banner/Banner"


export const About: React.FC = () => {
  return (
    <div className="About">
      <Banner imageSrc={aboutBanner} altText="Bannière forêt page about" className="aboutBanner"/>
      <div className='content'>
        {Object.entries(aboutContent).map(([title, content]) => (
          <Collapse
            key={title}
            title={title}
            content={content}
          />
        ))}
      </div>
    </div>
  )
}

