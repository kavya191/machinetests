import React, { useState } from "react";
import "./Home.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container className="main_home">
      <div>
        <div className="d-flex justify-content-end text-white align-content-end pe-1 pt-3 me-4 fs-5">
          <IoClose
            className={`close-button ${isHovered ? "rotate" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div>
          <h2 className=" title_main d-flex justify-content-center align-items-center text-white p-5">
            Epic Games : An American Vedio Game <br /> And Software Developer
            And Publisher Based in Cary , North Carolina
          </h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Image className="main_image"
            src="https://i.pinimg.com/564x/24/2e/88/242e88d8ae61a33564c18215daf724bc.jpg"
          
          ></Image>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center mt-4 mb-4">
          <p className=" title1 d-flex justify-content-center align-items-center text-white  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            deleniti quaerat voluptatum sapiente sunt vitae voluptas totam!
            Iure, totam laborum non quae dolore atque quod dolor a corrupti
            eveniet magnam.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="visit_btn bg-white btn text-black  ">
            Visit Website
          </Button>
        </div>
        <div className=" card_image d-flex justify-content-center align-items-center gap-5 pt-5">
          <Card style={{ width: "18rem" }} className="bg-black">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/f1/ef/75/f1ef75a36f7aa8decff74629161da6c1.jpg"
            />
            <Card.Body>
              <p className="text-white ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bg-black">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/236x/4e/e5/04/4ee504f2ae1afcf7151c89bba2290767.jpg"
            />
            <Card.Body>
              <p className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bg-black">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/236x/c5/1c/3c/c51c3cd2456e7a2fb89303e763fdfe34.jpg"
            />
            <Card.Body>
              <p className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="title4">
          <h2 className="pt-5 d-flex justify-content-center align-items-center text-white">
            Our Contributions
          </h2>
          <p className=" d-flex justify-content-center align-items-center pt-1 text-white ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Molestias nam maiores eaque velit <br />{" "} atque dicta, ullam excepturi odit
            tempora sunt eum repellat ut quos ipsam. Possimus sed asperiores
            minus at?
          </p>
        </div>
        <div className="title_head">
        <Row className="title3 d-flex justify-content-center align-items-center text-white mt-5 ">
          <Col className="text-white ">
            <h1>5M</h1>
            <p>Daily User Engagement</p>
          </Col>
          <Col className="text-white">
            <h1>$500K</h1>
            <p >Revenue Surge for an Platform</p>
          </Col>
          <Col className="text-white">
            <h1>10X</h1>
            <p >
              ROAS roll on all our marketing Campaigns
            </p>
          </Col>
        </Row>
        </div>
        <div className="title5  d-flex justify-content-center align-items-center text-white">
          <h3 className="pt-5">
            Interested In Delving Deepeer Into The Project ?
          </h3>
        </div>
        <div className=" d-flex justify-content-center align-items-center text-white">
          <p className="pt-2">
            If You'd like to explore further details about our initiatives or
            any of our <br /> affiliated brands, don't hesitate to conect. You
            can reach out to us via <br /> email at hello@abc.com or give us a
            call at +91 480 20802730
          </p>
        </div>
        <div className="main_btns d-flex justify-content-center align-items-center gap-5 mt-5">
          <Button className=" main_btns1 bg-black btn text-white mt-4 p-3 ">
            Ring Us On Skype
          </Button>
          <Button className="bg-white btn text-black mt-4 p-3  ">
            Visit Contact Us
          </Button>
        </div>
        <div className="home_end d-flex justify-content-center align-items-center text-white mt-5 ">
          <p className="pt-5">
            <MdOutlineCopyright /> 2019-2023 abc Technology Solutions Pvt.Ltd.
            All rights reserved
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
