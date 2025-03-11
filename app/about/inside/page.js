import { Button, Col, Row } from "react-bootstrap";
const Page = () => {
  console.log("pAGE RENDER");

  return (
    <div>
      <Button>inside abut </Button>
      <Row className="bg-light justify-content-around">
        <Col className="bg-black" lg={4}>
          4
        </Col>
        <Col className="bg-danger" lg={4}>
          4
        </Col>
      </Row>
    </div>
  );
};
export default Page;
