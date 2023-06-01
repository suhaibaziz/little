import React from "react";
import {motion} from'framer-motion';


const MotionGraphic=(props)=>{

    return(
        <motion.div className='motion'
        animate={{
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse', // Reverse the animation for the wave effect
        }}
      >
        {/* Insert your lemon graphic or SVG here */}
        <img width={'100px'} src={props.img} alt="Lemon" />
      </motion.div>
    )
}
export default MotionGraphic;