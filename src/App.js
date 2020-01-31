import React, { Component } from "react";
import "./App.css";
import Popover from "@material-ui/core/Popover";

const styles = {
  mainDiv: {
    display: "flex",
    flexDirection: "column"
  },
  tyre: {
    width: 20,
    borderRadius: 7,
    height: 55,
    backgroundColor: "darkslategray",
    backgroundImage: 'url(\n"back-pattern.png"\n)'
  },
  firstMainDiv: {
    height: 100,
    backgroundColor: "#efefef",
    width: 200,
    border: "1px solid lavender",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderTopRightRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2
  },
  secondMainDIv: {
    height: "375px",
    backgroundColor: "#efefef",
    width: "200px",
    marginTop: "20px",
    border: "1px solid lavender",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopRightRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 2
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichButton: null,
      no: null,
      open: false
    };
  }
  handleTyre = (whichButton, no, e) => {
    this.setState({ whichButton, no, open: e.currentTarget });
  };
  handleClose = () => {
    this.setState({ open: null });
  };

  render() {
    return (
      <div className="App">
        <div style={styles.mainDiv}>
          <div
            style={{
              height: 100,
              backgroundColor: "#efefef",
              width: 200,
              border: "1px solid lavender",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderTopRightRadius: "10px",
              padding: 2,
              paddingTop: 4
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 4
              }}
            >
              <img
                src="/steering-wheel.svg"
                style={{ width: 20, height: 20 }}
                alt=""
              />
            </div>
            <div
              style={{ height: 1, width: 200, backgroundColor: "chartreuse" }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 4
              }}
            >
              <div
                onClick={e => {
                  e.preventDefault();
                  this.handleTyre("left", 1, e);
                }}
              >
                <Tyre />
              </div>
              <div
                onClick={e => {
                  e.preventDefault();
                  this.handleTyre("right", 2, e);
                }}
              >
                <Tyre />
              </div>
            </div>
          </div>
          <div style={styles.secondMainDIv}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2
                }}
              >
                {/* First Row */}
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 3, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 4, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 5, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 6, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                {/* First Row End */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2
                }}
              >
                {/* Second Row */}
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 7, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 8, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 9, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 10, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                {/* Second Row */}
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2
                }}
              >
                {/* Third Row */}
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 11, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 12, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 13, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 14, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                {/* Third Row */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2
                }}
              >
                {/* 4TH Row */}
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 15, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 16, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 17, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 18, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                {/* 4TH Row */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2
                }}
              >
                {/* 5Th Row */}
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 19, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("left", 20, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 21, e);
                    }}
                  >
                    <Tyre />
                  </div>
                  <div
                    style={{ marginLeft: 3 }}
                    onClick={e => {
                      e.preventDefault();
                      this.handleTyre("right", 22, e);
                    }}
                  >
                    <Tyre />
                  </div>
                </div>
                {/* 5Th Row */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Popover
            open={Boolean(this.state.open)}
            anchorEl={this.state.open}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            PaperProps={{
              style: {
                backgroundColor: "darkseagreen",
                borderRadius: 20,
                padding: 20
              }
            }}
          >
            The content of the Popover.
            <p>Button Details</p>
            <p>Clicked On :tyre{this.state.no}</p>
          </Popover>
        </div>
      </div>
    );
  }
}

export default App;

class Tyre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={styles.tyre}></div>
      </div>
    );
  }
}
