"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();
  const navigate = (path) => {
    Router.push(path);
  };
  return (
    <div className={styles.page}>
      <Row>
        <Col>
          <Button onClick={() => navigate("/about")}>Go to about page</Button>
          <Button className="ms-2" onClick={() => navigate("/contact")}>
            Go to contact page
          </Button>
          <Button className="ms-2" onClick={() => navigate("/about/inside")}>
            Go to inside about page
          </Button>
        </Col>
      </Row>
    </div>
  );
}
