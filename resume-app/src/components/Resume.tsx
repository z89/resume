import { Row, Col } from "react-bootstrap";
import RellaxWrapper from "react-rellax-wrapper";

const Resume = () => {
  return (
    <>
      <div className="home">
        <section id="first">
          <Row className="align-items-center">
            <Col>
              <RellaxWrapper percentage={0.5} speed={-8}>
                <p>p</p>
              </RellaxWrapper>
              <RellaxWrapper percentage={0.5} speed={1}>
                <p>p</p>
              </RellaxWrapper>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default Resume;
