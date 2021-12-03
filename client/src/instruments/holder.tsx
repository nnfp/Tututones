import { Instrument } from "../Instruments";
import { useState } from "react/";
import * as Tone from "tone";

import Background from "../img/violin.png";
import stringHolder from "../img/violinimg.png";


function Test(): JSX.Element {
  const [sample]: any = useState(
    new Tone.Sampler({
      urls: {
        G1: "gString.mp3",
        D1: "dString.mp3",
        A1: "aString.mp3",
        E1: "eString.mp3",

      },
      baseUrl: "http://localhost:3000/",
    }).toDestination()
  );
  
  const sample_sound = () => {
    sample.triggerAttackRelease(["G1"],0.55);
  };
  const sample_sound1 = () => {
    sample.triggerAttackRelease(["D1"],0.55);
  };
  const sample_sound2 = () => {
    sample.triggerAttackRelease(["A1"],0.55);
  };
  const sample_sound3 = () => {
    sample.triggerAttackRelease(["E1"],0.55);
  };

  const sample_sound4 = () => {
    sample.triggerAttackRelease(["G2"],0.55);
  };
  const sample_sound5 = () => {
    sample.triggerAttackRelease(["D2"],0.55);
  };
  const sample_sound6 = () => {
    sample.triggerAttackRelease(["A2"],0.55);
  };
  const sample_sound7 = () => {
    sample.triggerAttackRelease(["E2"],0.55);
  };

  return (
    <div>
      <div
      style={{
        // CSS
        pointerEvents: "none",
        width: '72rem',
        height: "200px",
        backgroundImage: `url("${Background}")`,
        backgroundPositionX:"",
        backgroundPositionY: "-100px",
        backgroundSize: "cover",
        marginLeft:"2rem",
      }}
    ></div>
    <div
      style={{
        // CSS
        pointerEvents: "none",
        width: '32rem',
        height: "200px",
        backgroundImage: `url("${stringHolder}")`,
        marginLeft:"44rem",
        backgroundSize:"cover",
        marginTop:"-12.5rem",
      }}
    ></div>
      <button onClick={sample_sound} style={{width:"50px"}}>G</button>
      <button onClick={sample_sound1} style={{width:"50px"}}>D</button>
      <button onClick={sample_sound2} style={{width:"50px"}}>A</button>
      <button onClick={sample_sound3} style={{width:"50px"}}>E</button>
      <button onClick={sample_sound4} style={{width:"50px"}}>G2</button>
      <button onClick={sample_sound5} style={{width:"50px"}}>D2</button>
      <button onClick={sample_sound6} style={{width:"50px"}}>A2</button>
      <button onClick={sample_sound7} style={{width:"50px"}}>E2</button>
    </div>
  );
}

export const ViolinInstrument = new Instrument('Violin1', Test);