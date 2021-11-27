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
     
     const values = analyzer.getValue();
     p5.translate(width, height/2)

     p5.beginShape();
 
     for(let i =0;i<values.length;i++){
       let amplitude = values[i] as number;
       p5.colorMode("hsb");
       let angle = p5.map(i,0,values.length,0,width);
       let centerOfCircle = p5.map(amplitude,0,1,80,150);
       let x = centerOfCircle * p5.cos(angle);
       let y = centerOfCircle * p5.sin(angle);

       let centerOfCircle1 = p5.map(amplitude,0,1,50,100);
       let x1 = centerOfCircle1 * p5.cos(angle);
       let y1 = centerOfCircle1 * p5.sin(angle);

       p5.vertex(x,y+30) //inner
       p5.ellipse(x,y+30,20) //outer

       p5.ellipse(x1-90,y1-70,10) //ears
       p5.ellipse(x1+90,y1-70,10) //ears
       
       p5.fill(i,255,255)
     }
     p5.endShape();
   },
);
 

