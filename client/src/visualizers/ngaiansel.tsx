// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
import { pathToFileURL } from 'url';

// project imports
import { Visualizer } from '../Visualizers';


export const AnselVisualizer = new Visualizer(
  'wacky and wild',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth/2.5;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim*0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    
    p5.translate(width, height/2);
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const r = p5.map(amplitude*40, -2, 2, 150, 350)
        const x = r * p5.sin(i)/2;
        const y = r * p5.cos(i)/2;
        // Place vertex
        p5.vertex(x, y);

      }
    p5.endShape();
  },
);
