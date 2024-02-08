import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styles } from '../styles';

interface JokeProps {
    loading: boolean;
    joke: {
        joke: string;
        punchLine: string;
    } | null;
    showPunchline: boolean;
    onClick: (state: boolean) => void;
}

const Joke: React.FC<JokeProps> = ({ loading, joke, showPunchline, onClick }) => {
    return (
        <>
            { joke && !loading && (
                <Box sx={styles.bodyBox}>
                    <Box sx={styles.jokeBox}>
                        <Typography variant="body1" gutterBottom sx={styles.joke}>{ joke.joke }</Typography>
                    </Box>
                    <Button variant="contained" onClick={() => onClick(!showPunchline)} sx={styles.punchlineButton}>
                        {showPunchline ? 'Hide' : 'Show'} Punchline
                    </Button>
                    { showPunchline && (
                        <Box sx={styles.punchlineBox}>
                            <Typography variant="body1" sx={styles.joke}>{ joke.punchLine }</Typography>
                        </Box>
                    )}
                </Box>
            )}
        </>
    )
}

export default Joke;