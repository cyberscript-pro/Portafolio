"use client"
import { fadeIn } from "../utils/transitions"
import { motion } from "framer-motion"

type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: 'top' | 'right' | 'bottom' | 'left';
}

export const MotionTransition = (props: MotionTransitionProps) => {
    const {children, className , position} = props
      return (
        <motion.div variants={fadeIn(position)} initial="hidden" animate="visible" exit="hidden" className={className}>
            {children}
        </motion.div> 
    )
}