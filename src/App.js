import React, { Component } from "react";
import "./App.css";
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
function App() {
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
            style={{ display: "flex", justifyContent: "flex-end", padding: 4 }}
          >
            <img src="/steering-wheel.svg" style={{ width: 20, height: 20 }} />
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
            <Tyre />
            <Tyre />
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
                <Tyre />
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Tyre />
                <div style={{ marginLeft: 3 }}>
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
                <Tyre />
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Tyre />
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              {/* Second Row */}
            </div>
          </div>
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2
              }}
            >
              {/* Third Row */}
              <div style={{ display: "flex" }}>
                <Tyre />
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Tyre />{" "}
                <div style={{ marginLeft: 3 }}>
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
                <Tyre />
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Tyre />{" "}
                <div style={{ marginLeft: 3 }}>
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
                <Tyre />
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Tyre />{" "}
                <div style={{ marginLeft: 3 }}>
                  <Tyre />
                </div>
              </div>
              {/* 5Th Row */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
