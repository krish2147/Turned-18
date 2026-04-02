import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Translation } from '../types';

interface Props {
  onSubmit: (age: number) => void;
  t: Translation;
}

export default function AgeInput({ onSubmit, t }: Props) {
  const [age, setAge] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAge = parseInt(age);
    if (isNaN(numAge) || numAge < 1 || numAge > 100) {
      setError(t.age.invalidAge);
      return;
    }
    onSubmit(numAge);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t.common.enterAge}</h2>
      <div className="space-y-4">
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            setError('');
          }}
          placeholder="e.g. 18"
          className="w-full p-4 text-2xl text-center border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all outline-none"
          autoFocus
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
        >
          {t.common.submit}
        </motion.button>
      </div>
    </form>
  );
}
