import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Translation, Language } from '../types';

interface Props {
  t: Translation;
  language: Language;
}

export default function ServiceDetail({ t, language }: Props) {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  const trans = service.translations[language] || service.translations.en;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/dashboard" className="inline-flex items-center text-blue-600 font-medium mb-8 hover:underline">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t.common.back}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl"
      >
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl">{service.icon}</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">{trans.title}</h1>
        </div>

        <div className="space-y-12">
          {service.videoUrl && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 uppercase tracking-widest mb-4">Demo Video</h2>
              <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-black">
                <iframe
                  src={service.videoUrl}
                  title={`${trans.title} Demo Video`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-xl font-bold text-blue-600 uppercase tracking-widest mb-4">{t.service.overview}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{trans.overview}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 uppercase tracking-widest mb-4">{t.service.whyNeeded}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{trans.whyNeeded}</p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.service.documents}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trans.documents.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.service.process}</h2>
            <div className="space-y-6">
              {trans.process.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-lg pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-8">
            <a
              href={service.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-5 bg-blue-600 text-white rounded-2xl text-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              {t.service.applyNow}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
