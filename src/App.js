import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from "react"
import PoseNet from "react-posenet"




function App() {

  const [posesString, setPosesString] = useState([]);

  var faceMovement;

  // var res = posesString

  if (posesString[0]) {
    // console.log(posesString[0]["keypoints"]["1"].part + "=  " + posesString[0]["keypoints"]["1"].position.y)
    // console.log(posesString[0]["keypoints"]["2"].part + "=  " + posesString[0]["keypoints"]["2"].position.y)

    // console.log(posesString[0]["keypoints"]["1"].part + "=  " + posesString[0]["keypoints"]["1"].score) //leftEye
    // console.log(posesString[0]["keypoints"]["2"].part + "=  " + posesString[0]["keypoints"]["2"].score) //rightEye



    if (posesString[0]["keypoints"]["1"].score > 0.97 && posesString[0]["keypoints"]["2"].score > 0.97) { // console.log("leftEye :", poses[0].pose['leftEye'].y, " \nRightEye : ", poses[0].pose['rightEye'].y)

      if (posesString[0]["keypoints"]["1"].position.y > posesString[0]["keypoints"]["2"].position.y) {

        // console.log("diff L = ", posesString[0]["keypoints"]["1"].position.y - posesString[0]["keypoints"]["2"].position.y)
        if (posesString[0]["keypoints"]["1"].position.y - posesString[0]["keypoints"]["2"].position.y > 20) {
          console.log("Left Side")
          faceMovement = "Left Side"

        }
      } else if (posesString[0]["keypoints"]["2"].score > posesString[0]["keypoints"]["1"].score) {

        // console.log("diff R = ", posesString[0]["keypoints"]["2"].score - posesString[0]["keypoints"]["1"].score)
        if (posesString[0]["keypoints"]["2"].score - posesString[0]["keypoints"]["1"].score > 0.0037) {
          console.log("Right Side")
          faceMovement = "Right Side"

        }
      }

    }



  }







  return (
    <div className="App">
      <PoseNet
        inferenceConfig={{ decodingMethod: "single-person" }}
        onEstimate={poses => {
          setPosesString((poses))
        }

        }
      />

      <p>FaceMovement  =  {faceMovement} <br /> </p>
      {/* <p>{posesString}</p> */}

    </div>
  );
}

export default App;
