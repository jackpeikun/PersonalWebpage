import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

// custom component & css
import BottomBanner from "./BottomBanner";
import "./HomePage.css";

// file
import Background from "../imgs/coding_b&w.jpg";

export default class HomePage extends React.Component {
  jokeTexts = [
    "Don't Click Please",
    "I told you! No More!",
    "Okay fine! Keep Clicking!"
  ];
  count = 0;

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      jokeText: this.jokeTexts[this.count]
    };
  }

  // This controls to display next text
  clickedJokeText = () => {
    if (this.count + 1 >= this.jokeTexts.length) {
      this.count = 0;
    } else {
      this.count++;
    }

    this.setState({
      jokeText: this.jokeTexts[this.count]
    });
  };

  render() {
    let name = "Peikun Chen";
    let mainStyle = {
      width: "100%",
      height: "1800px",
      filter: "blue(3px)",
      "-webkit-filter": "blur(3.5px)",
      backgroundImage: `url("${Background}")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      "margin-top": "-5px",
      "margin-left": "-5px"
    };

    return (
      <div className="App">
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">
            <FontAwesomeIcon
              style={{
                "margin-left": "20px",
                "margin-right": "20px"
              }}
              icon={faLaptop}
            />{" "}
            {name}
          </Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey="#">
              <Nav.Item>
                <Nav.Link href="#" onClick={this.clickedJokeText}>
                  {this.state.jokeText}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <body style={mainStyle}></body>

        <div className="container main-content">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h1>University of Toronto Alumni 2017, cGPA: 3.96</h1>
                <h1>Worked in IBM</h1>
                <h1>Working in Amazon</h1>
                <h1>Working on my Startup</h1>
              </div>
            </div>
          </div>
        </div>

        <BottomBanner />
      </div>
    );
  }
}
