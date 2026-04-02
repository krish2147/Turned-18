import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation } from '../types';
import { TypeAnimation } from 'react-type-animation';
interface Props {
  t: Translation;
  onComplete: () => void;
}

export default function Landing({ t, onComplete }: Props) {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}

>
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white overflow-hidden">
      <div className="max-w-4xl w-full text-center space-y-1">
       <motion.h1

  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-6xl md:text-8xl font-extrabold tracking-tight"
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Turned{" "}
  <motion.span
    className="text-blue-600"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    18,
  </motion.span>
</motion.h1>

        <div className="h-18 md:h-28 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-medium text-blue-600 italic"
            >
              <TypeAnimation
              sequence={[
                'PAN card banwaya?',
                1200,
                'Aadhaar update kiya?',
                1200,
                'Voter ID banaya?',
                1200,
                'Driving License banaya kya?',
                1200,
                'Bank account khola?',
                1200,
                'Yahan sab kuch milega.',
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              cursor={true}
              className="text-3xl md:text-5xl font-medium text-blue-600"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="text-gray-500 text-sm mt-2">
  Step-by-step guidance in your language
</p>

        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative px-10 py-4 bg-black text-white rounded-full text-lg font-semibold overflow-hidden group transition duration-150 ease-out mt-6"
  onClick={onComplete}
>
  <span className="relative z-10">Get Started</span>

  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-150"></div>
</motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 animate-blob"></div>

  <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

  <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-sky-300 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
</div>
    </div>
</motion.div>
  );
}
