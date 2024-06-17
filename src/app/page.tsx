import React from 'react';

type MeowFactResponse = {
  data: string[];
};

async function getCatFact(): Promise<MeowFactResponse> {
  try {
    const res = await fetch('https://meowfacts.herokuapp.com/?lang=fra');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const Home = async () => {
  let fact = 'Failed to load cat fact';

  try {
    const data = await getCatFact();
    fact = data.data[0];
  } catch (error) {
    console.error('Error fetching cat fact:', error);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello! Voici le fait du jour sur les chats :</h1>
      <p className="mt-4 text-lg">{fact}</p>
    </div>
  );
};

export default Home;