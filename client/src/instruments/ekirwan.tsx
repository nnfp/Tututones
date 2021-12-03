// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useState } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import { createPublicKey } from 'crypto';
import { render } from '@testing-library/react';
import { setConstantValue } from 'typescript';
import { NavLink } from 'react-router-dom';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */
 const myList:any= [];
 
 
function handleClick(){
    console.log("clicked")
     
    
    

}
function getNote():string{
  if(myList.includes(0) && myList.includes(1) && myList.includes(2) && myList.includes(4) && myList.includes(5) && myList.includes(6)){
    console.log(myList)
    console.log("c4")
    return "C4";
  }
  else if(!myList.includes(0) && myList.includes(1) && myList.includes(2) && myList.includes(4) && myList.includes(5) && myList.includes(6)){
    console.log(myList)

    console.log("d4")
    return "D4";
  }
  else if(!myList.includes(0) && !myList.includes(1) && myList.includes(2) && myList.includes(4) && myList.includes(5) && myList.includes(6)){
    console.log(myList)

    console.log("e4")
    return "E4";
  }
  else if(!myList.includes(0) && !myList.includes(1) && !myList.includes(2) && myList.includes(4) && myList.includes(5) && myList.includes(6)){
    console.log(myList)

    console.log("f4")
        

    return "F4";
  }
  else if(!myList.includes(0) && !myList.includes(1) && !myList.includes(2) && !myList.includes(4) && myList.includes(5) && myList.includes(6)){
    console.log(myList)

    console.log("g4")
    return "G4";
    
  }
  else if(!myList.includes(0) && !myList.includes(1) && !myList.includes(2) && !myList.includes(4) && !myList.includes(5) && myList.includes(6)){
    console.log(myList)

    console.log("a4")
    return "A4";
  }
  else if(!myList.includes(0) && !myList.includes(1) && !myList.includes(2) && !myList.includes(4) && !myList.includes(5) && !myList.includes(6)){
    console.log(myList)

    console.log("b4")
    return "B4";
  }
  else {
    console.log(myList)

    console.log("c5")
    return "C5";
  }
}

interface PianoKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.MonoSynth; // Contains library code for making sound
  
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function PianoKey({
  note,
  synth,
  minor,
  index,
}: PianoKeyProps): JSX.Element {
    const [hasFocus, setFocus] = useState(false)
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => {
        if(myList.includes(index)){
            let myIndex= myList.indexOf(index)
            console.log("removed", index)
            myList.splice(myIndex,1)
            minor = false
        }
        else{
            myList.push(index)
            console.log("pushed", index)
            minor = true
        }
      }
      
        
    }//synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      //onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
          
        'bg-black black h3': minor, // minor keys are black
        'black bg-white h4': !minor, // major keys are white
      })}
      onClick={
      () => {
        if(hasFocus){
            setFocus(false)}
          else{
              setFocus(true)
          }  
          }
        }
    
      style={{
        // CSS
        top: 0,
        left: `${index * 4}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '3rem',
        marginLeft: minor ? '0.25rem' : 0,
        borderRadius:minor ? 50 : 50,
        height: '3rem',
        background: hasFocus ? "rgba(164, 233, 255, 0.5)" : "white"
        
        
      

      }}
     
    >
       
    </div>

  );
}

// eslint-disable-next-line

function PianoKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: PianoKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => {
        if(myList.includes(index)){
            let myIndex= myList.indexOf(index)
            myList.splice(myIndex,1)
            console.log("removed", index)
            minor = false
        }
        else{
            myList.push(index)
            console.log("pushed", index)
            minor = true
        }
      },

      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 4}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '3rem',
        marginLeft: minor ? '0.25rem' : 0,
        borderRadius:minor ? 50 : 50,
        height: '3rem',
      },
    },
    [],
  );
}

function PianoType({ title, onClick, active }: any): JSX.Element {

    
  return (
    <div
      onClick={handleClick}
      
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
        

      })}
    >
      {title}
    </div>
  );
}
function Flute({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };



  const oscillators: List<OscillatorType> = List([
    'sine',
   ]) as List<OscillatorType>;

   const monosynth = new Tone.MonoSynth({
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.2
    }
  }).toDestination();

  return (
    
    <div className={classNames('bg-black black h3')}
    style={{
      // CSS
      top: 0,
      left: '1rem',
      zIndex: -1,
      width: '40rem',
      marginLeft: '10rem',
      height: '5rem',
      
      
      
    }}
     
    onClick = {handleClick}
    
  
  >
      
      
      
      <div className="relative dib h4 w-100 ml4"
    
    
      >
        {Range(2, 3).map(octave =>
          keys.map(key => {
            const isMinor = myList.indexOf(key.idx) !== -1;
            const note = `${key.note}${octave}`;
            if (key.idx == 3){
              return 
            }
            return (
              <PianoKey
                key={note} //react key
                note={note}
                synth={monosynth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          }),
        )}
      </div>
      <div
    >
      </div>
      <div 
      onMouseDown = {() => monosynth?.triggerAttack(getNote())} // Question: what is `onMouseDown`?
    onMouseUp = {() => monosynth?.triggerRelease('+0.25')} 
      style={{
      // CSS
      
    width: 0,
	height: 0,
	borderTop: "2.5rem solid transparent",
	borderLeft: "5rem solid #555",
	borderBottom: "2.5rem solid transparent",
    }}>
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <PianoType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
      
    </div>
  );
}

export const ekirwanInstrument = new Instrument('ekirwan', Flute);
