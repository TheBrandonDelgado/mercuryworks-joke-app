import React, { useState, useEffect } from 'react';
import { getRandomJoke } from './utils/jokeService';
import { Container} from '@mui/material';
import Header from './components/Header';
import Joke from './components/Joke';
import Status from './components/Status';

interface JokeResponse {
  joke: string;
  punchLine: string;
}

const App: React.FC = () => {
  const [joke, setJoke] = useState<JokeResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(false);
      setShowPunchline(false);
      const newJoke = await getRandomJoke();
      setJoke(newJoke);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container maxWidth="md">
        <Header onClick={fetchJoke} />
        <Status loading={loading} error={error} />
        <Joke 
          loading={loading} 
          joke={joke} 
          showPunchline={showPunchline} 
          onClick={setShowPunchline} />
    </Container>
  );
};

export default App;
