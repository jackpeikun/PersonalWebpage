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
import mid from "../imgs/myPhotos/mid.JPG";
import left from "../imgs/myPhotos/left.JPG";
import leftUp from "../imgs/myPhotos/leftUp.JPG";
import leftDown from "../imgs/myPhotos/leftDown.JPG";
import right from "../imgs/myPhotos/right.JPG";
import rightUp from "../imgs/myPhotos/rightUp.JPG";
import rightDown from "../imgs/myPhotos/rightDown.JPG";
import down from "../imgs/myPhotos/down.JPG";
import up from "../imgs/myPhotos/up.JPG";

export default class HomePage extends React.Component {
  jokeTexts = [
    "Don't Click Please",
    "I told you! No More!",
    "Okay fine! Keep Clicking!"
  ];
  count = 0;

  constructor(props) {
    super(props);

    this.photoRef = React.createRef();
    this.state = {
      count: 0,
      jokeText: this.jokeTexts[this.count],
      mouseX: 0,
      mouseY: 0,
      photoX: 0,
      photoY: 0,
      currentImage: mid
    };
  }

  componentDidMount() {
    var x = this.photoRef.current.getBoundingClientRect().x;
    var y = this.photoRef.current.getBoundingClientRect().y;
    this.setState({
      photoX: x + 200 / 2,
      photoY: y + 266.11 / 2
    });
  }

  _onMouseMove(e) {
    this.setState({ mouseX: e.screenX, mouseY: e.screenY });
    this.setImage();
  }

  setImage = () => {
    const { photoX, photoY, mouseX, mouseY } = this.state;
    var image;
    if (mouseX === photoX) {
      if (mouseY > photoY) {
        image = down;
      } else {
        image = up;
      }
    } else if (mouseY === photoY) {
      if (mouseX > photoX) {
        image = right;
      } else {
        image = left;
      }
    } else if (mouseX > photoX) {
      if (mouseY > photoY) {
        image = rightDown;
      } else {
        image = rightUp;
      }
    } else {
      if (mouseY > photoY) {
        image = leftDown;
      } else {
        image = leftUp;
      }
    }
    this.setState({
      currentImage: image
    });
  };

  /**
   * Change image to myself in the middle
   */
  onClickImage = () => {
    this.setState({
      currentImage: this.myImages[0]
    });
  };

  /**
   * This controls to display next text
   */
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
      WebkitFilter: "blur(3.5px)",
      backgroundImage: `url("${Background}")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginTop: "-5px",
      marginLeft: "-5px"
    };

    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">
            <FontAwesomeIcon
              style={{
                marginLeft: "20px",
                marginRight: "20px"
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

        <div style={mainStyle}></div>

        <div className="container main-content">
          <div className="row">
            <div className="col-lg-10">
              <div>
                <h1>University of Toronto Alumni 2017, cGPA: 3.96</h1>
                <h1>Worked in IBM</h1>
                <h1>Working in Amazon</h1>
                <h1>Working on my Startup</h1>
              </div>
            </div>
            <div className="col-lg-2">
              <img
                ref={this.photoRef}
                onClick={this.onClickImage}
                className="creativeImage"
                src={this.state.currentImage}
                alt="Handsome me looking at you!"
              />
            </div>
          </div>
        </div>

        <BottomBanner />
      </div>
    );
  }
}
