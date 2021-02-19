import { Row, Col } from "react-bootstrap";
import RellaxWrapper from "react-rellax-wrapper";

const Resume = () => {
  return (
    <>
      <div className="home">
        <section id="first">
          <Row className="align-items-center">
            <Col>
              <RellaxWrapper percentage={0.5} speed={-7}>
                <h1>I am really fast!</h1>
              </RellaxWrapper>
              <RellaxWrapper percentage={0.5} speed={-4}>
                <div>
                  <p>I am really slow</p>
                </div>
              </RellaxWrapper>
            </Col>
          </Row>
        </section>
      </div>
      <div className="info">
        <section id="second">
          <Row className="align-items-center">
            <Col>
              <RellaxWrapper percentage={0.2} speed={5}>
                <h1>I am really fast!</h1>
              </RellaxWrapper>
              <RellaxWrapper speed={2}>
                <div>
                  <p>I am really slow</p>
                </div>
              </RellaxWrapper>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default Resume;
