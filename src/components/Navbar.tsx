import React from 'react';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { Translation, Language } from '../types';
import { LANGUAGES } from '../constants';

interface Props {
  t: Translation;
  user: any;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ t, user, currentLanguage, onLanguageChange }: Props) {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        // User closed the popup, this is a normal cancellation, no need to log as error
        console.log('Login cancelled by user');
      } else if (error.code === 'auth/cancelled-popup-request') {
        // Multiple popup requests, ignore
        console.log('Login request cancelled');
      } else {
        console.error('Login failed:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl">18</div>
          <span className="font-black text-xl text-gray-900 tracking-tighter">Turned 18</span>
        </Link>

        <div className="flex items-center gap-4">
          <select
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="bg-gray-50 border-none text-sm font-medium rounded-lg focus:ring-0 cursor-pointer p-2"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name}
              </option>
            ))}
          </select>

          {user ? (
            <div className="flex items-center gap-3">
              <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full border border-gray-200" />
              <button
                onClick={handleLogout}
                className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
