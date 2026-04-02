import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db, OperationType, handleFirestoreError } from './firebase';
import { Language, Translation, UserProfile } from './types';
import { translations } from './constants';

// Components
import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';
import AgeInput from './components/AgeInput';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ServiceDetail from './pages/ServiceDetail';
import Under18 from './pages/Under18';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });
  const [age, setAge] = useState<number | null>(() => {
    const saved = localStorage.getItem('age');
    return saved ? parseInt(saved) : null;
  });
  const [step, setStep] = useState<'language' | 'age' | 'landing' | 'app'>(() => {
    // Always start with language selection when the app opens to ensure the flow is followed
    return 'landing';
  });
  const [loading, setLoading] = useState(true);

  const t = translations[language];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const docRef = doc(db, 'users', firebaseUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data() as UserProfile;
            setProfile(data);
            // We still start at language selection as per user request "when the app opens"
            // but we pre-load their data if it exists
            setLanguage(data.language);
            setAge(data.age);
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${firebaseUser.uid}`);
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const syncProfile = async (newAge: number, newLang: Language) => {
    if (user) {
      try {
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, {
          uid: user.uid,
          age: newAge,
          language: newLang,
          viewedServices: profile?.viewedServices || [],
          bookmarkedServices: profile?.bookmarkedServices || [],
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
      }
    }
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setStep('age');
  };

  const handleAgeSubmit = (newAge: number) => {
    setAge(newAge);
    localStorage.setItem('age', newAge.toString());
    syncProfile(newAge, language);
    // Go straight to the app (Dashboard or Under18) after age is submitted
    setStep('app');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    if (user) {
      updateDoc(doc(db, 'users', user.uid), { language: lang }).catch(e => 
        handleFirestoreError(e, OperationType.UPDATE, `users/${user.uid}`)
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  /*if (step === 'language') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl mx-auto mb-6 shadow-xl shadow-blue-100">18</div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">Turned 18</h1>
          <div className="space-y-2">
            <p className="text-gray-500 font-medium">Select your preferred language to continue</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-400 text-sm max-w-md mx-auto">
              <span>अपनी भाषा चुनें</span>
              <span>તમારી ભાષા પસંદ કરો</span>
              <span>உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்</span>
              <span>اپنی زبان منتخب کریں</span>
            </div>
          </div>
        </div>
        <LanguageSelector onSelect={handleLanguageSelect} />
      </div>
    );*/
    if (step === 'landing') {
  return (
    <Landing
      t={t}
      onComplete={() => setStep('language')}
    />
  );
}

if (step === 'language'){
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <LanguageSelector onSelect={handleLanguageSelect} />
    </div>
  );
}
  

  if (step === 'age') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-lg shadow-blue-100">18</div>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">{t.common.selectLanguage} ✓</p>
        </div>
        <AgeInput onSubmit={handleAgeSubmit} t={t} />
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen bg-white text-gray-900 font-sans`}>
        {age && age >= 18 && <Navbar t={t} user={user} currentLanguage={language} onLanguageChange={handleLanguageChange} />}
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={age && age < 18 ? <Under18 age={age} t={t} onReset={() => setStep('age')} /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/dashboard" 
              element={age && age >= 18 ? <Dashboard t={t} language={language} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/service/:id" 
              element={age && age >= 18 ? <ServiceDetail t={t} language={language} /> : <Navigate to="/" />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="py-12 border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-black text-sm">18</div>
              <span className="font-black text-lg text-gray-900 tracking-tighter">Turned 18</span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Turned 18. A guide for the future of India.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
