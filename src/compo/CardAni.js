import React from 'react'
import { motion } from 'framer-motion'
export const CardAni = () => {
    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: [0, 900] }}
            transition={{
                duration: "3", delay: "1"
            }}

        >hello </motion.div>
    )
}
