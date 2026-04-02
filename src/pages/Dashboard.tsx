import React, { useState } from 'react';
import { motion } from 'framer-motion'; // ✅ FIXED
import { SERVICES } from '../constants';
import { Translation, Language } from '../types';
import ServiceCard from '../components/ServiceCard';
import AIChat from '../components/AIchat.tsx';

interface Props {
  t: Translation;
  language: Language;
}

export default function Dashboard({ t, language }: Props) {
  const [search, setSearch] = useState('');

  const filteredServices = SERVICES.filter((s) => {
    const trans = s.translations[language] || s.translations.en;

    return (
      trans.title.toLowerCase().includes(search.toLowerCase()) ||
      trans.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          {t.dashboard.title}
        </motion.h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t.dashboard.subtitle}
        </p>
      </div>

      {/* Search */}
      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <input
            id="search"
            name="search"
            type="text"
            placeholder={t.common.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-5 pl-14 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
          />

          {/* ✅ FIXED ICON */}
          <svg
            className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>

      {/* Services */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }} // 🔥 small upgrade
            >
              <ServiceCard service={service} language={language} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500 text-xl">{t.dashboard.noResults}</p>
        </div>
      )}
      <AIChat 
  t={t}
/>
    </div>
  );
  
}