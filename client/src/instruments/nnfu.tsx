import { Instrument } from "../Instruments";
import { useState } from "react/";
import * as Tone from "tone";

function MeepSound(): JSX.Element {
  const [meeps]: any = useState(
    new Tone.Sampler({
      urls: {
        C1: "../meeps/Bard.meepSpawn01.ogg",
        D1: "../meeps/Bard.meepSpawn02.ogg",
        E1: "../meeps/Bard.meepSpawn03.ogg",
        F1: "../meeps/Bard.meepSpawn04.ogg",
        G1: "../meeps/Bard.meepSpawn05.ogg",
        A1: "../meeps/Bard.meepSpawn06.ogg",
        B1: "../meeps/Bard.meepSpawn07.ogg",
        D2: "../meeps/Bard.meepSpawn08.ogg",
        E2: "../meeps/Bard.meepSpawn09.ogg"
      },
    }).toDestination()
  );
  
  const meeps_sound = () => {
    meeps.triggerAttackRelease(["C1"],3.0);
  };
  const meeps_sound1 = () => {
    meeps.triggerAttackRelease(["D1"],3.0);
  };
  const meeps_sound2 = () => {
    meeps.triggerAttackRelease(["E1"],3.0);
  };
  const meeps_sound3 = () => {
    meeps.triggerAttackRelease(["F1"],3.0);
  };
  const meeps_sound4 = () => {
    meeps.triggerAttackRelease(["G1"],3.0);
  };
  const meeps_sound5 = () => {
    meeps.triggerAttackRelease(["A1"],3.0);
  };
  const meeps_sound6 = () => {
    meeps.triggerAttackRelease(["B1"],3.0);
  };
  const meeps_sound7 = () => {
    meeps.triggerAttackRelease(["D2"],3.0);
  };
  const meeps_sound8 = () => {
    meeps.triggerAttackRelease(["E2"],3.0);
  };

  return (
    <div>
      <div style={{
      marginLeft:"300px",
      outline: "none"
    }}>
      <button style={{
        width:"100px", outline: "none"}}><img src="https://i.imgur.com/o3AjnnJ.png" alt="base" onClick={meeps_sound} /></button>
      <button style={{width:"100px"}}><img src="https://i.imgur.com/uJZL5eX.png" alt="base" onClick={meeps_sound1} /></button>
      <button style={{width:"100px"}}><img src="https://i.imgur.com/EizO6Vh.png" alt="base" onClick={meeps_sound2} /></button>
      <button style={{width:"100px"}}><img src="https://i.imgur.com/Oek4j1B.png" alt="base" onClick={meeps_sound3} /></button>
      <button style={{width:"100px"}}><img src="https://i.imgur.com/jlFML2f.png" alt="base" onClick={meeps_sound4} /></button>
      </div>
      <div style={{
      marginLeft:"350px"
    }}>      <button style={{width:"100px"}}><img src="https://i.imgur.com/HdMCqzw.png" alt="base" onClick={meeps_sound5} /></button>
    <button style={{width:"100px"}}><img src="https://i.imgur.com/70WvKf1.png" alt="base" onClick={meeps_sound6} /></button>
    <button style={{width:"100px"}}><img src="https://i.imgur.com/Mm2jaJV.png" alt="base" onClick={meeps_sound7} /></button>
    <button style={{width:"100px"}}><img src="https://i.imgur.com/eWJfgdX.png" alt="base" onClick={meeps_sound8} /></button></div>
      </div>
  );
}

export const nnfuInstrument = new Instrument('nnfu', MeepSound);