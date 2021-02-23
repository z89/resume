import { Row, Col } from "react-bootstrap";
// import RellaxWrapper from "react-rellax-wrapper";
import { ReactComponent as ResumeSVG } from "../assests/svgs/resume.svg";

interface PortfolioProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactElement<any>;
}
//  <div>
//    <ResumeSVG style={Nstyle} className={className} />
//  </div>;

const Portfolio = ({ style, className }: PortfolioProps) => {
  const Nstyle: React.CSSProperties = { ...style };

  return (
    <>
      <div className="portfolio">
        <div className="page align-items-center">
          <Row>
            <Col>
              <h1>
                this is an example sentence to test wrapping of the column
                container inside a row inside the page class
              </h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
