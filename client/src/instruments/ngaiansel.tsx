import { Instrument } from "../Instruments";
import {useState} from "react";
import * as Tone from "tone";


function BorkSound(): JSX.Element {
  const [borks]: any = useState(
    new Tone.Sampler({
      urls: {
        C1: "../borks/gabe-bark_C.mp3",
        D1: "../borks/gabe-bark_D.mp3",
        E1: "../borks/gabe-bark_E.mp3",
        F1: "../borks/gabe-bark_F.mp3",
        G1: "../borks/gabe-bark_G.mp3",
        A1: "../borks/gabe-bark_A.mp3",
        B1: "../borks/gabe-bark_B.mp3"
      },
    }).toDestination()
  );
  
  const borkC = () => {
    borks.triggerAttackRelease(["C1"],0.3);
  };
  const borkD = () => {
    borks.triggerAttackRelease(["D1"],0.3);
  };
  const borkE = () => {
    borks.triggerAttackRelease(["E1"],0.3);
  };
  const borkF = () => {
    borks.triggerAttackRelease(["F1"],0.3);
  };
  const borkG = () => {
    borks.triggerAttackRelease(["G1"],0.3);
  };
  const borkA = () => {
    borks.triggerAttackRelease(["A1"],0.3);
  };
  const borkB = () => {
    borks.triggerAttackRelease(["B1"],0.3);
  };



  return (
    <div>
      <div style={{
      fontSize:`24px`, 
      marginTop:`3rem`,
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      outline: "none"
    }}>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkC}> C </button>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkD}> D </button>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkE}> E </button>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkF}> F </button>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkG}> G </button>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkA}> A </button>
        <button style={{width: `100px`, height: `100px`, background:`white`, border: `2px solid #000000`}}onClick={borkB}> B </button>
      </div>
    </div>
  );
}

export const borkInstrument = new Instrument('bork', BorkSound);