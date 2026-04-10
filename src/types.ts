export type Language = 'en' | 'hi' | 'gu' | 'ta' | 'te' | 'kn' | 'ml' | 'bn' | 'mr' | 'pa' | 'ur' | 'am';

export interface Translation {
  common: {
    back: string;
    next: string;
    getStarted: string;
    selectLanguage: string;
    enterAge: string;
    submit: string;
    search: string;
    loading: string;
  };
  age: {
    notEligible: string;
    eligibleIn: string;
    years: string;
    waiting: string;
    prepTips: string;
    invalidAge: string;
    tip1: string;
    tip2: string;
    tip3: string;
    tip4: string;
  };
  landing: {
    title: string;
    rotatingText: string[];
  };
  dashboard: {
    title: string;
    subtitle: string;
    noResults: string;
  };
  service: {
    overview: string;
    whyNeeded: string;
    eligibility: string;
    documents: string;
    process: string;
    applyNow: string;
  };
  chat: {
    title: string;
    greeting: string;
    serverDown: string;
    placeholder: string;
    typing: string;
  };
}

export interface ServiceTranslation {
  title: string;
  description: string;
  overview: string;
  whyNeeded: string;
  eligibility: string;
  documents: string[];
  process: string[];
}

export interface Service {
  id: string;
  icon: string;
  applyLink: string;
  videoUrl?: string;
  translations: Record<Language, ServiceTranslation>;
}

export interface UserProfile {
  uid: string;
  age: number;
  language: Language;
  viewedServices: string[];
  bookmarkedServices: string[];
}
