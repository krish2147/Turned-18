import React from 'react';
import { LANGUAGES } from '../constants';
import { Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


interface Props {
  onSelect: (lang: Language) => void;
  currentLanguage?: Language;
}

export default function LanguageSelector({ onSelect, currentLanguage }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white overflow-hidden">
          <div className="max-w-4xl w-full text-center space-y-8">
            <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-5xl font-black text-gray-900"
    >
      Turned < span className="text-blue-600">18</span>,
    </motion.h1>
            <div className="h-4 md:h-3 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-2xl font-medium text-blue-600 italic"
                >
                  <TypeAnimation
                  sequence={[
                    'Select your language',
                    1500,
                    'अपनी भाषा चुनें',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="text-xl md:text-xl font-semibold text-blue-600"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl mx-auto p-4">
      {LANGUAGES.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(lang.code)}
          className={`p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-center gap-2 ${
            currentLanguage === lang.code
              ? 'border-blue-600 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-blue-300 bg-white text-gray-700'
          }`}
        >
          <span className={`text-lg font-medium ${lang.font}`}>{lang.name}</span>
          <span className="text-xs opacity-60 uppercase tracking-wider">{lang.code}</span>
        </motion.button>
      ))}
    </div>
    </div>
  );
}
