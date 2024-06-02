import { motion } from 'framer-motion'
import React from 'react'

const Skeleton = ({className}) => {
  return (
    <motion.div
      className={`bg-gray-300 ${className} rounded animate-pulse`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, yoyo: Infinity }}
    />
  )
}

export default Skeleton