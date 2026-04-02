import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Service, Language } from '../types';

interface Props {
  service: Service;
  language: Language;
}

export default function ServiceCard({ service, language }: Props) {
  const trans = service.translations[language] || service.translations.en;

  return (
    <Link to={`/service/${service.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
      >
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{trans.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{trans.description}</p>
        <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}
