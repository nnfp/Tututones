// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const nnfpVisualizer = new Visualizer(
  'nnfp',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth / 2.5;
    const height = window.innerHeight / 2;

    p5.background(0, 0, 0, 255);
    p5.translate(width, height/2);
    p5.stroke(254, 253, 194, 255);
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      let angle = 2 * (Math.PI) / i;
      let halfAngle = angle / 2.0;
      let center = p5.map(i, 0, values.length, 0, 100);
      let star = p5.map(amplitude, 0,1,30,300);
      const x = p5.cos(i);
      const y = p5.sin(i);
      let sx = x + p5.cos(i) * star;
      let sy = y + p5.sin(i) * star;
      p5.vertex(sx, sy);
      sx = x + p5.cos(i + halfAngle) * center;
      sy = y + p5.sin(i + halfAngle) * center;
      p5.vertex(x, y);
      // Place vertex
      p5.rotate(i/5);
    }
    p5.endShape();
  },
);
