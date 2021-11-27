// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
 
// project imports
import { Visualizer } from '../Visualizers';
 
 
export const KevinVisualizer = new Visualizer("Mickey Mouse",
   (p5: P5, analyzer: Tone.Analyser) => {
     const width = window.innerWidth/2.5;
     const height =window.innerHeight/2;
     p5.background(0, 0, 0, 255);
     p5.stroke("orange");
      const values = analyzer.getValue();
     p5.translate(width, height/2)
 
     for(let i =0;i<values.length;i++){
       p5.colorMode("hsb");
       let angle1 = p5.map(i,0,values.length,0,100);
       let amplitude = values[i] as number;
 
       let centerOfCircle = p5.map(amplitude,0,1,20,50);
       let centerOfCircle1 = p5.map(amplitude,0,1,15,50);
       let centerOfCircle2 = p5.map(amplitude,0,1,30,200);
 
       let x = centerOfCircle * p5.cos(angle1);
       let y = centerOfCircle * p5.sin(angle1);
 
       let x1 = centerOfCircle1 * p5.cos(angle1);
       let y1 = centerOfCircle1 * p5.sin(angle1);
 
       let x2 = centerOfCircle2 * p5.cos(angle1);
       let y2 = centerOfCircle2 * p5.sin(angle1);
 
       //face of mm
       p5.ellipse(x,y,x*y)
       p5.ellipse(y,x,x*y)
 
       //the ears of mm
       p5.ellipse(x1-100,y1-100,x1*y1)
       p5.ellipse(y1-100,x1-100,x1*y1)
       p5.ellipse(y1+100,x1-100,x1*y1)
       p5.ellipse(x1+100,y1-100,x1*y1)
 
       //side circles
       p5.ellipse(x2-300,y2,y2)
       p5.ellipse(y2+300,x2,y2)
       p5.ellipse(x2+300,y2,y2)
       p5.ellipse(y2-300,x2,y2)
 
       p5.fill(i,255,255)
     }
   },
);
 

