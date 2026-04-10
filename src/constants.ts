import { Language, Translation, Service, ServiceTranslation } from './types';

export const LANGUAGES: { code: Language; name: string; font: string }[] = [
  { code: 'en', name: 'English', font: 'font-sans' },
  { code: 'hi', name: 'हिन्दी (Hindi)', font: 'font-sans' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', font: 'font-sans' },
  { code: 'ta', name: 'தமிழ் (Tamil)', font: 'font-sans' },
  { code: 'te', name: 'తెలుగు (Telugu)', font: 'font-sans' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', font: 'font-sans' },
  { code: 'ml', name: 'മലയാളം (Malayalam)', font: 'font-sans' },
  { code: 'bn', name: 'বাংলা (Bengali)', font: 'font-sans' },
  { code: 'mr', name: 'मराठी (Marathi)', font: 'font-sans' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', font: 'font-sans' },
  { code: 'ur', name: 'اردو (Urdu)', font: 'font-sans' },
  { code: 'am', name:'অসমীয়া (assamese)', font:'font-sans'}
];

const en: Translation = {
  common: {
    back: 'Back',
    next: 'Next',
    getStarted: 'Get Started',
    selectLanguage: 'Select your language',
    enterAge: 'Enter your age',
    submit: 'Submit',
    search: 'Search services...',
    loading: 'Loading...',
  },
  age: {
    notEligible: 'Oh, you are not 18 yet!',
    eligibleIn: 'You have',
    years: 'years left to be 18',
    waiting: 'Come back when you are 18. We are waiting for you!',
    prepTips: 'Preparation Tips:',
    invalidAge: 'Please enter a valid age (1-100)',
    tip1: 'Keep your Aadhar card updated with current address.',
    tip2: 'Ensure your mobile number is linked to Aadhar.',
    tip3: 'Learn about financial literacy and basic banking.',
    tip4: 'Start collecting proof of residence documents.',
  },
  landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
  dashboard: {
    title: 'What do you want to apply for?',
    subtitle: 'Explore essential government services for young adults.',
    noResults: 'No services found matching your search.',
  },
  service: {
    overview: 'Overview',
    whyNeeded: 'Why it is needed',
    eligibility: 'Eligibility',
    documents: 'Documents Required',
    process: 'Step-by-step Process',
    applyNow: 'Official Apply Link',
  },
  chat: {
    title: 'Saathi',
    greeting: 'Hi 👋 I\'m Saathi - your AI assistant.',
    serverDown: 'Sorry, servers down\nI\'ll guide you soon,\nTill then you can check out the resources below 👇',
    placeholder: 'Ask something...',
    typing: 'AI is typing...',
  },

};

const hi: Translation = {
  common: {
    back: 'पीछे',
    next: 'अगला',
    getStarted: 'शुरू करें',
    selectLanguage: 'अपनी भाषा चुनें',
    enterAge: 'अपनी उम्र दर्ज करें',
    submit: 'जमा करें',
    search: 'सेवाएं खोजें...',
    loading: 'लोड हो रहा है...',
  },
  age: {
    notEligible: 'ओह, आप अभी 18 साल के नहीं हुए हैं!',
    eligibleIn: "आपको 18 साल का होने में अभी",
    years: "साल बाकी हैं",
    waiting: 'जब आप 18 साल के हो जाएं तो वापस आएं। हम आपका इंतजार कर रहे हैं!',
    prepTips: 'तैयारी के टिप्स:',
    invalidAge: 'कृपया एक वैध उम्र दर्ज करें (1-100)',
    tip1: 'आधार कार्ड को वर्तमान पते के साथ अपडेट रखें।',
    tip2: 'सुनिश्चित करें कि आपका मोबाइल नंबर आधार से जुड़ा हो।',
    tip3: 'वित्तीय साक्षरता और बुनियादी बैंकिंग के बारे में जानें।',
    tip4: 'निवास के प्रमाण दस्तावेज़ एकत्र करना शुरू करें।',
  },
  landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
  dashboard: {
    title: 'आप किसके लिए आवेदन करना चाहते हैं?',
    subtitle: 'युवा वयस्कों के लिए आवश्यक सरकारी सेवाओं का अन्वेषण करें।',
    noResults: 'आपकी खोज से मेल खाने वाली कोई सेवा नहीं मिली।',
  },
  service: {
    overview: 'अवलोकन',
    whyNeeded: 'इसकी आवश्यकता क्यों है',
    eligibility: 'पात्रता',
    documents: 'आवश्यक दस्तावेज',
    process: 'चरण-दर-चरण प्रक्रिया',
    applyNow: 'आधिकारिक आवेदन लिंक',
  },
  chat: {
    title: 'Saathi',
    greeting: 'नमस्ते 👋 मैं साथी हूँ - आपका AI सहायक।',
    serverDown: 'खेद है, सर्वर डाउन है\nमैं जल्द ही आपको गाइड करूंगा,\nतब तक आप नीचे दिए गए संसाधनों को देख सकते हैं 👇',
    placeholder: 'कुछ पूछें...',
    typing: 'AI टाइप कर रहा है...',
  },
};

const gu: Translation = {
  common: {
    back: 'પાછળ',
    next: 'આગળ',
    getStarted: 'શરૂ કરો',
    selectLanguage: 'તમારી ભાષા પસંદ કરો',
    enterAge: 'તમારી ઉંમર દાખલ કરો',
    submit: 'સબમિટ કરો',
    search: 'સેવાઓ શોધો...',
    loading: 'લોડ થઈ રહ્યું છે...',
  },
  age: {
    notEligible: 'ઓહ, તમે હજી 18 વર્ષના નથી થયા!',
    eligibleIn: 'તમને હજી',
    years: 'વર્ષ બાકી છે 18 થવા માટે',
    waiting: 'જ્યારે તમે 18 વર્ષના થાઓ ત્યારે પાછા આવો. અમે તમારી રાહ જોઈ રહ્યા છીએ!',
    prepTips: 'તૈયારીની ટિપ્સ:',
    invalidAge: 'કૃપા કરીને માન્ય ઉંમર દાખલ કરો (1-100)',
    tip1: 'તમારું આધાર કાર્ડ વર્તમાન સરનામાં સાથે અપડેટ રાખો।',
    tip2: 'ખાતરી કરો કે તમારો મોબાઇલ નંબર આધાર સાથે જુડાયેલો છે।',
    tip3: 'આર્થિક સાક્ષરતા અને મૂળભૂત બેંકિંગ જાણો।',
    tip4: 'રહેઠાણની પુરાવાની દસ્તાવેજો એકત્ર કરવાનું શરૂ કરો।',
  },
  landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
  dashboard: {
    title: 'તમે શેના માટે અરજી કરવા માંગો છો?',
    subtitle: 'યુવાન વયસ્કો માટે આવશ્યક સરકારી સેવાઓ શોધો.',
    noResults: 'તમારી શોધ સાથે મેળ ખાતી કોઈ સેવાઓ મળી નથી.',
  },
  service: {
    overview: 'ઝાંખી',
    whyNeeded: 'તેની જરૂર કેમ છે',
    eligibility: 'પાત્રતા',
    documents: 'જરૂરી દસ્તાવેજો',
    process: 'પગલું-દર-પગલું પ્રક્રિયા',
    applyNow: 'સત્તાવાર અરજી લિંક',
  },
  chat: {
    title: 'Saathi',
    greeting: 'હાય 👋 હું સાથી છું - તમારો AI સહાયક।',
    serverDown: 'માફ કરો, સર્વર ડાউન છે\nમૈ તમને શીઘ્રમાં માર્ગદર્શન આપીશ,\nતેના બદલે તમે નીચે આપેલ સંસાધનો જોઈ શકો છો 👇',
    placeholder: 'કુछ બીજું પૂછો...',
    typing: 'AI લખી રહ્યો છે...',
  },
};

const ta: Translation = {
  common: {
    back: 'பின்னால்',
    next: 'அடுத்து',
    getStarted: 'தொடங்குங்கள்',
    selectLanguage: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
    enterAge: 'உங்கள் வயதை உள்ளிடவும்',
    submit: 'சமர்ப்பிக்கவும்',
    search: 'சேவைகளைத் தேடுங்கள்...',
    loading: 'ஏற்றப்படுகிறது...',
  },
  age: {
    notEligible: 'ஓ, உங்களுக்கு இன்னும் 18 வயது ஆகவில்லை!',
    eligibleIn: 'உங்களுக்கு இன்னும்',
    years: 'ஆண்டுகள் உள்ளன 18 வயது ஆக',
    waiting: 'உங்களுக்கு 18 வயது ஆனதும் மீண்டும் வாருங்கள். நாங்கள் உங்களுக்காக காத்திருக்கிறோம்!',
    prepTips: 'தயாரிப்பு குறிப்புகள்:',
    invalidAge: 'தயவுசெய்து சரியான வயதை உள்ளிடவும் (1-100)',
    tip1: 'உங்கள் ஆதாரை தற்போதைய முகவரியுடன் புதுப்பிக்கவும்.',
    tip2: 'உங்கள் மொபைல் எண் ஆதாரத்துடன் இணைக்கப்பட்டுள்ளதை உறுதிசெய்யவும்.',
    tip3: 'நிதி சாக்ஷரதை மற்றும் அடிப்படை வங்கி பற்றி அறிக.',
    tip4: 'வசிப்பிடப் சான்றுப் பத்திரங்கள் சங்கலிக்கத் தொடங்கவும்.',
  },
  landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
  dashboard: {
    title: 'நீங்கள் எதற்கு விண்ணப்பிக்க விரும்புகிறீர்கள்?',
    subtitle: 'இளைஞர்களுக்கான அத்தியாவசிய அரசு சேவைகளை ஆராயுங்கள்.',
    noResults: 'உங்கள் தேடலுக்குப் பொருத்தமான சேவைகள் எதுவும் கிடைக்கவில்லை.',
  },
  service: {
    overview: 'கண்ணோட்டம்',
    whyNeeded: 'இது ஏன் தேவை',
    eligibility: 'தகுதி',
    documents: 'தேவையான ஆவணங்கள்',
    process: 'படி-படியாக செயல்முறை',
    applyNow: 'அதிகாரப்பூர்வ விண்ணப்ப இணைப்பு',
  },
  chat: {
    title: 'Saathi',
    greeting: 'வணக்கம் 👋 நான் சாதி - உங்கள் AI உதவியாளர்।',
    serverDown: 'மன்னிக்கவும், சர்வர் செயலிழந்துவிட்டது\nநான் விரைவில் உங்களுக்கு வழிகாட்டுகிறேன்,\nபின்வரும் வளங்களை நீங்கள் பார்க்கலாம் 👇',
    placeholder: 'ஏதாவது கேளுங்கள்...',
    typing: 'AI டைப் செய்து கொண்டுள்ளது...',
  },
};

const te: Translation = {
  common: {
    back: 'వెనక్కి',
    next: 'తర్వాత',
    getStarted: 'ప్రారంభించండి',
    selectLanguage: 'మీ భాషను ఎంచుకోండి',
    enterAge: 'మీ వయస్సు నమోదు చేయండి',
    submit: 'సమర్పించండి',
    search: 'సేవలను వెతకండి...',
    loading: 'లోడ్ అవుతోంది...',
},
age: {
  notEligible: 'ఓహ్, మీరు ఇంకా 18 కాలేదు!',
  eligibleIn: 'మీకు ఇంకా',
  years: 'సంవత్సరాలు ఉన్నాయి 18 అవ్వడానికి',
  waiting: 'మీరు 18 అయిన తర్వాత తిరిగి రండి. మేము ఎదురు చూస్తున్నాం!',
  prepTips: 'తయారీ సూచనలు:',
  invalidAge: 'దయచేసి సరైన వయస్సు నమోదు చేయండి (1-100)',
  tip1: 'మీ ఆధార్ కార్డ్‌ను ప్రస్తుత చిరునామా సాथ అప్‌డేట్ చేయండి.',
  tip2: 'మీ మోబైల్ నంబర్ ఆధార్‌కు లింక్ చేయబడిందని నిశ్చితం చేసుకోండి.',
  tip3: 'ఆర్థిక సాక్షరత మరియు ప్రాథమిక బ్యాంకింగ్ గురించి తెలుసుకోండి.',
  tip4: 'నివాస రుజువు పత్రాలను సేకరించటం ప్రారంభించండి.',
},
landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
dashboard: {
  title: 'మీరు ఏదికి అప్లై చేయాలనుకుంటున్నారు?',
  subtitle: 'యువత కోసం ముఖ్యమైన ప్రభుత్వ సేవలను అన్వేషించండి.',
  noResults: 'మీ శోధనకు సరిపడే సేవలు లేవు.',
},
service: {
  overview: 'సారాంశం',
  whyNeeded: 'ఎందుకు అవసరం',
  eligibility: 'అర్హత',
  documents: 'అవసరమైన పత్రాలు',
  process: 'దశలవారీ ప్రక్రియ',
  applyNow: 'అధికారిక అప్లై లింక్',
},
chat: {
  title: 'Saathi',
  greeting: 'హాయ్ 👋 నేను సాథి - మీ AI సహాయకుడు.',
  serverDown: 'క్షమించండి, సర్వర్ డౌన్ ఉంది\nనేను త్వరలో మీకు మార్గనిర్దేశం చేస్తాను,\nతద్వారా మీరు క్రింది వనరులను చూడవచ్చు 👇 ',
  placeholder: 'ఏదైనా అడగండి...',
  typing: 'AI టైప్ చేస్తోంది...',
},
};

const pa: Translation = {
  common: {
  back: 'ਵਾਪਸ',
  next: 'ਅੱਗੇ',
  getStarted: 'ਸ਼ੁਰੂ ਕਰੋ',
  selectLanguage: 'ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ',
  enterAge: 'ਆਪਣੀ ਉਮਰ ਦਰਜ ਕਰੋ',
  submit: 'ਜਮ੍ਹਾਂ ਕਰੋ',
  search: 'ਸੇਵਾਵਾਂ ਖੋਜੋ...',
  loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
},
age: {
  notEligible: 'ਓਹ, ਤੁਸੀਂ ਹਾਲੇ 18 ਨਹੀਂ ਹੋਏ!',
  eligibleIn: 'ਤੁਹਾਡੇ ਕੋਲ',
  years: 'ਸਾਲ ਬਾਕੀ ਹਨ 18 ਹੋਣ ਲਈ',
  waiting: '18 ਹੋਣ ਤੇ ਵਾਪਸ ਆਓ। ਅਸੀਂ ਤੁਹਾਡੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹਾਂ!',
  prepTips: 'ਤਿਆਰੀ ਸੁਝਾਅ:',
  invalidAge: 'ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਉਮਰ ਦਰਜ ਕਰੋ (1-100)',
  tip1: 'ਆਪਣਾ ਆਧਾਰ ਕਾਰਡ ਮੌਜੂਦਾ ਪਤੇ ਦੇ ਨਾਲ ਅਪਡੇਟ ਰੱਖੋ।',
  tip2: 'ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ ਮੋਬਾਈਲ ਨੰਬਰ ਆਧਾਰ ਨਾਲ ਜੁੜਿਆ ਹੋਵੇ।',
  tip3: 'ਵਿੱਤੀ ਸਾਖਰਤਾ ਅਤੇ ਮੁਢਲੀ ਬੈਂਕਿੰਗ ਬਾਰੇ ਜਾਣਿਆ।',
  tip4: 'ਨਿਵਾਸ ਪ੍ਰਮਾਣ ਦਸਤਾਵੇਜ਼ਾਂ ਨੂੰ ਇਕੱਤਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ।',
},
landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
dashboard: {
  title: 'ਤੁਸੀਂ ਕਿਸ ਲਈ ਅਪਲਾਈ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?',
  subtitle: 'ਨੌਜਵਾਨਾਂ ਲਈ ਜ਼ਰੂਰੀ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਦੀ ਖੋਜ ਕਰੋ.',
  noResults: 'ਤੁਹਾਡੀ ਖੋਜ ਨਾਲ ਕੋਈ ਸੇਵਾ ਨਹੀਂ ਮਿਲੀ.',
},
service: {
  overview: 'ਸੰਖੇਪ',
  whyNeeded: 'ਇਹ ਕਿਉਂ ਲੋੜੀਂਦਾ ਹੈ',
  eligibility: 'ਯੋਗਤਾ',
  documents: 'ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼',
  process: 'ਕਦਮ ਦਰ ਕਦਮ ਪ੍ਰਕਿਰਿਆ',
  applyNow: 'ਅਧਿਕਾਰਿਕ ਅਪਲਾਈ ਲਿੰਕ',
},
chat: {
  title: 'Saathi',
  greeting: 'ਹਾਇ 👋 ਮੈਂ ਸਾਥੀ ਹਾਂ - ਤੁਹਾਡਾ AI ਸਹਾਇਕ।',
  serverDown: 'ਮਾਫ਼ ਕਰਨਾ, ਸਰਵਰ ਡਾਊਨ ਹੈ\nਮੈਂ ਤੁਹਾਨੂੰ ਜਲਦੀ ਗਾਈਡ ਕਰਾਂਗਾ,\nਤਦ ਤੱਕ ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਸਰੋਤਾਂ ਨੂੰ ਦੇਖ ਸਕਦੇ ਹੋ 👇',
  placeholder: 'ਕੁਝ ਪੁੱਛੋ...',
  typing: 'AI ਟਾਈਪ ਕਰ ਰਿਹਾ ਹੈ...',
},
};

const mr: Translation = {
common: {
  back: 'मागे',
  next: 'पुढे',
  getStarted: 'सुरू करा',
  selectLanguage: 'तुमची भाषा निवडा',
  enterAge: 'तुमचे वय टाका',
  submit: 'सबमिट करा',
  search: 'सेवा शोधा...',
  loading: 'लोड होत आहे...',
},
age: {
  notEligible: 'अरे, तुम्ही अजून 18 वर्षांचे नाही!',
  eligibleIn: 'तुमच्याकडे अजून',
  years: 'वर्षे बाकी आहेत 18 होण्यासाठी',
  waiting: '18 झाल्यावर परत या. आम्ही वाट पाहत आहोत!',
  prepTips: 'तयारी टिप्स:',
  invalidAge: 'कृपया योग्य वय टाका (1-100)',
  tip1: 'तुमचे आधार कार्ड सध्याच्या पत्त्यासह अद्यतन ठेवा।',
  tip2: 'तुमचा मोबाईल नंबर आधारशी जोडलेला आहे हे सुनिश्चित करा।',
  tip3: 'आर्थिक साक्षरता आणि मूलभूत बँकिंग शिका।',
  tip4: 'निवास पुरावा कागदपत्रे गोळा करण्यास सुरुवात करा।',
},
landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
dashboard: {
  title: 'तुम्हाला कशासाठी अर्ज करायचा आहे?',
  subtitle: 'तरुणांसाठी आवश्यक सरकारी सेवा शोधा.',
  noResults: 'तुमच्या शोधाशी जुळणारी सेवा सापडली नाही.',
},
service: {
  overview: 'आढावा',
  whyNeeded: 'का आवश्यक आहे',
  eligibility: 'पात्रता',
  documents: 'आवश्यक कागदपत्रे',
  process: 'पायरी-पायरीने प्रक्रिया',
  applyNow: 'अधिकृत अर्ज लिंक',
},
chat: {
  title: 'Saathi',
  greeting: 'हाय 👋 मैं साथी हूँ - आपका AI सहायक।',
  serverDown: 'माफ़ करें, सर्वर डाउन है\nमैं आपको जल्द ही मार्गदर्शन करूंगा,\nतब तक आप नीचे दिए गए संसाधनों को देख सकते हैं 👇',
  placeholder: 'कुछ पूछें...',
  typing: 'AI टाइप कर रहा है...',
},
};

const bn: Translation = {
common: {
  back: 'ফিরে যান',
  next: 'পরবর্তী',
  getStarted: 'শুরু করুন',
  selectLanguage: 'আপনার ভাষা নির্বাচন করুন',
  enterAge: 'আপনার বয়স লিখুন',
  submit: 'জমা দিন',
  search: 'সেবা খুঁজুন...',
  loading: 'লোড হচ্ছে...',
},
age: {
  notEligible: 'ওহ, আপনি এখনো 18 হননি!',
  eligibleIn: 'আপনার এখনও',
  years: 'বছর বাকি আছে 18 হতে',
  waiting: '18 হলে আবার আসুন। আমরা অপেক্ষা করছি!',
  prepTips: 'প্রস্তুতির টিপস:',
  invalidAge: 'দয়া করে সঠিক বয়স দিন (1-100)',
  tip1: 'আপনার আধার কার্ড বর্তমান ঠিকানার সাথে আপডেট রাখুন।',
  tip2: 'নিশ্চিত করুন যে আপনার মোবাইল নম্বর আধারের সাথে যুক্ত আছে।',
  tip3: 'আর্থিক সাক্ষরতা এবং মৌলিক ব্যাংকিং সম্পর্কে জানুন।',
  tip4: 'বাসস্থানের প্রমাণের ডকুমেন্ট সংগ্রহ শুরু করুন।',
},
landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
dashboard: {
  title: 'আপনি কী জন্য আবেদন করতে চান?',
  subtitle: 'তরুণদের জন্য প্রয়োজনীয় সরকারি সেবা খুঁজুন.',
  noResults: 'আপনার অনুসন্ধানের সাথে মেলে এমন কোনো সেবা নেই.',
},
service: {
  overview: 'সংক্ষিপ্ত বিবরণ',
  whyNeeded: 'কেন প্রয়োজন',
  eligibility: 'যোগ্যতা',
  documents: 'প্রয়োজনীয় নথি',
  process: 'ধাপে ধাপে প্রক্রিয়া',
  applyNow: 'অফিসিয়াল আবেদন লিংক',
},
chat: {
  title: 'Saathi',
  greeting: 'হাই 👋 আমি সাথী - আপনার AI সহকারী।',
  serverDown: 'দুঃখিত, সার্ভার ডাউন আছে\nআমি আপনাকে শীঘ্রই গাইড করব,\nততক্ষণে আপনি নিচের রিসোর্সগুলি দেখতে পারেন 👇',
  placeholder: 'কিছু জিজ্ঞাসা করুন...',
  typing: 'AI টাইপ করছে...',
},  
};

const ml: Translation = {
  common: {
  back: 'തിരികെ',
  next: 'അടുത്തത്',
  getStarted: 'ആരംഭിക്കുക',
  selectLanguage: 'നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക',
  enterAge: 'നിങ്ങളുടെ വയസ് നൽകുക',
  submit: 'സമർപ്പിക്കുക',
  search: 'സേവനങ്ങൾ തിരയുക...',
  loading: 'ലോഡ് ചെയ്യുന്നു...',
},
age: {
  notEligible: 'ഓഹ്, നിങ്ങൾ ഇനിയും 18 ആയിട്ടില്ല!',
  eligibleIn: 'നിങ്ങൾക്ക് ഇനിയും',
  years: 'വർഷങ്ങൾ ബാക്കി ഉണ്ട് 18 ആകാൻ',
  waiting: '18 ആയ ശേഷം വീണ്ടും വരൂ. ഞങ്ങൾ കാത്തിരിക്കുന്നു!',
  prepTips: 'തയ്യാറെടുപ്പ് നിർദ്ദേശങ്ങൾ:',
  invalidAge: 'ദയവായി ശരിയായ വയസ് നൽകുക (1-100)',
  tip1: 'നിങ്ങളുടെ ആധാര് കാർഡ് നിലവിലെ വിലാസവുമായി പരിഷ്കരിക്കുക.',
  tip2: 'നിങ്ങളുടെ മോബൈൽ നമ്പർ ആധാരിലേയ്ക്ക് ബന്ധിപ്പിച്ചിരിക്കുന്നുവെന്ന് ഉറപ്പാക്കുക.',
  tip3: 'സാമ്പത്തിക സാക്ഷരതയെക്കുറിച്ചും അടിസ്ഥാന ബാങ്കിംഗ് സുവിധയെക്കുറിച്ചും അറിയുക.',
  tip4: 'വസതി തെളിവ് ഡോക്യുമെൻ്റുകൾ ശേഖരിക്കാൻ ആരംഭിക്കുക.',
},
landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
dashboard: {
  title: 'നിങ്ങൾ എന്തിന് അപേക്ഷിക്കാൻ ആഗ്രഹിക്കുന്നു?',
  subtitle: 'യുവാക്കൾക്ക് ആവശ്യമായ സർക്കാർ സേവനങ്ങൾ കണ്ടെത്തുക.',
  noResults: 'നിങ്ങളുടെ തിരച്ചിലിന് യോജിക്കുന്ന സേവനങ്ങളൊന്നും കണ്ടെത്തിയില്ല.',
},
service: {
  overview: 'സംഗ്രഹം',
  whyNeeded: 'എന്തിന് ആവശ്യമാണ്',
  eligibility: 'അർഹത',
  documents: 'ആവശ്യമായ രേഖകൾ',
  process: 'ഘട്ടംഘട്ടമായ പ്രക്രിയ',
  applyNow: 'ഓഫീഷ്യൽ അപേക്ഷ ലിങ്ക്',
},
chat: {
  title: 'Saathi',
  greeting: 'ഹായ് 👋 ഞാൻ സാത്തി - നിങ്ങളുടെ AI സഹായി.', 
  serverDown: 'ക്ഷമിക്കണം, സർവർ ഡൗൺ ആണ്\nഞാൻ നിങ്ങളെ ഉടൻ ഗൈഡ് ചെയ്യും,\nഅതിനിടെ നിങ്ങൾ താഴെയുള്ള റിസോഴ്സുകൾ പരിശോധിക്കാം 👇',
  placeholder: 'എന്തെങ്കിലും ചോദിക്കുക...',
  typing: 'AI ടൈപ്പ് ചെയ്യുന്നു...',
},
};

const kn: Translation = {
common: {
  back: 'ಹಿಂದೆ',
  next: 'ಮುಂದೆ',
  getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
  selectLanguage: 'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  enterAge: 'ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ',
  submit: 'ಸಲ್ಲಿಸಿ',
  search: 'ಸೇವೆಗಳನ್ನು ಹುಡುಕಿ...',
  loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
},

age: {
  notEligible: 'ಅಯ್ಯೋ, ನೀವು ಇನ್ನೂ 18 ಆಗಿಲ್ಲ!',
  eligibleIn: 'ನಿಮಗೆ ಇನ್ನೂ',
  years: 'ವರ್ಷಗಳು ಬಾಕಿ ಇವೆ 18 ಆಗಲು',
  waiting: '18 ಆದ ಮೇಲೆ ಮತ್ತೆ ಬನ್ನಿ. ನಾವು ಕಾಯುತ್ತಿದ್ದೇವೆ!',
  prepTips: 'ತಯಾರಿ ಸಲಹೆಗಳು:',
  invalidAge: 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ (1-100)',
  tip1: 'ನಿಮ್ಮ ಆಧಾರ ಕಾರ್ಡನ್ನು ಪ್ರಸ್ತುತ ವಿಳಾಸೊಂದಿಗೆ ಅಪ್‌ಡೇಟ್ ಮಾಡಿ.',
  tip2: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಆಧಾರಕ್ಕೆ ಲಿಂಕ್ ಮಾಡಲಾಗಿದೆ ಎಂದು ಖಾತರಿಪಡಿಸಿ.',
  tip3: 'ಹಣಕಾಸಿನ ಸಾಕ್ಷರತೆ ಮತ್ತು ಮೂಲ ಬ್ಯಾಂಕಿಂಗ್ ಸಂಬಂಧ ತಿಳಿಯಿರಿ.',
  tip4: 'ನಿವಾಸ ಪುರಾವೆ ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದನ್ನು ಪ್ರಾರಂಭಿಸಿ.',
},

landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },

dashboard: {
  title: 'ನೀವು ಯಾವುದಕ್ಕೆ ಅರ್ಜಿ ಹಾಕಲು ಬಯಸುತ್ತೀರಿ?',
  subtitle: 'ಯುವಕರಿಗಾಗಿ ಅಗತ್ಯ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
  noResults: 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದುವ ಸೇವೆಗಳು ಸಿಗಲಿಲ್ಲ.',
},

service: {
  overview: 'ಸಾರಾಂಶ',
  whyNeeded: 'ಏಕೆ ಬೇಕು',
  eligibility: 'ಅರ್ಹತೆ',
  documents: 'ಅವಶ್ಯಕ ದಾಖಲೆಗಳು',
  process: 'ಹಂತ ಹಂತದ ಪ್ರಕ್ರಿಯೆ',
  applyNow: 'ಅಧಿಕೃತ ಅರ್ಜಿ ಲಿಂಕ್',
},
chat: {
  title: 'Saathi',
  greeting: 'ಹಾಯ್ 👋 ನಾನು ಸಾಥಿ - ನಿಮ್ಮ AI ಸಹಾಯಕ.',
  serverDown: 'ಕ್ಷಮಿಸಿ, ಸರ್ವರ್ ಡೌನ್ ಆಗಿದೆ\nನಾನು ಶೀಘ್ರದಲ್ಲೇ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತೇನೆ,\nತದ್ವಾರ ನೀವು ಕೆಳಗಿನ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು 👇',
  placeholder: 'ಏನಾದರೂ ಕೇಳಿ...',
  typing: 'AI ಟೈಪ್ ಮಾಡುತ್ತಿದೆ...',
},
};

const ur: Translation = {
  common: {
    back: 'پیچھے',
    next: 'اگلا',
    getStarted: 'شروع کریں',
    selectLanguage: 'اپنی زبان منتخب کریں',
    enterAge: 'اپنی عمر درج کریں',
    submit: 'جمع کرائیں',
    search: 'سروسز تلاش کریں...',
    loading: 'لوڈ ہو رہا ہے...',
  },
  age: {
    notEligible: 'اوہ، آپ ابھی 18 سال کے نہیں ہوئے ہیں!',
    eligibleIn: 'آپ کے پاس',
    years: '18 سال کے ہونے میں سال باقی ہیں',
    waiting: 'جب آپ 18 سال کے ہو جائیں تو واپس آئیں۔ ہم آپ کا انتظار کر رہے ہیں!',
    prepTips: 'تیاری کے نکات:',
    invalidAge: 'براہ کرم درست عمر درج کریں (1-100)',
    tip1: 'اپنے آدھار کارڈ کو موجودہ پتے کے ساتھ اپ ڈیٹ رکھیں۔',
    tip2: 'یقینی بنائیں کہ آپ کا موبائل نمبر آدھار سے منسلک ہے۔',
    tip3: 'مالیاتی شخصیت اور بنیادی بینکاری کے بارے میں جانیں۔',
    tip4: 'رہائش کے ثبوت کی دستاویزات جمع کرنا شروع کریں۔',
  },
landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
  dashboard: {
    title: 'آپ کس کے لیے درخواست دینا چاہتے ہیں؟',
    subtitle: 'نوجوانوں کے لیے ضروری سرکاری خدمات دریافت کریں۔',
    noResults: 'آپ کی تلاش سے مطابقت رکھنے والی کوئی سروس نہیں ملی۔',
  },
  service: {
    overview: 'جائزہ',
    whyNeeded: 'اس کی ضرورت کیوں ہے',
    eligibility: 'اہلیت',
    documents: 'مطلوبہ دستاویزات',
    process: 'مرحلہ وار طریقہ کار',
    applyNow: 'سرکاری درخواست کا لنک',
  },
  chat: {
    title: 'Saathi',
    greeting: 'ہائے 👋 میں ساثی ہوں - آپ کا AI معاون۔', 
    serverDown: 'معذرت، سرور ڈاؤن ہے\nمیں آپ کی جلد رہنمائی کروں گا,\nتب تک آپ نیچے دی گئی وسائل کو دیکھ سکتے ہیں 👇',
    placeholder: 'کچھ پوچھیں...',
    typing: 'AI ٹائپ کر رہا ہے...',
  },
};

const am: Translation = {
  common: {
    back: 'ফিৰে যাওক',
    next: 'পৰৱর্তী',
    getStarted: 'আৰম্ভ কৰক',
    selectLanguage: 'আপোনাৰ ভাষা নিৰ্বাচন কৰক',
    enterAge: 'আপোনাৰ বয়স লিখক',
    submit: 'জমা দিয়ক',
    search: 'সেৱাসমূহ বিচাৰক...',
    loading: 'লোড হৈছে...',
  },
  age: {
    notEligible: 'অহ, আপুনি এতিয়াও 18 বছৰ হোৱা নাই!',
    eligibleIn: 'আপোনাৰ এতিয়াও',
    years: 'বছৰ বাকী আছে 18 হোৱাৰ বাবে',
    waiting: '18 হোৱাৰ পাছত পুনৰ আহক। আমি আপোনাৰ অপেক্ষা কৰিছো!',
    prepTips: 'প্ৰস্তুতি টিপস:',
    invalidAge: 'অনুগ্ৰহ কৰি সঠিক বয়স লিখক (1-100)',
    tip1: 'আপোনাৰ আধাৰ কাৰ্ড বৰ্তমান ঠিকনাৰ সৈতে আপডেট ৰাখক।',
    tip2: 'নিশ্চিত কৰক যে আপোনাৰ মোবাইল নম্বৰ আধাৰৰ সৈতে সংযুক্ত আছে।',
    tip3: 'আর্থিক সাক্ষরতা আৰু মৌলিক ব্যাংকিং সম্পর্কে জানক।',
    tip4: 'বাসস্থানের প্রমাণের ডকুমেন্ট সংগ্রহ করা শুরু করুন।',
  },
  landing: {
    title: 'Turned 18,',
    rotatingText: [
      'now what can you apply for?',
      'what are you eligible for?',
      'where do you start?',
    ],
  },
  dashboard: {
    title: 'আপুনি কি বাবে আবেদন কৰিব বিচাৰে?',
    subtitle: 'তৰুণসকলৰ বাবে প্ৰয়োজনীয় চৰকাৰী সেৱাসমূহ সন্ধান কৰক।',
    noResults: "আপোনাৰ অনুসন্ধানৰ সৈতে মিল থকা কোনো সেৱা পোৱা নগ'ল।",
  },
  service: {
    overview: 'সংক্ষিপ্ত বিবৰণ',
    whyNeeded: 'কিয় প্ৰয়োজন',
    eligibility: 'যোগ্যতা',
    documents: 'প্ৰয়োজনীয় নথিপত্ৰ',
    process: 'ধাপ-ধাপে প্ৰক্ৰিয়া',
    applyNow: 'অফিচিয়েল আবেদন লিংক',
  },
  chat: {
    title: 'Saathi',
    greeting: 'হাই 👋 আমি সাথী - আপনার AI সহকারী।',
    serverDown: 'দুঃখিত, সার্ভার ডাউন আছে\nআমি আপনাকে শীঘ্রই গাইড করব,\nততক্ষণে আপনি নিচের রিসোর্সগুলি দেখতে পারেন 👇',
    placeholder: 'কিছু জিজ্ঞাসা করুন...',
    typing: 'AI টাইপ করছে...',
  },
}


const panCardTranslations: Record<Language, ServiceTranslation> = {
  en: {
    title: 'PAN Card',
    description: 'Permanent Account Number for financial transactions.',
    overview: 'The PAN card is a unique 10-digit alphanumeric identifier issued by the Income Tax Department.',
    whyNeeded: 'Essential for opening bank accounts, receiving taxable salary, and professional transactions.',
    eligibility: 'Any Indian citizen aged 18 or above.',
    documents: ['Aadhar Card', 'Proof of Date of Birth', 'Recent Photographs'],
    process: [
      'Visit the NSDL or UTIITSL website.',
      'Fill out Form 49A.',
      'Upload required documents.',
      'Pay the processing fee.',
      'Receive PAN card via post.'
    ],
  },
  hi: {
    title: 'पैन कार्ड',
    description: 'वित्तीय लेनदेन के लिए स्थायी खाता संख्या।',
    overview: 'पैन कार्ड आयकर विभाग द्वारा जारी एक अद्वितीय 10-अंकीय अल्फ़ान्यूमेरिक पहचानकर्ता है।',
    whyNeeded: 'बैंक खाते खोलने, कर योग्य वेतन प्राप्त करने और व्यावसायिक लेनदेन के लिए आवश्यक।',
    eligibility: '18 वर्ष या उससे अधिक आयु का कोई भी भारतीय नागरिक।',
    documents: ['आधार कार्ड', 'जन्म तिथि का प्रमाण', 'हाल की तस्वीरें'],
    process: [
      'NSDL या UTIITSL वेबसाइट पर जाएं।',
      'फॉर्म 49A भरें।',
      'आवश्यक दस्तावेज अपलोड करें।',
      'प्रसंस्करण शुल्क का भुगतान करें।',
      'पोस्ट के माध्यम से पैन कार्ड प्राप्त करें।'
    ],
  },
  gu: {
    title: 'પાન કાર્ડ',
    description: 'નાણાકીય વ્યવહારો માટે કાયમી ખાતા નંબર.',
    overview: 'પાન કાર્ડ એ આવકવેરા વિભાગ દ્વારા જારી કરાયેલ અનન્ય 10-અંકનો આલ્ફાન્યૂમેરિક ઓળખકર્તા છે.',
    whyNeeded: 'બેંક ખાતા ખોલવા, કરપાત્ર પગાર મેળવવા અને વ્યાવસાયિક વ્યવહારો માટે આવશ્યક.',
    eligibility: '18 વર્ષ કે તેથી વધુ ઉંમરના કોઈપણ ભારતીય નાગરિક.',
    documents: ['આધાર કાર્ડ', 'જન્મ તારીખનો પુરાવો', 'તાજેતરના ફોટોગ્રાફ્સ'],
    process: [
      'NSDL અથવા UTIITSL વેબસાઇટની મુલાકાત લો.',
      'ફોર્મ 49A ભરો.',
      'જરૂરી દસ્તાવેજો અપલોડ કરો.',
      'પ્રોસેસિંગ ફી ચૂકવો.',
      'પોસ્ટ દ્વારા પાન કાર્ડ મેળવો.'
    ],
  },
  ta: {
    title: 'பான் கார்டு',
    description: 'நிதி பரிவர்த்தனைகளுக்கான நிரந்தர கணக்கு எண்.',
    overview: 'பான் கார்டு என்பது வருமான வரித் துறையினால் வழங்கப்படும் தனித்துவமான 10 இலக்க எண்ணெழுத்து அடையாளமாகும்.',
    whyNeeded: 'வங்கி கணக்குகளைத் தொடங்கவும், வரிக்கு உட்பட்ட சம்பளத்தைப் பெறவும், தொழில்முறை பரிவர்த்தனைகளுக்கும் அவசியம்.',
    eligibility: '18 வயது அல்லது அதற்கு மேற்பட்ட இந்திய குடிமகன் எவரும்.',
    documents: ['ஆதார் அட்டை', 'பிறந்த தேதிக்கான சான்று', 'சமீபத்திய புகைப்படங்கள்'],
    process: [
      'NSDL அல்லது UTIITSL இணையதளத்தைப் பார்வையிடவும்.',
      'படிவம் 49A ஐ நிரப்பவும்.',
      'தேவையான ஆவணங்களைப் பதிவேற்றவும்.',
      'செயலாக்கக் கட்டணத்தைச் செலுத்தவும்.',
      'தபால் மூலம் பான் கார்டைப் பெறவும்.'
    ],
  },
  te: {
  title: 'పాన్ కార్డ్',
  description: 'ఆర్థిక లావాదేవీల కోసం శాశ్వత ఖాతా సంఖ్య.',
  overview: 'పాన్ కార్డ్ అనేది ఆదాయ పన్ను శాఖ జారీ చేసే ప్రత్యేక 10 అంకెల అల్ఫాన్యూమరిక్ గుర్తింపు సంఖ్య.',
  whyNeeded: 'బ్యాంక్ ఖాతా తెరవడానికి, జీతం పొందడానికి మరియు వృత్తి సంబంధిత లావాదేవీలకు అవసరం.',
  eligibility: '18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు ఉన్న భారతీయ పౌరుడు.',
  documents: ['ఆధార్ కార్డ్', 'పుట్టిన తేదీ రుజువు', 'తాజా ఫోటోలు'],
  process: [
    'NSDL లేదా UTIITSL వెబ్‌సైట్‌ను సందర్శించండి.',
    'ఫారమ్ 49A పూరించండి.',
    'అవసరమైన పత్రాలను అప్లోడ్ చేయండి.',
    'ప్రాసెసింగ్ ఫీజు చెల్లించండి.',
    'పాన్ కార్డ్‌ను పోస్టు ద్వారా పొందండి.'
  ],
  },
  pa: {
  title: 'ਪੈਨ ਕਾਰਡ',
  description: 'ਵਿੱਤੀ ਲੈਣ-ਦੇਣ ਲਈ ਸਥਾਈ ਖਾਤਾ ਨੰਬਰ।',
  overview: 'ਪੈਨ ਕਾਰਡ ਆਇਨਕਮ ਟੈਕਸ ਵਿਭਾਗ ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਗਿਆ 10 ਅੰਕਾਂ ਦਾ ਵਿਲੱਖਣ ਅਲਫਾਨਿਊਮੈਰਿਕ ਨੰਬਰ ਹੈ।',
  whyNeeded: 'ਬੈਂਕ ਖਾਤਾ ਖੋਲ੍ਹਣ, ਤਨਖਾਹ ਪ੍ਰਾਪਤ ਕਰਨ ਅਤੇ ਪੇਸ਼ੇਵਰ ਲੈਣ-ਦੇਣ ਲਈ ਜ਼ਰੂਰੀ ਹੈ।',
  eligibility: '18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦਾ ਕੋਈ ਵੀ ਭਾਰਤੀ ਨਾਗਰਿਕ।',
  documents: ['ਆਧਾਰ ਕਾਰਡ', 'ਜਨਮ ਮਿਤੀ ਦਾ ਸਬੂਤ', 'ਹਾਲੀਆ ਫੋਟੋਆਂ'],
  process: [
    'NSDL ਜਾਂ UTIITSL ਵੈਬਸਾਈਟ ਤੇ ਜਾਓ।',
    'ਫਾਰਮ 49A ਭਰੋ।',
    'ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ।',
    'ਪ੍ਰੋਸੈਸਿੰਗ ਫੀਸ ਭਰੋ।',
    'ਡਾਕ ਰਾਹੀਂ ਪੈਨ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ।'
  ],
  },
  mr: {
  title: 'पॅन कार्ड',
  description: 'आर्थिक व्यवहारांसाठी कायमस्वरूपी खाते क्रमांक.',
  overview: 'पॅन कार्ड हा आयकर विभागाद्वारे दिलेला 10 अंकी अल्फान्यूमेरिक ओळख क्रमांक आहे.',
  whyNeeded: 'बँक खाते उघडण्यासाठी, पगार मिळवण्यासाठी आणि व्यावसायिक व्यवहारांसाठी आवश्यक आहे.',
  eligibility: '18 वर्षे किंवा त्याहून अधिक वयाचा कोणताही भारतीय नागरिक.',
  documents: ['आधार कार्ड', 'जन्मतारीख पुरावा', 'अलीकडील फोटो'],
  process: [
    'NSDL किंवा UTIITSL वेबसाइटला भेट द्या.',
    'फॉर्म 49A भरा.',
    'आवश्यक कागदपत्रे अपलोड करा.',
    'प्रोसेसिंग फी भरा.',
    'पोस्टद्वारे पॅन कार्ड मिळवा.'
  ],
  },
  bn: {
  title: 'প্যান কার্ড',
  description: 'আর্থিক লেনদেনের জন্য স্থায়ী অ্যাকাউন্ট নম্বর।',
  overview: 'প্যান কার্ড আয়কর বিভাগ দ্বারা জারি করা একটি 10 অঙ্কের অনন্য আলফানিউমেরিক আইডি।',
  whyNeeded: 'ব্যাংক অ্যাকাউন্ট খোলা, বেতন গ্রহণ এবং পেশাগত লেনদেনের জন্য প্রয়োজন।',
  eligibility: '১৮ বছর বা তার বেশি বয়সী যে কোনো ভারতীয় নাগরিক।',
  documents: ['আধার কার্ড', 'জন্ম তারিখের প্রমাণ', 'সাম্প্রতিক ছবি'],
  process: [
    'NSDL বা UTIITSL ওয়েবসাইটে যান।',
    'ফর্ম 49A পূরণ করুন।',
    'প্রয়োজনীয় নথি আপলোড করুন।',
    'প্রসেসিং ফি প্রদান করুন।',
    'ডাকের মাধ্যমে প্যান কার্ড পান।'
  ],
  },
  ml: {
  title: 'പാൻ കാർഡ്',
  description: 'സാമ്പത്തിക ഇടപാടുകൾക്കുള്ള സ്ഥിര അക്കൗണ്ട് നമ്പർ.',
  overview: 'പാൻ കാർഡ് ഇൻകം ടാക്സ് വകുപ്പ് നൽകുന്ന 10 അക്ക അല്ഫാന്യൂമെറിക് ഐഡി ആണ്.',
  whyNeeded: 'ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ, ശമ്പളം ലഭിക്കാൻ, പ്രൊഫഷണൽ ഇടപാടുകൾക്കായി ആവശ്യമാണ്.',
  eligibility: '18 വയസോ അതിലധികമോ ഉള്ള ഇന്ത്യൻ പൗരൻ.',
  documents: ['ആധാർ കാർഡ്', 'ജനന തീയതി തെളിവ്', 'പുതിയ ഫോട്ടോകൾ'],
  process: [
    'NSDL അല്ലെങ്കിൽ UTIITSL വെബ്സൈറ്റ് സന്ദർശിക്കുക.',
    'ഫോം 49A പൂരിപ്പിക്കുക.',
    'ആവശ്യമായ രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക.',
    'പ്രോസസ്സിംഗ് ഫീസ് അടയ്ക്കുക.',
    'പോസ്റ്റിലൂടെ പാൻ കാർഡ് ലഭിക്കും.'
  ],
  },
  kn: {
  title: 'ಪ್ಯಾನ್ ಕಾರ್ಡ್',
  description: 'ಆರ್ಥಿಕ ವ್ಯವಹಾರಗಳಿಗೆ ಶಾಶ್ವತ ಖಾತೆ ಸಂಖ್ಯೆ.',
  overview: 'ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಆದಾಯ ತೆರಿಗೆ ಇಲಾಖೆಯಿಂದ ನೀಡಲಾಗುವ 10 ಅಂಕೆಗಳ ಅಲ್ಫಾನ್ಯೂಮೆರಿಕ್ ಗುರುತು ಸಂಖ್ಯೆ.',
  whyNeeded: 'ಬ್ಯಾಂಕ್ ಖಾತೆ ತೆರೆಯಲು, ವೇತನ ಪಡೆಯಲು ಮತ್ತು ವೃತ್ತಿಪರ ವ್ಯವಹಾರಗಳಿಗೆ ಅಗತ್ಯ.',
  eligibility: '18 ವರ್ಷ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಯಸ್ಸಿನ ಯಾವುದೇ ಭಾರತೀಯ ನಾಗರಿಕ.',
  documents: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಜನ್ಮ ದಿನಾಂಕದ ಪುರಾವೆ', 'ಇತ್ತೀಚಿನ ಫೋಟೋಗಳು'],
  process: [
    'NSDL ಅಥವಾ UTIITSL ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.',
    'ಫಾರ್ಮ್ 49A ಭರ್ತಿ ಮಾಡಿ.',
    'ಅವಶ್ಯಕ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    'ಪ್ರಕ್ರಿಯಾ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸಿ.',
    'ಪೋಸ್ಟ್ ಮೂಲಕ ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಿರಿ.'
  ],
  },
  ur: {
    title: 'پین کارڈ',
    description: 'مالی لین دین کے لیے مستقل اکاؤنٹ نمبر۔',
    overview: 'پین کارڈ انکم ٹیکس ڈیپارٹمنٹ کی طرف سے جاری کردہ ایک منفرد 10 ہندسوں کا حروف تہجی کا شناختی نمبر ہے۔',
    whyNeeded: 'بینک اکاؤنٹ کھولنے، ٹیکس کے قابل تنخواہ وصول کرنے اور پیشہ ورانہ لین دین کے لیے ضروری ہے۔',
    eligibility: 'کوئی بھی ہندوستانی شہری جس کی عمر 18 سال یا اس سے زیادہ ہو۔',
    documents: ['آدھار کارڈ', 'تاریخ پیدائش کا ثبوت', 'حالیہ تصاویر'],
    process: [
      'NSDL یا UTIITSL ویب سائٹ پر جائیں۔',
      'فارم 49A پُر کریں۔',
      'مطلوبہ دستاویزات اپ لوڈ کریں۔',
      'پروسیسنگ فیس ادا کریں۔',
      'پوسٹ کے ذریعے پین کارڈ وصول کریں۔'
    ],
  },
  am: {
     title: 'PAN Card',
    description: 'Permanent Account Number for financial transactions.',
    overview: 'The PAN card is a unique 10-digit alphanumeric identifier issued by the Income Tax Department.',
    whyNeeded: 'Essential for opening bank accounts, receiving taxable salary, and professional transactions.',
    eligibility: 'Any Indian citizen aged 18 or above.',
    documents: ['Aadhar Card', 'Proof of Date of Birth', 'Recent Photographs'],
    process: [
      'Visit the NSDL or UTIITSL website.',
      'Fill out Form 49A.',
      'Upload required documents.',
      'Pay the processing fee.',
      'Receive PAN card via post.'
    ],
  },
};

// Helper to fill missing service translations with English
const fillMissing = (trans: Record<Language, ServiceTranslation>) => {
  const result = { ...trans };
  LANGUAGES.forEach(lang => {
    if (!result[lang.code]) {
      result[lang.code] = trans.en;
    }
  });
  return result;
};

export const SERVICES: Service[] = [
  {
    id: 'pan-card',
    icon: '💳',
    applyLink: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder demo video
    translations: fillMissing(panCardTranslations),
  },
  {
    id: 'voter-id',
    icon: '🗳️',
    applyLink: 'https://www.nvsp.in/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translations: fillMissing({
      en: {
        title: 'Voter ID',
        description: 'Identity card for voting in Indian elections.',
        overview: 'The Elector Photo Identity Card (EPIC) is issued by the Election Commission of India.',
        whyNeeded: 'Allows you to exercise your right to vote and serves as a valid identity proof.',
        eligibility: 'Indian citizen, 18 years of age on the qualifying date.',
        documents: ['Aadhar Card', 'Address Proof', 'Age Proof'],
        process: [
          'Visit the NVSP portal.',
          'Register as a new voter (Form 6).',
          'Upload documents and photo.',
          'Verification by Booth Level Officer (BLO).',
          'Receive Voter ID card.'
        ],
      },
      hi: {
        title: 'मतदाता पहचान पत्र',
        description: 'भारतीय चुनावों में मतदान के लिए पहचान पत्र।',
        overview: 'निर्वाचक फोटो पहचान पत्र (EPIC) भारत निर्वाचन आयोग द्वारा जारी किया जाता है।',
        whyNeeded: 'आपको अपने मतदान के अधिकार का प्रयोग करने की अनुमति देता है और एक वैध पहचान प्रमाण के रूप में कार्य करता है।',
        eligibility: 'भारतीय नागरिक, अर्हक तिथि पर 18 वर्ष की आयु।',
        documents: ['आधार कार्ड', 'पते का प्रमाण', 'आयु का प्रमाण'],
        process: [
          'NVSP पोर्टल पर जाएं।',
          'नए मतदाता के रूप में पंजीकरण करें (फॉर्म 6)।',
          'दस्तावेज और फोटो अपलोड करें।',
          'बूथ स्तर के अधिकारी (BLO) द्वारा सत्यापन।',
          'मतदाता पहचान पत्र प्राप्त करें।'
        ],
      },
      gu: {
  title: 'મતદાર ઓળખ કાર્ડ',
  description: 'ભારતીય ચૂંટણીમાં મતદાન માટેનું ઓળખપત્ર.',
  overview: 'ઇલેક્ટર ફોટો આઈડેન્ટિટી કાર્ડ (EPIC) ભારતના ચૂંટણી આયોગ દ્વારા જારી થાય છે.',
  whyNeeded: 'તમને મતદાનનો અધિકાર આપે છે અને માન્ય ઓળખ તરીકે કામ કરે છે.',
  eligibility: 'ભારતીય નાગરિક, યોગ્ય તારીખે 18 વર્ષ કે તેથી વધુ.',
  documents: ['આધાર કાર્ડ', 'સરનામાનો પુરાવો', 'ઉંમરનો પુરાવો'],
  process: [
    'NVSP પોર્ટલ પર જાઓ.',
    'નવા મતદાર તરીકે નોંધણી કરો (ફોર્મ 6).',
    'દસ્તાવેજો અને ફોટો અપલોડ કરો.',
    'બૂથ લેવલ ઓફિસર (BLO) દ્વારા ચકાસણી.',
    'મતદાર ઓળખ કાર્ડ મેળવો.'
  ],
      },
      te: {
  title: 'ఓటర్ ఐడి కార్డ్',
  description: 'భారత ఎన్నికల్లో ఓటు వేయడానికి గుర్తింపు కార్డు.',
  overview: 'ఎలెక్టర్ ఫోటో ఐడెంటిటీ కార్డ్ (EPIC) భారత ఎన్నికల సంఘం ద్వారా జారీ చేయబడుతుంది.',
  whyNeeded: 'మీకు ఓటు హక్కును వినియోగించేందుకు సహాయపడుతుంది మరియు చెల్లుబాటు అయ్యే గుర్తింపు పత్రంగా ఉపయోగపడుతుంది.',
  eligibility: 'అర్హత తేదీ నాటికి 18 సంవత్సరాలు పూర్తి చేసిన భారతీయ పౌరుడు.',
  documents: ['ఆధార్ కార్డ్', 'చిరునామా రుజువు', 'వయస్సు రుజువు'],
  process: [
    'NVSP పోర్టల్‌ను సందర్శించండి.',
    'కొత్త ఓటరుగా నమోదు చేసుకోండి (ఫార్మ్ 6).',
    'పత్రాలు మరియు ఫోటోను అప్లోడ్ చేయండి.',
    'బూత్ లెవల్ అధికారి (BLO) ద్వారా ధృవీకరణ.',
    'ఓటర్ ఐడి కార్డ్ పొందండి.'
  ],
      },
      ta: {
  title: 'வாக்காளர் அடையாள அட்டை',
  description: 'இந்திய தேர்தல்களில் வாக்களிக்க பயன்படும் அடையாள அட்டை.',
  overview: 'Elector Photo Identity Card (EPIC) இந்திய தேர்தல் ஆணையத்தால் வழங்கப்படுகிறது.',
  whyNeeded: 'உங்கள் வாக்குரிமையை பயன்படுத்த உதவுகிறது மற்றும் செல்லுபடியாகும் அடையாள சான்றாக செயல்படுகிறது.',
  eligibility: 'தகுதி தேதியின்போது 18 வயது நிறைவடைந்த இந்திய குடிமகன்.',
  documents: ['ஆதார் அட்டை', 'முகவரி சான்று', 'வயது சான்று'],
  process: [
    'NVSP போர்டலை பார்வையிடவும்.',
    'புதிய வாக்காளராக பதிவு செய்யவும் (படிவம் 6).',
    'ஆவணங்கள் மற்றும் புகைப்படத்தை பதிவேற்றவும்.',
    'BLO மூலம் சரிபார்ப்பு.',
    'வாக்காளர் அடையாள அட்டை பெறவும்.'
  ],
      },
      kn: {
  title: 'ಮತದಾರ ಗುರುತಿನ ಚೀಟಿ',
  description: 'ಭಾರತೀಯ ಚುನಾವಣೆಯಲ್ಲಿ ಮತದಾನ ಮಾಡಲು ಬಳಸುವ ಗುರುತಿನ ಚೀಟಿ.',
  overview: 'ಎಲೆಕ್ಟರ್ ಫೋಟೋ ಐಡೆಂಟಿಟಿ ಕಾರ್ಡ್ (EPIC) ಭಾರತ ಚುನಾವಣಾ ಆಯೋಗದಿಂದ ನೀಡಲಾಗುತ್ತದೆ.',
  whyNeeded: 'ನಿಮಗೆ ಮತದಾನದ ಹಕ್ಕನ್ನು ಬಳಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಮಾನ್ಯ ಗುರುತಿನ ದಾಖಲೆ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
  eligibility: 'ಅರ್ಹ ದಿನಾಂಕಕ್ಕೆ 18 ವರ್ಷ ಪೂರ್ಣಗೊಂಡ ಭಾರತೀಯ ನಾಗರಿಕ.',
  documents: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ವಿಳಾಸದ ಪುರಾವೆ', 'ವಯಸ್ಸಿನ ಪುರಾವೆ'],
  process: [
    'NVSP ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.',
    'ಹೊಸ ಮತದಾರರಾಗಿ ನೋಂದಣಿ ಮಾಡಿ (ಫಾರ್ಮ್ 6).',
    'ದಾಖಲೆಗಳು ಮತ್ತು ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    'ಬೂತ್ ಲೆವಲ್ ಅಧಿಕಾರಿ (BLO) ಮೂಲಕ ಪರಿಶೀಲನೆ.',
    'ಮತದಾರ ಗುರುತಿನ ಚೀಟಿ ಪಡೆಯಿರಿ.'
  ],
      },
      ml: {
  title: 'വോട്ടർ ഐഡി കാർഡ്',
  description: 'ഇന്ത്യൻ തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാനുള്ള തിരിച്ചറിയൽ കാർഡ്.',
  overview: 'Elector Photo Identity Card (EPIC) ഇന്ത്യയിലെ തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ നൽകുന്നതാണ്.',
  whyNeeded: 'നിങ്ങളുടെ വോട്ടവകാശം ഉപയോഗിക്കാൻ സഹായിക്കുന്നു, കൂടാതെ സാധുവായ തിരിച്ചറിയൽ രേഖയായി പ്രവർത്തിക്കുന്നു.',
  eligibility: 'യോഗ്യതാ തീയതിയിൽ 18 വയസ് പൂർത്തിയായ ഇന്ത്യൻ പൗരൻ.',
  documents: ['ആധാർ കാർഡ്', 'വിലാസ തെളിവ്', 'പ്രായ തെളിവ്'],
  process: [
    'NVSP പോർട്ടൽ സന്ദർശിക്കുക.',
    'പുതിയ വോട്ടറായി രജിസ്റ്റർ ചെയ്യുക (ഫോം 6).',
    'രേഖകളും ഫോട്ടോയും അപ്‌ലോഡ് ചെയ്യുക.',
    'BLO വഴി പരിശോധന.',
    'വോട്ടർ ഐഡി കാർഡ് ലഭിക്കും.'
  ],
      },
      mr: {
  title: 'मतदार ओळखपत्र',
  description: 'भारतीय निवडणुकांमध्ये मतदानासाठी ओळखपत्र.',
  overview: 'इलेक्टर फोटो आयडेंटिटी कार्ड (EPIC) भारत निवडणूक आयोगाद्वारे दिले जाते.',
  whyNeeded: 'मतदानाचा अधिकार वापरण्यास मदत करते आणि वैध ओळखपत्र म्हणून कार्य करते.',
  eligibility: 'अर्ह दिनांकापर्यंत 18 वर्षे पूर्ण केलेला भारतीय नागरिक.',
  documents: ['आधार कार्ड', 'पत्त्याचा पुरावा', 'वयाचा पुरावा'],
  process: [
    'NVSP पोर्टलला भेट द्या.',
    'नवीन मतदार म्हणून नोंदणी करा (फॉर्म 6).',
    'कागदपत्रे आणि फोटो अपलोड करा.',
    'BLO द्वारे पडताळणी.',
    'मतदार ओळखपत्र मिळवा.'
  ],
      },
      bn: {
  title: 'ভোটার আইডি কার্ড',
  description: 'ভারতের নির্বাচনে ভোট দেওয়ার জন্য পরিচয়পত্র।',
  overview: 'Elector Photo Identity Card (EPIC) ভারত নির্বাচন কমিশন দ্বারা জারি করা হয়।',
  whyNeeded: 'আপনাকে ভোটাধিকার প্রয়োগ করতে সাহায্য করে এবং একটি বৈধ পরিচয়পত্র হিসেবে কাজ করে।',
  eligibility: 'যোগ্যতার তারিখ অনুযায়ী ১৮ বছর বা তার বেশি বয়সী ভারতীয় নাগরিক।',
  documents: ['আধার কার্ড', 'ঠিকানার প্রমাণ', 'বয়সের প্রমাণ'],
  process: [
    'NVSP পোর্টালে যান।',
    'নতুন ভোটার হিসেবে নিবন্ধন করুন (ফর্ম 6)।',
    'নথি এবং ছবি আপলোড করুন।',
    'BLO দ্বারা যাচাই।',
    'ভোটার আইডি কার্ড পান।'
  ],
      },
      pa: {
  title: 'ਵੋਟਰ ਆਈਡੀ ਕਾਰਡ',
  description: 'ਭਾਰਤੀ ਚੋਣਾਂ ਵਿੱਚ ਵੋਟ ਪਾਉਣ ਲਈ ਪਹਿਚਾਣ ਪੱਤਰ।',
  overview: 'ਇਲੈਕਟਰ ਫੋਟੋ ਆਈਡੈਂਟੀਟੀ ਕਾਰਡ (EPIC) ਭਾਰਤ ਚੋਣ ਆਯੋਗ ਵੱਲੋਂ ਜਾਰੀ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
  whyNeeded: 'ਤੁਹਾਨੂੰ ਵੋਟ ਦਾ ਅਧਿਕਾਰ ਵਰਤਣ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ ਅਤੇ ਇੱਕ ਵੈਧ ਪਛਾਣ ਪੱਤਰ ਵਜੋਂ ਕੰਮ ਕਰਦਾ ਹੈ।',
  eligibility: 'ਯੋਗ ਤਾਰੀਖ ਤੇ 18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦਾ ਭਾਰਤੀ ਨਾਗਰਿਕ।',
  documents: ['ਆਧਾਰ ਕਾਰਡ', 'ਪਤੇ ਦਾ ਸਬੂਤ', 'ਉਮਰ ਦਾ ਸਬੂਤ'],
  process: [
    'NVSP ਪੋਰਟਲ ਤੇ ਜਾਓ।',
    'ਨਵੇਂ ਵੋਟਰ ਵਜੋਂ ਰਜਿਸਟਰ ਕਰੋ (ਫਾਰਮ 6)।',
    'ਦਸਤਾਵੇਜ਼ ਅਤੇ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।',
    'BLO ਦੁਆਰਾ ਜਾਂਚ।',
    'ਵੋਟਰ ਆਈਡੀ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ।'
  ],
      },
      ur: {
  title: 'ووٹر آئی ڈی کارڈ',
  description: 'بھارتی انتخابات میں ووٹ ڈالنے کے لیے شناختی کارڈ۔',
  overview: 'Elector Photo Identity Card (EPIC) الیکشن کمیشن آف انڈیا کی طرف سے جاری کیا جاتا ہے۔',
  whyNeeded: 'آپ کو ووٹ دینے کا حق استعمال کرنے میں مدد دیتا ہے اور ایک درست شناختی ثبوت کے طور پر کام کرتا ہے۔',
  eligibility: 'اہلیت کی تاریخ پر 18 سال یا اس سے زیادہ عمر کا بھارتی شہری۔',
  documents: ['آدھار کارڈ', 'پتے کا ثبوت', 'عمر کا ثبوت'],
  process: [
    'NVSP پورٹل پر جائیں۔',
    'نئے ووٹر کے طور پر رجسٹر کریں (فارم 6).',
    'دستاویزات اور تصویر اپ لوڈ کریں۔',
    'BLO کے ذریعے تصدیق۔',
    'ووٹر آئی ڈی کارڈ حاصل کریں۔'
  ],
      },
    } as any),
  },
  {
    id: 'driving-license',
    icon: '🚗',
    applyLink: 'https://sarathi.parivahan.gov.in/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translations: fillMissing({
      en: {
        title: 'Driving License',
        description: 'Official document permitting you to operate motor vehicles.',
        overview: 'Issued by Regional Transport Offices (RTO) across India.',
        whyNeeded: 'Legal requirement to drive a vehicle on public roads.',
        eligibility: '18 years for gear vehicles, 16 years for gearless (below 50cc).',
        documents: ['Learner License', 'Address Proof', 'Age Proof', 'Form 1 & 1A'],
        process: [
          'Apply for a Learner License first.',
          'Complete the mandatory waiting period (30 days).',
          'Book a slot for the driving test.',
          'Pass the driving test at RTO.',
          'Receive Driving License.'
        ],
      },
      hi: {
        title: 'ड्राइविंग लाइसेंस',
        description: 'मोटर वाहन चलाने की अनुमति देने वाला आधिकारिक दस्तावेज।',
        overview: 'पूरे भारत में क्षेत्रीय परिवहन कार्यालयों (RTO) द्वारा जारी किया जाता है।',
        whyNeeded: 'सार्वजनिक सड़कों पर वाहन चलाने के लिए कानूनी आवश्यकता।',
        eligibility: 'गियर वाले वाहनों के लिए 18 वर्ष, बिना गियर वाले (50cc से कम) के लिए 16 वर्ष।',
        documents: ['लर्नर लाइसेंस', 'पते का प्रमाण', 'आयु का प्रमाण', 'फॉर्म 1 और 1A'],
        process: [
          'सबसे पहले लर्नर लाइसेंस के लिए आवेदन करें।',
          'अनिवार्य प्रतीक्षा अवधि (30 दिन) पूरी करें।',
          'ड्राइविंग टेस्ट के लिए स्लॉट बुक करें।',
          'RTO में ड्राइविंग टेस्ट पास करें।',
          'ड्राइविंग लाइसेंस प्राप्त करें।'
        ],
      },
      gu: {
  title: 'ડ્રાઇવિંગ લાઇસન્સ',
  description: 'મોટર વાહન ચલાવવા માટેનું સત્તાવાર દસ્તાવેજ.',
  overview: 'ભારતભરમાં પ્રાદેશિક પરિવહન કચેરીઓ (RTO) દ્વારા જારી થાય છે.',
  whyNeeded: 'સાર્વજનિક રસ્તાઓ પર વાહન ચલાવવા માટે કાયદેસર જરૂરી છે.',
  eligibility: 'ગિયર વાહનો માટે 18 વર્ષ, ગિયર વગર (50cc થી ઓછા) માટે 16 વર્ષ.',
  documents: ['લર્નર લાઇસન્સ', 'સરનામાનો પુરાવો', 'ઉંમરનો પુરાવો', 'ફોર્મ 1 અને 1A'],
  process: [
    'સૌ પ્રથમ લર્નર લાયસન્સ માટે અરજી કરો.',
    'ફરજિયાત રાહ જોવાની અવધિ (30 દિવસ) પૂર્ણ કરો.',
    'ડ્રાઇવિંગ ટેસ્ટ માટે સ્લોટ બુક કરો.',
    'RTO માં ડ્રાઇવિંગ ટેસ્ટ પાસ કરો.',
    'ડ્રાઇવિંગ લાઇસન્સ મેળવો.'
  ],
      },
      te: {
  title: 'డ్రైవింగ్ లైసెన్స్',
  description: 'మోటారు వాహనాలు నడపడానికి అనుమతించే అధికారిక పత్రం.',
  overview: 'భారతదేశంలో ప్రాంతీయ రవాణా కార్యాలయాలు (RTO) ద్వారా జారీ చేయబడుతుంది.',
  whyNeeded: 'ప్రజా రహదారులపై వాహనం నడపడానికి చట్టపరంగా అవసరం.',
  eligibility: 'గేర్ వాహనాలకు 18 సంవత్సరాలు, గేర్ లేని (50cc కంటే తక్కువ) కోసం 16 సంవత్సరాలు.',
  documents: ['లెర్నర్ లైసెన్స్', 'చిరునామా రుజువు', 'వయస్సు రుజువు', 'ఫారం 1 & 1A'],
  process: [
    'మొదట లెర్నర్ లైసెన్స్ కోసం దరఖాస్తు చేయండి.',
    'తప్పనిసరి నిరీక్షణ కాలం (30 రోజులు) పూర్తి చేయండి.',
    'డ్రైవింగ్ టెస్ట్ కోసం స్లాట్ బుక్ చేయండి.',
    'RTOలో డ్రైవింగ్ టెస్ట్ పాస్ అవ్వండి.',
    'డ్రైవింగ్ లైసెన్స్ పొందండి.'
  ],
      },
      ta: {
  title: 'டிரைவிங் லைசென்ஸ்',
  description: 'மோட்டார் வாகனங்களை இயக்க அனுமதிக்கும் அதிகாரப்பூர்வ ஆவணம்.',
  overview: 'இந்தியாவில் உள்ள பிராந்திய போக்குவரத்து அலுவலகங்கள் (RTO) மூலம் வழங்கப்படுகிறது.',
  whyNeeded: 'பொது சாலைகளில் வாகனம் ஓட்ட சட்டபூர்வமாக அவசியம்.',
  eligibility: 'கியர் வாகனங்களுக்கு 18 வயது, கியர் இல்லாத (50cc க்கும் குறைவான) வாகனங்களுக்கு 16 வயது.',
  documents: ['லர்னர் லைசென்ஸ்', 'முகவரி சான்று', 'வயது சான்று', 'படிவம் 1 & 1A'],
  process: [
    'முதலில் லர்னர் லைசென்ஸுக்கு விண்ணப்பிக்கவும்.',
    'கட்டாய காத்திருப்பு காலம் (30 நாட்கள்) முடிக்கவும்.',
    'டிரைவிங் டெஸ்டுக்கு ஸ்லாட் பதிவு செய்யவும்.',
    'RTOவில் டிரைவிங் டெஸ்ட் தேர்ச்சி பெறவும்.',
    'டிரைவிங் லைசென்ஸ் பெறவும்.'
  ],
      },
      kn: {
  title: 'ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್',
  description: 'ಮೋಟಾರು ವಾಹನಗಳನ್ನು ಚಾಲನೆ ಮಾಡಲು ಅನುಮತಿಸುವ ಅಧಿಕೃತ ದಾಖಲೆ.',
  overview: 'ಭಾರತದಾದ್ಯಂತ ಪ್ರಾದೇಶಿಕ ಸಾರಿಗೆ ಕಚೇರಿಗಳು (RTO) ಮೂಲಕ ನೀಡಲಾಗುತ್ತದೆ.',
  whyNeeded: 'ಸಾರ್ವಜನಿಕ ರಸ್ತೆಗಳ ಮೇಲೆ ವಾಹನ ಚಲಾಯಿಸಲು ಕಾನೂನುಬದ್ಧವಾಗಿ ಅಗತ್ಯ.',
  eligibility: 'ಗಿಯರ್ ವಾಹನಗಳಿಗೆ 18 ವರ್ಷ, ಗಿಯರ್ ಇಲ್ಲದ (50cc ಕ್ಕಿಂತ ಕಡಿಮೆ) ವಾಹನಗಳಿಗೆ 16 ವರ್ಷ.',
  documents: ['ಲರ್ನರ್ ಲೈಸೆನ್ಸ್', 'ವಿಳಾಸದ ಪುರಾವೆ', 'ವಯಸ್ಸಿನ ಪುರಾವೆ', 'ಫಾರ್ಮ್ 1 & 1A'],
  process: [
    'ಮೊದಲು ಲರ್ನರ್ ಲೈಸೆನ್ಸ್‌ಗೆ ಅರ್ಜಿ ಹಾಕಿ.',
    'ಕಡ್ಡಾಯ ನಿರೀಕ್ಷಾ ಅವಧಿ (30 ದಿನಗಳು) ಪೂರ್ಣಗೊಳಿಸಿ.',
    'ಡ್ರೈವಿಂಗ್ ಟೆಸ್ಟ್‌ಗಾಗಿ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ.',
    'RTO ನಲ್ಲಿ ಡ್ರೈವಿಂಗ್ ಟೆಸ್ಟ್ ಪಾಸ್ ಮಾಡಿ.',
    'ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ಪಡೆಯಿರಿ.'
  ],
      },
      ml: {
  title: 'ഡ്രൈവിംഗ് ലൈസൻസ്',
  description: 'മോട്ടോർ വാഹനങ്ങൾ ഓടിക്കാൻ അനുവദിക്കുന്ന ഔദ്യോഗിക രേഖ.',
  overview: 'ഇന്ത്യയിലെ റീജിയണൽ ട്രാൻസ്പോർട്ട് ഓഫീസുകൾ (RTO) വഴി നൽകപ്പെടുന്നു.',
  whyNeeded: 'പൊതു റോഡുകളിൽ വാഹനം ഓടിക്കാൻ നിയമപരമായി ആവശ്യമാണ്.',
  eligibility: 'ഗിയർ വാഹനങ്ങൾക്ക് 18 വയസ്സ്, ഗിയർ ഇല്ലാത്ത (50ccൽ താഴെ) വാഹനങ്ങൾക്ക് 16 വയസ്സ്.',
  documents: ['ലേണർ ലൈസൻസ്', 'വിലാസ തെളിവ്', 'പ്രായ തെളിവ്', 'ഫോം 1 & 1A'],
  process: [
    'ആദ്യം ലേണർ ലൈസൻസിന് അപേക്ഷിക്കുക.',
    'അനിവാര്യമായ കാത്തിരിപ്പ് കാലം (30 ദിവസം) പൂർത്തിയാക്കുക.',
    'ഡ്രൈവിംഗ് ടെസ്റ്റിന് സ്ലോട്ട് ബുക്ക് ചെയ്യുക.',
    'RTOയിൽ ഡ്രൈവിംഗ് ടെസ്റ്റ് പാസാക്കുക.',
    'ഡ്രൈവിംഗ് ലൈസൻസ് ലഭിക്കുക.'
  ],
      },
      mr: {
  title: 'ड्रायव्हिंग लायसन्स',
  description: 'मोटार वाहन चालवण्यासाठी अधिकृत परवाना.',
  overview: 'भारतभर प्रादेशिक परिवहन कार्यालयांद्वारे (RTO) दिला जातो.',
  whyNeeded: 'सार्वजनिक रस्त्यांवर वाहन चालवण्यासाठी कायदेशीर आवश्यकता.',
  eligibility: 'गिअर वाहनांसाठी 18 वर्षे, गिअर नसलेल्या (50cc पेक्षा कमी) साठी 16 वर्षे.',
  documents: ['लर्नर लायसन्स', 'पत्त्याचा पुरावा', 'वयाचा पुरावा', 'फॉर्म 1 आणि 1A'],
  process: [
    'सर्वप्रथम लर्नर लायसन्ससाठी अर्ज करा.',
    'अनिवार्य प्रतीक्षा कालावधी (30 दिवस) पूर्ण करा.',
    'ड्रायव्हिंग टेस्टसाठी स्लॉट बुक करा.',
    'RTO मध्ये ड्रायव्हिंग टेस्ट पास करा.',
    'ड्रायव्हिंग लायसन्स मिळवा.'
  ],
      },
      bn: {
  title: 'ড্রাইভিং লাইসেন্স',
  description: 'মোটর যান চালানোর অনুমতি প্রদানকারী সরকারি নথি।',
  overview: 'ভারতের আঞ্চলিক পরিবহন অফিস (RTO) দ্বারা প্রদান করা হয়।',
  whyNeeded: 'সার্বজনীন রাস্তায় যান চালানোর জন্য আইনত প্রয়োজনীয়।',
  eligibility: 'গিয়ারযুক্ত যানবাহনের জন্য ১৮ বছর, গিয়ারবিহীন (৫০cc এর নিচে) জন্য ১৬ বছর।',
  documents: ['লার্নার লাইসেন্স', 'ঠিকানার প্রমাণ', 'বয়সের প্রমাণ', 'ফর্ম 1 & 1A'],
  process: [
    'প্রথমে লার্নার লাইসেন্সের জন্য আবেদন করুন।',
    'বাধ্যতামূলক অপেক্ষার সময় (৩০ দিন) সম্পূর্ণ করুন।',
    'ড্রাইভিং টেস্টের জন্য স্লট বুক করুন।',
    'RTO-তে ড্রাইভিং টেস্ট পাস করুন।',
    'ড্রাইভিং লাইসেন্স পান।'
  ],
      },
      pa: {
  title: 'ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ',
  description: 'ਮੋਟਰ ਵਾਹਨ ਚਲਾਉਣ ਦੀ ਆਗਿਆ ਦੇਣ ਵਾਲਾ ਅਧਿਕਾਰਕ ਦਸਤਾਵੇਜ਼।',
  overview: 'ਭਾਰਤ ਵਿੱਚ ਰੀਜਨਲ ਟ੍ਰਾਂਸਪੋਰਟ ਆਫਿਸ (RTO) ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
  whyNeeded: "ਸਰਕਾਰੀ ਸੜਕਾਂ 'ਤੇ ਵਾਹਨ ਚਲਾਉਣ ਲਈ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਜ਼ਰੂਰੀ।'",
  eligibility: 'ਗਿਅਰ ਵਾਲੇ ਵਾਹਨਾਂ ਲਈ 18 ਸਾਲ, ਗਿਅਰ ਰਹਿਤ (50cc ਤੋਂ ਘੱਟ) ਲਈ 16 ਸਾਲ।',
  documents: ['ਲਰਨਰ ਲਾਇਸੈਂਸ', 'ਪਤੇ ਦਾ ਸਬੂਤ', 'ਉਮਰ ਦਾ ਸਬੂਤ', 'ਫਾਰਮ 1 ਅਤੇ 1A'],
  process: [
    'ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਲਰਨਰ ਲਾਇਸੈਂਸ ਲਈ ਅਰਜ਼ੀ ਦਿਓ।',
    'ਲਾਜ਼ਮੀ ਉਡੀਕ ਸਮਾਂ (30 ਦਿਨ) ਪੂਰਾ ਕਰੋ।',
    'ਡਰਾਈਵਿੰਗ ਟੈਸਟ ਲਈ ਸਲਾਟ ਬੁੱਕ ਕਰੋ।',
    'RTO ਵਿੱਚ ਡਰਾਈਵਿੰਗ ਟੈਸਟ ਪਾਸ ਕਰੋ।',
    'ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਪ੍ਰਾਪਤ ਕਰੋ।'
  ],
      },
      ur: {
  title: 'ڈرائیونگ لائسنس',
  description: 'موٹر گاڑی چلانے کی اجازت دینے والا سرکاری دستاویز۔',
  overview: 'یہ بھارت میں علاقائی ٹرانسپورٹ دفاتر (RTO) کی طرف سے جاری کیا جاتا ہے۔',
  whyNeeded: 'عوامی سڑکوں پر گاڑی چلانے کے لیے قانونی طور پر ضروری ہے۔',
  eligibility: 'گیئر والی گاڑیوں کے لیے 18 سال، بغیر گیئر (50cc سے کم) کے لیے 16 سال۔',
  documents: ['لرنر لائسنس', 'پتے کا ثبوت', 'عمر کا ثبوت', 'فارم 1 اور 1A'],
  process: [
    'سب سے پہلے لرنر لائسنس کے لیے درخواست دیں۔',
    'لازمی انتظار کی مدت (30 دن) مکمل کریں۔',
    'ڈرائیونگ ٹیسٹ کے لیے سلاٹ بک کریں۔',
    'RTO میں ڈرائیونگ ٹیسٹ پاس کریں۔',
    'ڈرائیونگ لائسنس حاصل کریں۔'
  ],
      },
    } as any),
  },
  {
    id: 'passport',
    icon: '🛂',
    applyLink: 'https://www.passportindia.gov.in/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translations: fillMissing({
      en: {
        title: 'Passport',
        description: 'Travel document for international travel.',
        overview: 'Issued by the Ministry of External Affairs.',
        whyNeeded: 'Required for traveling abroad and serves as strong identity/address proof.',
        eligibility: 'Indian citizen.',
        documents: ['Aadhar Card', 'Address Proof', 'Date of Birth Proof'],
        process: [
          'Register on Passport Seva portal.',
          'Fill application form online.',
          'Pay fee and schedule appointment.',
          'Visit Passport Seva Kendra (PSK) for verification.',
          'Police verification at your residence.',
          'Receive Passport via speed post.'
        ],
      },
      hi: {
        title: 'पासपोर्ट',
        description: 'अंतरराष्ट्रीय यात्रा के लिए यात्रा दस्तावेज।',
        overview: 'विदेश मंत्रालय द्वारा जारी किया जाता है।',
        whyNeeded: 'विदेश यात्रा के लिए आवश्यक और मजबूत पहचान/पते के प्रमाण के रूप में कार्य करता है।',
        eligibility: 'भारतीय नागरिक।',
        documents: ['आधार कार्ड', 'पते का प्रमाण', 'जन्म तिथि का प्रमाण'],
        process: [
          'पासपोर्ट सेवा पोर्टल पर पंजीकरण करें।',
          'ऑनलाइन आवेदन पत्र भरें।',
          'शुल्क का भुगतान करें और अपॉइंटमेंट शेड्यूल करें।',
          'सत्यापन के लिए पासपोर्ट सेवा केंद्र (PSK) पर जाएं।',
          'आपके निवास पर पुलिस सत्यापन।',
          'स्पीड पोस्ट के माध्यम से पासपोर्ट प्राप्त करें।'
        ],
      },
      gu: {
    title: 'પાસપોર્ટ',
    description: 'આંતરરાષ્ટ્રીય પ્રવાસ માટેનું દસ્તાવેજ.',
    overview: 'વિદેશ મંત્રાલય દ્વારા જારી થાય છે.',
    whyNeeded: 'વિદેશ પ્રવાસ માટે જરૂરી અને મજબૂત ઓળખ/સરનામા પુરાવા તરીકે કામ કરે છે.',
    eligibility: 'ભારતીય નાગરિક.',
    documents: ['આધાર કાર્ડ', 'સરનામાનો પુરાવો', 'જન્મ તારીખનો પુરાવો'],
    process: [
      'પાસપોર્ટ સેવા પોર્ટલ પર નોંધણી કરો.',
      'ઓનલાઇન અરજી ફોર્મ ભરો.',
      'ફી ચૂકવો અને એપોઇન્ટમેન્ટ શેડ્યૂલ કરો.',
      'ચકાસણી માટે પાસપોર્ટ સેવા કેન્દ્ર (PSK) પર જાઓ.',
      'તમારા સરનામે પોલીસ ચકાસણી થશે.',
      'સ્પીડ પોસ્ટ દ્વારા પાસપોર્ટ મેળવો.'
    ],
      },

      te: {
    title: 'పాస్‌పోర్ట్',
    description: 'అంతర్జాతీయ ప్రయాణం కోసం అవసరమైన పత్రం.',
    overview: 'విదేశాంగ మంత్రిత్వ శాఖ ద్వారా జారీ చేయబడుతుంది.',
    whyNeeded: 'విదేశాలకు వెళ్లడానికి అవసరం మరియు బలమైన గుర్తింపు/చిరునామా రుజువుగా పనిచేస్తుంది.',
    eligibility: 'భారతీయ పౌరుడు.',
    documents: ['ఆధార్ కార్డ్', 'చిరునామా రుజువు', 'పుట్టిన తేదీ రుజువు'],
    process: [
      'పాస్‌పోర్ట్ సేవా పోర్టల్‌లో నమోదు చేసుకోండి.',
      'ఆన్‌లైన్‌లో దరఖాస్తు ఫారం నింపండి.',
      'ఫీజు చెల్లించి అపాయింట్మెంట్ బుక్ చేయండి.',
      'పరిశీలన కోసం పాస్‌పోర్ట్ సేవా కేంద్రం (PSK)కి వెళ్లండి.',
      'మీ ఇంటికి పోలీస్ వెరిఫికేషన్ జరుగుతుంది.',
      'స్పీడ్ పోస్ట్ ద్వారా పాస్‌పోర్ట్ పొందండి.'
    ],
      },

      ta: {
    title: 'பாஸ்போர்ட்',
    description: 'சர்வதேச பயணத்திற்கான ஆவணம்.',
    overview: 'வெளிவிவகார அமைச்சகம் மூலம் வழங்கப்படுகிறது.',
    whyNeeded: 'வெளிநாடு பயணம் செய்ய அவசியம் மற்றும் வலுவான அடையாள/முகவரி சான்றாக செயல்படுகிறது.',
    eligibility: 'இந்திய குடிமகன்.',
    documents: ['ஆதார் அட்டை', 'முகவரி சான்று', 'பிறந்த தேதி சான்று'],
    process: [
      'பாஸ்போர்ட் சேவா போர்டலில் பதிவு செய்யவும்.',
      'ஆன்லைனில் விண்ணப்ப படிவத்தை நிரப்பவும்.',
      'கட்டணம் செலுத்தி நேரம் பதிவு செய்யவும்.',
      'சரிபார்ப்பிற்காக பாஸ்போர்ட் சேவா மையம் (PSK) செல்லவும்.',
      'உங்கள் வீட்டில் போலீஸ் சரிபார்ப்பு நடைபெறும்.',
      'ஸ்பீட் போஸ்ட் மூலம் பாஸ்போர்ட் பெறவும்.'
    ],
      },

      kn: {
    title: 'ಪಾಸ್‌ಪೋರ್ಟ್',
    description: 'ಅಂತರಾಷ್ಟ್ರೀಯ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಅಗತ್ಯವಾದ ದಾಖಲೆ.',
    overview: 'ವಿದೇಶಾಂಗ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯದಿಂದ ನೀಡಲಾಗುತ್ತದೆ.',
    whyNeeded: 'ವಿದೇಶ ಪ್ರವಾಸಕ್ಕೆ ಅಗತ್ಯ ಮತ್ತು ಬಲವಾದ ಗುರುತು/ವಿಳಾಸದ ದಾಖಲೆ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
    eligibility: 'ಭಾರತೀಯ ನಾಗರಿಕ.',
    documents: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ವಿಳಾಸದ ಪುರಾವೆ', 'ಜನ್ಮ ದಿನಾಂಕದ ಪುರಾವೆ'],
    process: [
      'ಪಾಸ್‌ಪೋರ್ಟ್ ಸೇವಾ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿ.',
      'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ.',
      'ಶುಲ್ಕ ಪಾವತಿಸಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ.',
      'ಪರಿಶೀಲನೆಗಾಗಿ ಪಾಸ್‌ಪೋರ್ಟ್ ಸೇವಾ ಕೇಂದ್ರ (PSK)ಗೆ ಭೇಟಿ ನೀಡಿ.',
      'ನಿಮ್ಮ ಮನೆಗೆ ಪೊಲೀಸ್ ಪರಿಶೀಲನೆ ನಡೆಯುತ್ತದೆ.',
      'ಸ್ಪೀಡ್ ಪೋಸ್ಟ್ ಮೂಲಕ ಪಾಸ್‌ಪೋರ್ಟ್ ಪಡೆಯಿರಿ.'
    ],
      },

      ml: {
    title: 'പാസ്പോർട്ട്',
    description: 'അന്താരാഷ്ട്ര യാത്രയ്ക്കുള്ള രേഖ.',
    overview: 'വിദേശകാര്യ മന്ത്രാലയം നൽകുന്നതാണ്.',
    whyNeeded: 'വിദേശത്തേക്ക് യാത്ര ചെയ്യാൻ ആവശ്യമാണ്, കൂടാതെ ശക്തമായ തിരിച്ചറിയൽ/വിലാസ രേഖയായി പ്രവർത്തിക്കുന്നു.',
    eligibility: 'ഇന്ത്യൻ പൗരൻ.',
    documents: ['ആധാർ കാർഡ്', 'വിലാസ തെളിവ്', 'ജനന തീയതി തെളിവ്'],
    process: [
      'പാസ്‌പോർട്ട് സേവാ പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്യുക.',
      'ഓൺലൈൻ അപേക്ഷ ഫോം പൂരിപ്പിക്കുക.',
      'ഫീസ് അടച്ച് അപോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക.',
      'പരിശോധനയ്ക്കായി പാസ്‌പോർട്ട് സേവാ കേന്ദ്രത്തിൽ (PSK) പോകുക.',
      'നിങ്ങളുടെ വീട്ടിൽ പോലീസ് പരിശോധന നടക്കും.',
      'സ്പീഡ് പോസ്റ്റിലൂടെ പാസ്‌പോർട്ട് ലഭിക്കും.'
    ],
      },

      mr: {
    title: 'पासपोर्ट',
    description: 'आंतरराष्ट्रीय प्रवासासाठी आवश्यक कागदपत्र.',
    overview: 'परराष्ट्र मंत्रालयाद्वारे दिले जाते.',
    whyNeeded: 'परदेशात जाण्यासाठी आवश्यक आणि मजबूत ओळख/पत्ता पुरावा म्हणून वापरले जाते.',
    eligibility: 'भारतीय नागरिक.',
    documents: ['आधार कार्ड', 'पत्त्याचा पुरावा', 'जन्मतारीख पुरावा'],
    process: [
      'पासपोर्ट सेवा पोर्टलवर नोंदणी करा.',
      'ऑनलाइन अर्ज फॉर्म भरा.',
      'शुल्क भरा आणि अपॉइंटमेंट ठरवा.',
      'पडताळणीसाठी पासपोर्ट सेवा केंद्र (PSK) ला भेट द्या.',
      'तुमच्या घरी पोलिस पडताळणी होईल.',
      'स्पीड पोस्टद्वारे पासपोर्ट मिळवा.'
    ],
      },

      bn: {
    title: 'পাসপোর্ট',
    description: 'আন্তর্জাতিক ভ্রমণের জন্য প্রয়োজনীয় নথি।',
    overview: 'বিদেশ মন্ত্রক দ্বারা জারি করা হয়।',
    whyNeeded: 'বিদেশ ভ্রমণের জন্য প্রয়োজন এবং একটি শক্তিশালী পরিচয়/ঠিকানা প্রমাণ হিসেবে কাজ করে।',
    eligibility: 'ভারতীয় নাগরিক।',
    documents: ['আধার কার্ড', 'ঠিকানার প্রমাণ', 'জন্ম তারিখের প্রমাণ'],
    process: [
      'পাসপোর্ট সেবা পোর্টালে নিবন্ধন করুন।',
      'অনলাইনে আবেদন ফর্ম পূরণ করুন।',
      'ফি প্রদান করে অ্যাপয়েন্টমেন্ট বুক করুন।',
      'যাচাইয়ের জন্য পাসপোর্ট সেবা কেন্দ্র (PSK) এ যান।',
      'আপনার বাসায় পুলিশ যাচাই হবে।',
      'স্পিড পোস্টের মাধ্যমে পাসপোর্ট পান।'
    ],
      },

      pa: {
    title: 'ਪਾਸਪੋਰਟ',
    description: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਯਾਤਰਾ ਲਈ ਦਸਤਾਵੇਜ਼।',
    overview: 'ਵਿਦੇਸ਼ ਮੰਤਰਾਲੇ ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
    whyNeeded: 'ਵਿਦੇਸ਼ ਜਾਣ ਲਈ ਜ਼ਰੂਰੀ ਅਤੇ ਮਜ਼ਬੂਤ ਪਛਾਣ/ਪਤਾ ਸਬੂਤ ਵਜੋਂ ਕੰਮ ਕਰਦਾ ਹੈ।',
    eligibility: 'ਭਾਰਤੀ ਨਾਗਰਿਕ।',
    documents: ['ਆਧਾਰ ਕਾਰਡ', 'ਪਤੇ ਦਾ ਸਬੂਤ', 'ਜਨਮ ਮਿਤੀ ਦਾ ਸਬੂਤ'],
    process: [
      'ਪਾਸਪੋਰਟ ਸੇਵਾ ਪੋਰਟਲ ਤੇ ਰਜਿਸਟਰ ਕਰੋ।',
      'ਆਨਲਾਈਨ ਅਰਜ਼ੀ ਫਾਰਮ ਭਰੋ।',
      'ਫੀਸ ਭਰੋ ਅਤੇ ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ।',
      'ਤਸਦੀਕ ਲਈ ਪਾਸਪੋਰਟ ਸੇਵਾ ਕੇਂਦਰ (PSK) ਤੇ ਜਾਓ।',
      'ਤੁਹਾਡੇ ਘਰ ਤੇ ਪੁਲਿਸ ਤਸਦੀਕ ਹੋਵੇਗੀ।',
      'ਸਪੀਡ ਪੋਸਟ ਰਾਹੀਂ ਪਾਸਪੋਰਟ ਪ੍ਰਾਪਤ ਕਰੋ।'
    ],
      },

      ur: {
    title: 'پاسپورٹ',
    description: 'بین الاقوامی سفر کے لیے دستاویز۔',
    overview: 'وزارت خارجہ کی طرف سے جاری کیا جاتا ہے۔',
    whyNeeded: 'بیرون ملک سفر کے لیے ضروری اور مضبوط شناخت/پتہ ثبوت کے طور پر کام کرتا ہے۔',
    eligibility: 'بھارتی شہری۔',
    documents: ['آدھار کارڈ', 'پتے کا ثبوت', 'تاریخ پیدائش کا ثبوت'],
    process: [
      'پاسپورٹ سیوا پورٹل پر رجسٹر کریں۔',
      'آن لائن درخواست فارم پُر کریں۔',
      'فیس ادا کریں اور اپائنٹمنٹ بک کریں۔',
      'تصدیق کے لیے پاسپورٹ سیوا کیندر (PSK) جائیں۔',
      'آپ کے گھر پر پولیس ویریفیکیشن ہوگی۔',
      'اسپیڈ پوسٹ کے ذریعے پاسپورٹ حاصل کریں۔'
    ],
      },
} as any),
  },
  {
    id: 'bank-account',
    icon: '🏦',
    applyLink: 'https://www.sbi.co.in/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translations: fillMissing({
  en: {
        title: 'Bank Account',
        description: 'Savings account for managing your finances.',
        overview: 'A basic savings bank deposit account.',
        whyNeeded: 'Safe place to keep money, earn interest, and perform digital transactions.',
        eligibility: 'Any individual aged 18 or above.',
        documents: ['Aadhar Card', 'PAN Card', 'Photographs'],
        process: [
          'Choose a bank (SBI, HDFC, ICICI, etc.).',
          'Visit the branch or apply online via mobile app.',
          'Complete Video KYC or physical verification.',
          'Deposit initial amount if required.',
          'Receive Debit Card and Cheque book.'
        ],
  },
  hi: {
        title: 'बैंक खाता',
        description: 'अपने वित्त के प्रबंधन के लिए बचत खाता।',
        overview: 'एक बुनियादी बचत बैंक जमा खाता।',
        whyNeeded: 'पैसे रखने, ब्याज कमाने और डिजिटल लेनदेन करने के लिए सुरक्षित जगह।',
        eligibility: '18 वर्ष या उससे अधिक आयु का कोई भी व्यक्ति।',
        documents: ['आधार कार्ड', 'पैन कार्ड', 'तस्वीरें'],
        process: [
          'एक बैंक चुनें (SBI, HDFC, ICICI, आदि)।',
          'शाखा पर जाएं या मोबाइल ऐप के माध्यम से ऑनलाइन आवेदन करें।',
          'वीडियो KYC या शारीरिक सत्यापन पूरा करें।',
          'यदि आवश्यक हो तो प्रारंभिक राशि जमा करें।',
          'डेबिट कार्ड और चेक बुक प्राप्त करें।'
        ],
  },
  gu: {
    title: 'બેંક એકાઉન્ટ',
    description: 'તમારા નાણાં સંચાલન માટેનું બચત ખાતું.',
    overview: 'મૂળભૂત બચત બેંક ખાતું.',
    whyNeeded: 'પૈસા સુરક્ષિત રાખવા, વ્યાજ કમાવવા અને ડિજિટલ ટ્રાન્ઝેક્શન કરવા માટે જરૂરી.',
    eligibility: '18 વર્ષ કે તેથી વધુ ઉંમરના કોઈપણ વ્યક્તિ.',
    documents: ['આધાર કાર્ડ', 'પાન કાર્ડ', 'ફોટોગ્રાફ્સ'],
    process: [
      'એક બેંક પસંદ કરો (SBI, HDFC, ICICI વગેરે).',
      'શાખા પર જાઓ અથવા મોબાઇલ એપ દ્વારા ઓનલાઇન અરજી કરો.',
      'વીડિયો KYC અથવા શારીરિક ચકાસણી પૂર્ણ કરો.',
      'જરૂર હોય તો પ્રારંભિક રકમ જમા કરો.',
      'ડેબિટ કાર્ડ અને ચેકબુક મેળવો.'
    ],
  },

  te: {
    title: 'బ్యాంక్ ఖాతా',
    description: 'మీ ఆర్థిక వ్యవహారాలను నిర్వహించడానికి సేవింగ్స్ ఖాతా.',
    overview: 'ఒక సాధారణ సేవింగ్స్ బ్యాంక్ ఖాతా.',
    whyNeeded: 'డబ్బును సురక్షితంగా ఉంచడానికి, వడ్డీ సంపాదించడానికి మరియు డిజిటల్ లావాదేవీలు చేయడానికి అవసరం.',
    eligibility: '18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు గల ఎవరైనా.',
    documents: ['ఆధార్ కార్డ్', 'పాన్ కార్డ్', 'ఫోటోలు'],
    process: [
      'ఒక బ్యాంక్ ఎంచుకోండి (SBI, HDFC, ICICI మొదలైనవి).',
      'శాఖకు వెళ్లండి లేదా మొబైల్ యాప్ ద్వారా ఆన్‌లైన్‌లో దరఖాస్తు చేయండి.',
      'వీడియో KYC లేదా భౌతిక ధృవీకరణ పూర్తి చేయండి.',
      'అవసరమైతే ప్రారంభ డిపాజిట్ చేయండి.',
      'డెబిట్ కార్డ్ మరియు చెక్ బుక్ పొందండి.'
    ],
  },

  ta: {
    title: 'வங்கி கணக்கு',
    description: 'உங்கள் நிதியை நிர்வகிக்க சேமிப்பு கணக்கு.',
    overview: 'ஒரு அடிப்படை சேமிப்பு வங்கி கணக்கு.',
    whyNeeded: 'பணத்தை பாதுகாப்பாக வைத்திருக்க, வட்டி சம்பாதிக்க மற்றும் டிஜிட்டல் பரிவர்த்தனைகள் செய்ய உதவும்.',
    eligibility: '18 வயது அல்லது அதற்கு மேற்பட்ட யாரும்.',
    documents: ['ஆதார் அட்டை', 'பான் கார்டு', 'புகைப்படங்கள்'],
    process: [
      'ஒரு வங்கியைத் தேர்ந்தெடுக்கவும் (SBI, HDFC, ICICI போன்றவை).',
      'கிளைக்கு சென்று அல்லது மொபைல் ஆப்பின் மூலம் ஆன்லைனில் விண்ணப்பிக்கவும்.',
      'வீடியோ KYC அல்லது நேரடி சரிபார்ப்பு முடிக்கவும்.',
      'தேவைப்பட்டால் ஆரம்ப தொகையை செலுத்தவும்.',
      'டெபிட் கார்டு மற்றும் காசோலை புத்தகம் பெறவும்.'
    ],
  },

  kn: {
    title: 'ಬ್ಯಾಂಕ್ ಖಾತೆ',
    description: 'ನಿಮ್ಮ ಹಣಕಾಸು ನಿರ್ವಹಣೆಗೆ ಉಳಿತಾಯ ಖಾತೆ.',
    overview: 'ಮೂಲಭೂತ ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆ.',
    whyNeeded: 'ಹಣವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇಡಲು, ಬಡ್ಡಿ ಗಳಿಸಲು ಮತ್ತು ಡಿಜಿಟಲ್ ವ್ಯವಹಾರಗಳನ್ನು ಮಾಡಲು ಅಗತ್ಯ.',
    eligibility: '18 ವರ್ಷ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ವಯಸ್ಸಿನ ಯಾವುದೇ ವ್ಯಕ್ತಿ.',
    documents: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಪ್ಯಾನ್ ಕಾರ್ಡ್', 'ಫೋಟೋಗಳು'],
    process: [
      'ಒಂದು ಬ್ಯಾಂಕ್ ಆಯ್ಕೆಮಾಡಿ (SBI, HDFC, ICICI ಇತ್ಯಾದಿ).',
      'ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಮೊಬೈಲ್ ಆಪ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      'ವೀಡಿಯೊ KYC ಅಥವಾ ಭೌತಿಕ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಿ.',
      'ಅಗತ್ಯವಿದ್ದರೆ ಪ್ರಾರಂಭಿಕ ಠೇವಣಿ ಮಾಡಿ.',
      'ಡೆಬಿಟ್ ಕಾರ್ಡ್ ಮತ್ತು ಚೆಕ್ ಬುಕ್ ಪಡೆಯಿರಿ.'
    ],
  },

  ml: {
    title: 'ബാങ്ക് അക്കൗണ്ട്',
    description: 'നിങ്ങളുടെ സാമ്പത്തിക കാര്യങ്ങൾ നിയന്ത്രിക്കാൻ സേവിംഗ്സ് അക്കൗണ്ട്.',
    overview: 'ഒരു അടിസ്ഥാന സേവിംഗ്സ് ബാങ്ക് അക്കൗണ്ട്.',
    whyNeeded: 'പണം സുരക്ഷിതമായി സൂക്ഷിക്കാൻ, പലിശ നേടാൻ, ഡിജിറ്റൽ ഇടപാടുകൾ നടത്താൻ ആവശ്യമാണ്.',
    eligibility: '18 വയസോ അതിലധികമോ ഉള്ള ആരും.',
    documents: ['ആധാർ കാർഡ്', 'പാൻ കാർഡ്', 'ഫോട്ടോകൾ'],
    process: [
      'ഒരു ബാങ്ക് തിരഞ്ഞെടുക്കുക (SBI, HDFC, ICICI മുതലായവ).',
      'ശാഖ സന്ദർശിക്കുക അല്ലെങ്കിൽ മൊബൈൽ ആപ്പിലൂടെ ഓൺലൈനായി അപേക്ഷിക്കുക.',
      'വീഡിയോ KYC അല്ലെങ്കിൽ ഫിസിക്കൽ വെരിഫിക്കേഷൻ പൂർത്തിയാക്കുക.',
      'ആവശ്യമായാൽ പ്രാരംഭ തുക നിക്ഷേപിക്കുക.',
      'ഡെബിറ്റ് കാർഡും ചെക്ക് ബുക്കും ലഭിക്കും.'
    ],
  },

  mr: {
    title: 'बँक खाते',
    description: 'आपले आर्थिक व्यवहार व्यवस्थापित करण्यासाठी बचत खाते.',
    overview: 'एक मूलभूत बचत बँक खाते.',
    whyNeeded: 'पैसे सुरक्षित ठेवण्यासाठी, व्याज मिळवण्यासाठी आणि डिजिटल व्यवहारांसाठी आवश्यक.',
    eligibility: '18 वर्षे किंवा त्याहून अधिक वयाचा कोणताही व्यक्ती.',
    documents: ['आधार कार्ड', 'पॅन कार्ड', 'फोटो'],
    process: [
      'एक बँक निवडा (SBI, HDFC, ICICI इ.).',
      'शाखेला भेट द्या किंवा मोबाइल अॅपद्वारे ऑनलाइन अर्ज करा.',
      'व्हिडिओ KYC किंवा प्रत्यक्ष पडताळणी पूर्ण करा.',
      'गरज असल्यास प्रारंभिक रक्कम जमा करा.',
      'डेबिट कार्ड आणि चेकबुक मिळवा.'
    ],
  },

  bn: {
    title: 'ব্যাংক অ্যাকাউন্ট',
    description: 'আপনার অর্থ ব্যবস্থাপনার জন্য সেভিংস অ্যাকাউন্ট।',
    overview: 'একটি সাধারণ সেভিংস ব্যাংক অ্যাকাউন্ট।',
    whyNeeded: 'টাকা নিরাপদে রাখার, সুদ অর্জনের এবং ডিজিটাল লেনদেনের জন্য প্রয়োজন।',
    eligibility: '১৮ বছর বা তার বেশি বয়সী যে কোনো ব্যক্তি।',
    documents: ['আধার কার্ড', 'প্যান কার্ড', 'ছবি'],
    process: [
      'একটি ব্যাংক নির্বাচন করুন (SBI, HDFC, ICICI ইত্যাদি)।',
      'শাখায় যান বা মোবাইল অ্যাপের মাধ্যমে অনলাইনে আবেদন করুন।',
      'ভিডিও KYC বা সরাসরি যাচাই সম্পন্ন করুন।',
      'প্রয়োজন হলে প্রাথমিক অর্থ জমা করুন।',
      'ডেবিট কার্ড এবং চেকবই পান।'
    ],
  },

  pa: {
    title: 'ਬੈਂਕ ਖਾਤਾ',
    description: 'ਤੁਹਾਡੇ ਵਿੱਤੀ ਪ੍ਰਬੰਧਨ ਲਈ ਬਚਤ ਖਾਤਾ।',
    overview: 'ਇੱਕ ਬੁਨਿਆਦੀ ਬਚਤ ਬੈਂਕ ਖਾਤਾ।',
    whyNeeded: 'ਪੈਸਾ ਸੁਰੱਖਿਅਤ ਰੱਖਣ, ਬਿਆਜ ਕਮਾਉਣ ਅਤੇ ਡਿਜਿਟਲ ਲੈਣ-ਦੇਣ ਲਈ ਜ਼ਰੂਰੀ।',
    eligibility: '18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦਾ ਕੋਈ ਵੀ ਵਿਅਕਤੀ।',
    documents: ['ਆਧਾਰ ਕਾਰਡ', 'ਪੈਨ ਕਾਰਡ', 'ਫੋਟੋਆਂ'],
    process: [
      'ਇੱਕ ਬੈਂਕ ਚੁਣੋ (SBI, HDFC, ICICI ਆਦਿ).',
      'ਸ਼ਾਖਾ ਤੇ ਜਾਓ ਜਾਂ ਮੋਬਾਈਲ ਐਪ ਰਾਹੀਂ ਆਨਲਾਈਨ ਅਰਜ਼ੀ ਦਿਓ.',
      'ਵੀਡੀਓ KYC ਜਾਂ ਫਿਜ਼ਿਕਲ ਵੈਰੀਫਿਕੇਸ਼ਨ ਪੂਰਾ ਕਰੋ.',
      'ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ ਸ਼ੁਰੂਆਤੀ ਰਕਮ ਜਮ੍ਹਾਂ ਕਰੋ.',
      'ਡੈਬਿਟ ਕਾਰਡ ਅਤੇ ਚੈਕ ਬੁੱਕ ਪ੍ਰਾਪਤ ਕਰੋ.'
    ],
  },

  ur: {
    title: 'بینک اکاؤنٹ',
    description: 'آپ کے مالی معاملات کو سنبھالنے کے لیے سیونگ اکاؤنٹ۔',
    overview: 'ایک بنیادی سیونگ بینک اکاؤنٹ۔',
    whyNeeded: 'پیسہ محفوظ رکھنے، منافع کمانے اور ڈیجیٹل لین دین کے لیے ضروری۔',
    eligibility: '18 سال یا اس سے زیادہ عمر کا کوئی بھی فرد۔',
    documents: ['آدھار کارڈ', 'پین کارڈ', 'تصاویر'],
    process: [
      'ایک بینک منتخب کریں (SBI, HDFC, ICICI وغیرہ).',
      'برانچ جائیں یا موبائل ایپ کے ذریعے آن لائن درخواست دیں.',
      'ویڈیو KYC یا فزیکل ویریفیکیشن مکمل کریں.',
      'اگر ضروری ہو تو ابتدائی رقم جمع کریں.',
      'ڈیبٹ کارڈ اور چیک بک حاصل کریں.'
    ],
  },
    } as any),
  },
  {
    id: 'sim-card',
    icon: '📱',
    applyLink: 'https://www.jio.com/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translations: fillMissing({
  en: {
        title: 'SIM Card',
        description: 'Mobile connection in your own name.',
        overview: 'Prepaid or Postpaid mobile connection.',
        whyNeeded: 'Essential for communication and OTP-based digital services.',
        eligibility: '18 years or above for independent connection.',
        documents: ['Aadhar Card (e-KYC)'],
        process: [
          'Visit a mobile operator store (Jio, Airtel, Vi).',
          'Provide Aadhar number for e-KYC.',
          'Complete biometric or OTP verification.',
          'Select a plan.',
          'Activate SIM card.'
        ],
  },
  hi: {
        title: 'सिम कार्ड',
        description: 'अपने नाम पर mobile connection।',
        overview: 'प्रीपेड या पोस्टपेड मोबाइल कनेक्शन।',
        whyNeeded: 'संचार और OTP-आधारित डिजिटल सेवाओं के लिए आवश्यक।',
        eligibility: 'स्वतंत्र कनेक्शन के लिए 18 वर्ष या उससे अधिक।',
        documents: ['आधार कार्ड (e-KYC)'],
        process: [
          'मोबाइल ऑपरेटर स्टोर (Jio, Airtel, Vi) पर जाएं।',
          'e-KYC के लिए आधार नंबर प्रदान करें।',
          'बायोमेट्रिक या OTP सत्यापन पूरा करें।',
          'एक योजना चुनें।',
          'सिम कार्ड सक्रिय करें।'
        ],
  },
  gu: {
    title: 'સિમ કાર્ડ',
    description: 'તમારા નામે મોબાઇલ કનેક્શન.',
    overview: 'પ્રીપેઇડ અથવા પોસ્ટપેઇડ મોબાઇલ કનેક્શન.',
    whyNeeded: 'સંચાર અને OTP આધારિત ડિજિટલ સેવાઓ માટે જરૂરી.',
    eligibility: 'સ્વતંત્ર કનેક્શન માટે 18 વર્ષ અથવા તેથી વધુ.',
    documents: ['આધાર કાર્ડ (e-KYC)'],
    process: [
      'મોબાઇલ ઓપરેટર સ્ટોર (Jio, Airtel, Vi) પર જાઓ.',
      'e-KYC માટે આધાર નંબર આપો.',
      'બાયોમેટ્રિક અથવા OTP ચકાસણી પૂર્ણ કરો.',
      'એક પ્લાન પસંદ કરો.',
      'સિમ કાર્ડ સક્રિય કરો.'
    ],
  },

  te: {
    title: 'సిమ్ కార్డ్',
    description: 'మీ పేరుతో మొబైల్ కనెక్షన్.',
    overview: 'ప్రీపెయిడ్ లేదా పోస్ట్‌పెయిడ్ మొబైల్ కనెక్షన్.',
    whyNeeded: 'సంబంధం కోసం మరియు OTP ఆధారిత డిజిటల్ సేవలకు అవసరం.',
    eligibility: 'స్వతంత్ర కనెక్షన్ కోసం 18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ.',
    documents: ['ఆధార్ కార్డ్ (e-KYC)'],
    process: [
      'మొబైల్ ఆపరేటర్ స్టోర్ (Jio, Airtel, Vi) కి వెళ్లండి.',
      'e-KYC కోసం ఆధార్ నంబర్ ఇవ్వండి.',
      'బయోమెట్రిక్ లేదా OTP ధృవీకరణ పూర్తి చేయండి.',
      'ఒక ప్లాన్ ఎంచుకోండి.',
      'సిమ్ కార్డ్ యాక్టివేట్ చేయండి.'
    ],
  },

  ta: {
    title: 'சிம் கார்டு',
    description: 'உங்கள் பெயரில் மொபைல் இணைப்பு.',
    overview: 'ப்ரீபெய்டு அல்லது போஸ்ட்பெய்டு மொபைல் இணைப்பு.',
    whyNeeded: 'தொடர்பு மற்றும் OTP அடிப்படையிலான டிஜிட்டல் சேவைகளுக்கு அவசியம்.',
    eligibility: 'சுய இணைப்புக்கு 18 வயது அல்லது அதற்கு மேல்.',
    documents: ['ஆதார் அட்டை (e-KYC)'],
    process: [
      'மொபைல் ஆபரேட்டர் கடைக்கு செல்லவும் (Jio, Airtel, Vi).',
      'e-KYC க்காக ஆதார் எண் வழங்கவும்.',
      'பயோமெட்ரிக் அல்லது OTP சரிபார்ப்பு முடிக்கவும்.',
      'ஒரு திட்டத்தைத் தேர்ந்தெடுக்கவும்.',
      'சிம் கார்டை செயல்படுத்தவும்.'
    ],
  },

  kn: {
    title: 'ಸಿಮ್ ಕಾರ್ಡ್',
    description: 'ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ಮೊಬೈಲ್ ಸಂಪರ್ಕ.',
    overview: 'ಪ್ರೀಪೇಡ್ ಅಥವಾ ಪೋಸ್ಟ್‌ಪೇಡ್ ಮೊಬೈಲ್ ಸಂಪರ್ಕ.',
    whyNeeded: 'ಸಂಪರ್ಕ ಮತ್ತು OTP ಆಧಾರಿತ ಡಿಜಿಟಲ್ ಸೇವೆಗಳಿಗೆ ಅಗತ್ಯ.',
    eligibility: 'ಸ್ವತಂತ್ರ ಸಂಪರ್ಕಕ್ಕೆ 18 ವರ್ಷ ಅಥವಾ ಹೆಚ್ಚು.',
    documents: ['ಆಧಾರ್ ಕಾರ್ಡ್ (e-KYC)'],
    process: [
      'ಮೊಬೈಲ್ ಆಪರೇಟರ್ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ (Jio, Airtel, Vi).',
      'e-KYCಗಾಗಿ ಆಧಾರ್ ಸಂಖ್ಯೆ ನೀಡಿ.',
      'ಬಯೋಮೆಟ್ರಿಕ್ ಅಥವಾ OTP ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಿ.',
      'ಒಂದು ಪ್ಲಾನ್ ಆಯ್ಕೆಮಾಡಿ.',
      'ಸಿಮ್ ಕಾರ್ಡ್ ಸಕ್ರಿಯಗೊಳಿಸಿ.'
    ],
  },

  ml: {
    title: 'സിം കാർഡ്',
    description: 'നിങ്ങളുടെ പേരിൽ മൊബൈൽ കണക്ഷൻ.',
    overview: 'പ്രീപെയ്ഡ് അല്ലെങ്കിൽ പോസ്റ്റ്‌പെയ്ഡ് മൊബൈൽ കണക്ഷൻ.',
    whyNeeded: 'ബന്ധപ്പെടുന്നതിനും OTP അടിസ്ഥാനത്തിലുള്ള ഡിജിറ്റൽ സേവനങ്ങൾക്കുമായി ആവശ്യമാണ്.',
    eligibility: 'സ്വതന്ത്ര കണക്ഷനായി 18 വയസോ അതിൽ കൂടുതൽ.',
    documents: ['ആധാർ കാർഡ് (e-KYC)'],
    process: [
      'മൊബൈൽ ഓപ്പറേറ്റർ സ്റ്റോറിൽ പോകുക (Jio, Airtel, Vi).',
      'e-KYCയ്ക്ക് ആധാർ നമ്പർ നൽകുക.',
      'ബയോമെട്രിക് അല്ലെങ്കിൽ OTP പരിശോധന പൂർത്തിയാക്കുക.',
      'ഒരു പ്ലാൻ തിരഞ്ഞെടുക്കുക.',
      'സിം കാർഡ് സജീവമാക്കുക.'
    ],
  },

  mr: {
    title: 'सिम कार्ड',
    description: 'तुमच्या नावावर मोबाईल कनेक्शन.',
    overview: 'प्रीपेड किंवा पोस्टपेड मोबाईल कनेक्शन.',
    whyNeeded: 'संवाद आणि OTP आधारित डिजिटल सेवांसाठी आवश्यक.',
    eligibility: 'स्वतंत्र कनेक्शनसाठी 18 वर्षे किंवा त्याहून अधिक.',
    documents: ['आधार कार्ड (e-KYC)'],
    process: [
      'मोबाइल ऑपरेटर स्टोअरला भेट द्या (Jio, Airtel, Vi).',
      'e-KYC साठी आधार क्रमांक द्या.',
      'बायोमेट्रिक किंवा OTP पडताळणी पूर्ण करा.',
      'एक प्लॅन निवडा.',
      'सिम कार्ड सक्रिय करा.'
    ],
  },

  bn: {
    title: 'সিম কার্ড',
    description: 'আপনার নামে মোবাইল সংযোগ।',
    overview: 'প্রিপেইড বা পোস্টপেইড মোবাইল সংযোগ।',
    whyNeeded: 'যোগাযোগ এবং OTP ভিত্তিক ডিজিটাল পরিষেবার জন্য প্রয়োজনীয়।',
    eligibility: 'স্বতন্ত্র সংযোগের জন্য ১৮ বছর বা তার বেশি।',
    documents: ['আধার কার্ড (e-KYC)'],
    process: [
      'মোবাইল অপারেটর দোকানে যান (Jio, Airtel, Vi)।',
      'e-KYC এর জন্য আধার নম্বর দিন।',
      'বায়োমেট্রিক বা OTP যাচাই সম্পন্ন করুন।',
      'একটি প্ল্যান নির্বাচন করুন।',
      'সিম কার্ড সক্রিয় করুন।'
    ],
  },

  pa: {
    title: 'ਸਿਮ ਕਾਰਡ',
    description: 'ਤੁਹਾਡੇ ਨਾਮ ਤੇ ਮੋਬਾਈਲ ਕਨੈਕਸ਼ਨ।',
    overview: 'ਪ੍ਰੀਪੇਡ ਜਾਂ ਪੋਸਟਪੇਡ ਮੋਬਾਈਲ ਕਨੈਕਸ਼ਨ।',
    whyNeeded: 'ਸੰਚਾਰ ਅਤੇ OTP ਆਧਾਰਿਤ ਡਿਜ਼ਿਟਲ ਸੇਵਾਵਾਂ ਲਈ ਜ਼ਰੂਰੀ।',
    eligibility: 'ਸਵਤੰਤਰ ਕਨੈਕਸ਼ਨ ਲਈ 18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ।',
    documents: ['ਆਧਾਰ ਕਾਰਡ (e-KYC)'],
    process: [
      'ਮੋਬਾਈਲ ਆਪਰੇਟਰ ਸਟੋਰ ਤੇ ਜਾਓ (Jio, Airtel, Vi).',
      'e-KYC ਲਈ ਆਧਾਰ ਨੰਬਰ ਦਿਓ.',
      'ਬਾਇਓਮੈਟ੍ਰਿਕ ਜਾਂ OTP ਤਸਦੀਕ ਪੂਰੀ ਕਰੋ.',
      'ਇੱਕ ਪਲਾਨ ਚੁਣੋ.',
      'ਸਿਮ ਕਾਰਡ ਐਕਟੀਵੇਟ ਕਰੋ.'
    ],
  },

  ur: {
    title: 'سم کارڈ',
    description: 'آپ کے نام پر موبائل کنکشن۔',
    overview: 'پری پیڈ یا پوسٹ پیڈ موبائل کنکشن۔',
    whyNeeded: 'رابطے اور OTP پر مبنی ڈیجیٹل خدمات کے لیے ضروری۔',
    eligibility: 'آزاد کنکشن کے لیے 18 سال یا اس سے زیادہ۔',
    documents: ['آدھار کارڈ (e-KYC)'],
    process: [
      'موبائل آپریٹر اسٹور پر جائیں (Jio, Airtel, Vi).',
      'e-KYC کے لیے آدھار نمبر فراہم کریں.',
      'بایومیٹرک یا OTP تصدیق مکمل کریں.',
      'ایک پلان منتخب کریں.',
      'سم کارڈ فعال کریں.'
    ],
  },
    } as any),
  },
];
export const translations: Record<Language, Translation> = {
  en,
  hi,
  gu,
  ta,
  te,
  kn,
  ml,
  bn,
  mr,
  pa,
  ur,
  am,
};
