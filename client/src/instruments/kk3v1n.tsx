// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import Background from "../img/violin.png";
import stringHolder from "../img/violinimg.png";

interface ViolinStringProps {
  note: string; // G,D,A,E
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function ViolinString({
  note,
  synth,
  index,
}: ViolinStringProps): JSX.Element {

  return (
    
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba absolute dim', {
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 13}rem`,
        width: "7rem",
        height: "20px",
        backgroundColor:"silver",
      }}
    ></div>
    
  );
}


function Violin({synth}: InstrumentProps): JSX.Element {

  //lowest to highest sound like a violin G,D,A,E

  const player1 = new Tone.Player("../violinStrings/aString.mp3").toDestination();
  const player2 = new Tone.Player("../violinStrings/dString.mp3").toDestination();
  const player3 = new Tone.Player("../violinStrings/gString.mp3").toDestination();
  const player4 = new Tone.Player("../violinStrings/eString.mp3").toDestination();

  const sample_soundA =() =>{
    player1.start();
    player1.stop("+0.5");
  } 

  const sample_soundD =() =>{
    player2.start();
    player2.stop("+0.5");
  } 
  const sample_soundG =() =>{
    player3.start();
    player3.stop("+0.5");
  } 
  const sample_soundE =() =>{
    player4.start();
    player4.stop("+0.5");
  } 
  
  const keys = List([
    { note: "C", idx: 0 },
    { note: 'C', idx: 0.5 },
    { note: 'C', idx: 1 },
    { note: 'C', idx: 1.5 },
  ]);

  const keys1 = List([
    { note: 'D', idx: 0 },
    { note: 'D', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'D', idx: 1.5 },
  ]);
  const keys2 = List([
    { note: 'A', idx: 0 },
    { note: 'A', idx: 0.5},
    { note: 'A', idx: 1 },
    { note: 'A', idx: 1.5 },
  ]);
  const keys3 = List([
    { note: 'B', idx: 0 },
    { note: 'B', idx: 0.5 },
    { note: 'B', idx: 1 },
    { note: 'B', idx: 1.5 },
  ]);


  return (
    <div className="pv4">
       
        <div
      className={classNames('ba pointer absolute', {
      })}
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
      className={classNames('ba absolute', {
      })}
      style={{
        // CSS
        pointerEvents: "none",
        width: '32rem',
        height: "200px",
        backgroundImage: `url("${stringHolder}")`,
        marginLeft:"44rem",
        backgroundSize:"cover",
      }}
    ></div>
    
      <div className=" relative dib h4 w-100 ml4" style={{
        marginTop: "1.4rem"}}>
        {Range(2, 4).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <ViolinString
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 2 + key.idx}
              />
            );
          }),
        )}
      </div>
    
      <div className=" relative dib h4 w-100 ml4" style={{
        marginTop: "-5.5rem"}}>
        {Range(2, 4).map(octave =>
          keys1.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <ViolinString
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 2 + key.idx}
              />
            );
          }),
        )}
      </div>
      
      <div className=" relative dib h4 w-100 ml4" style={{
        marginTop: "-5rem", marginLeft:"-176px"}}>
        {Range(3, 6).map(octave =>
          keys2.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <ViolinString
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 1 + key.idx}
              />
            );
          }),
        )}
      </div>

      <div className=" relative dib h4 w-100 ml4" style={{
        marginTop: "-5.5rem", marginLeft:"-384px"}}>
        {Range(4, 7).map(octave =>
          keys3.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <ViolinString
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 1 + key.idx}
              />
            );
          }),
        )}
      </div>

          <div className={classNames('ba absolute', {
      })} 
      style={{marginLeft:"59rem", marginTop:"-18rem", width:"40px"}}>
        <button style={{marginBottom:"5px"}} onClick={sample_soundG}>G String</button>
        <button style={{marginBottom:"8px"}} onClick={sample_soundD}>D String</button>
        <button style={{marginBottom:"7px"}} onClick={sample_soundA}>A String</button>
        <button onClick={sample_soundE}>E String</button>
        </div>

    </div>
  );
}

export const ViolinInstrument1 = new Instrument('Violin', Violin);