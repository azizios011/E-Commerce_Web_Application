"use client";

import React from 'react'
import { motion } from "framer-motion"

const LoginButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
        Login
    </motion.button>
  )
}

export default LoginButton
