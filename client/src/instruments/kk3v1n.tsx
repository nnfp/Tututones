// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';
import { useState } from 'react';

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
      className={classNames('ba pointer absolute dim', {
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
      className={classNames('ba pointer absolute dim', {
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
      className={classNames('ba absolute dim', {
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
    </div>
  );
}

export const ViolinInstrument1 = new Instrument('Violin2', Violin);