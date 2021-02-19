import { Row, Col } from "react-bootstrap";
import RellaxWrapper from "react-rellax-wrapper";
import { Document, Page } from "react-pdf";
import { useState } from "react";

const Resume = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <div className="home">
        <section id="first">
          <Row className="align-items-center">
            <Col>
              <RellaxWrapper percentage={0.5} speed={-8}>
                <div>
                  <Document file="resume.pdf">
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <p>
                    Page {pageNumber} of {numPages}
                  </p>
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
