// 3rd party library imports
import { CircleDash16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const ekirwanVisualizer = new Visualizer(
  'ekirwan',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    const values = analyzer.getValue();
    
    p5.beginShape();
    
    let xval = 0;
    p5.colorMode('hsb')
    for (let i = 0; i < values.length; i++) {
      p5.noFill();
      
      i=i+15;
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;
     
      p5.strokeWeight(dim*0.01)

     if(i<50){p5.stroke(256/2-i, 256/2-i/2, 256/2-i/2)}
     else if(i<100){p5.stroke(0, 256/2-i/2, 256-i)}
     else if(i<150){p5.stroke(256-i, 256/2-i/2, 256/2+i/2)}
     else if(i<200){p5.stroke(256/2-i/2, 256/2-i/2, 256-i)}
     else{p5.stroke(255,255,255)}
      
     console.log(amplitude)
     
      p5.translate(width/3, height/2)
      for (let j = 0; j < 10; j ++) {
        p5.ellipse(0, 0 , height*amplitude/2, height*amplitude*2);
        
        p5.rotate((p5.PI)/6);
      }
      p5.translate(-width/3, -height/2)
      p5.fill(0, 256/2-i/2, 256-i)
      p5.circle(width/2, height/2, 100*amplitude,)
      xval=xval+20;
    }
    p5.endShape();
    
 

    
  },
);
