import React from 'react';
import { motion, reverseEasing } from 'framer-motion';
import logo from './Logo .svg';
function MotionCube() {
  return (
    <motion.div
      className="cube"
      animate={{
        rotateX: [0, 10, 20,10,0],
        rotateY: [0, 180, 360],
        
      }}
      transition={{repeat:Infinity, duration: 4, loop: Infinity }}
    >
      <div className="face front">Littile</div>
      <div className="face back">Lemon</div>
      <div className="face left"><img src={logo} style={{objectFit: 'contain'}}/></div>
      <div className="face right"><img src={logo} style={{objectFit: 'contain'}}/></div>
      <div className="face top"><img src={logo} style={{objectFit: 'contain'}}/></div>
      <div className="face bottom"><img src={logo} style={{objectFit: 'contain'}}/></div>
    </motion.div>
  );
}

export default MotionCube;
