import { Row, Col } from "react-bootstrap";
// import RellaxWrapper from "react-rellax-wrapper";
import { ReactComponent as ResumeSVG } from "../assests/svgs/resume.svg";

const Resume = () => {
  return (
    <>
      <div className="resume">
        <Row className="align-items-center">
          <Col>
            <div>
              <ResumeSVG />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Resume;
