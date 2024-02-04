import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";

interface PostProps {
  imgUrl: string;
  title: string;
  description: string;
}

export function PostDetails({ title, description, imgUrl }: PostProps) {
  return (
    <>
      <Card style={{ backgroundColor: "black", color: "#fffbf1" }}>
        <CardBody>
          <Row>
            <Col>
              <img
                alt="Sample"
                src={imgUrl}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Col>
            <Col>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardText>{description}</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
