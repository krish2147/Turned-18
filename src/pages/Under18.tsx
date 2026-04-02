import React from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';

interface Props {
  age: number;
  t: Translation;
  onReset: () => void;
}

export default function Under18({ age, t, onReset }: Props) {
  const yearsToWait = 18 - age;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-xl text-center"
      >
        <div className="text-8xl mb-8">⏳</div>
        <h1 className="text-4xl font-black text-gray-900 mb-4">{t.age.notEligible}</h1>
        <p className="text-2xl text-gray-600 mb-4">
          {t.age.eligibleIn} <span className="font-bold text-blue-600">{yearsToWait} {t.age.years}</span>.
        </p>
        <p className="text-xl text-gray-500 mb-8 font-medium italic">
          "{t.age.waiting}"
        </p>

        <div className="bg-blue-50 p-8 rounded-2xl text-left mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4">{t.age.prepTips}</h2>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start gap-2">
              <span>•</span>
              {t.age.tip1}
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              {t.age.tip2}
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              {t.age.tip3}
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              {t.age.tip4}
            </li>
          </ul>
        </div>

        <button
          onClick={onReset}
          className="text-blue-600 font-bold hover:underline"
        >
          {t.common.back}
        </button>
      </motion.div>
    </div>
  );
}
