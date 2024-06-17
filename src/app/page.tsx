'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';

type MeowFactResponse = {
  data: string[];
};

async function getCatFact(language: string): Promise<MeowFactResponse> {
  try {
    const res = await fetch(`https://meowfacts.herokuapp.com/?lang=${language}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [fact, setFact] = useState<string>(t('errorMsg'));

  useEffect(() => {
    async function fetchCatFact() {
      try {
        const languageCode = t('language');
        const data = await getCatFact(languageCode);
        setFact(data.data[0]);
      } catch (error) {
        console.error('Error fetching cat fact:', error);
        setFact(t('errorMsg'));
      }
    }

    fetchCatFact();
  }, [i18n.language, t]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-4">
        <button onClick={() => changeLanguage('en')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
          English
        </button>
        <button onClick={() => changeLanguage('fr')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
          Français
        </button>
        <button onClick={() => changeLanguage('esp')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
          Español
        </button>
        <button onClick={() => changeLanguage('ger')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
          Deutsch
        </button>
      </div>
      <h1 className="text-4xl font-bold">{t('welcomeMsg')}</h1>
      <p className="mt-4 text-lg">{fact}</p>
    </div>
  );
};

export default Home;
