import React from 'react';
import { Box, Button } from '@mui/material';
import { styles } from '../styles';

interface HeaderProps {
    onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
    return (
        <Box sx={styles.header}>
          <Button variant="contained" onClick={onClick} sx={styles.jokeButton}>Get a new random joke</Button>
          <Button
            variant="text" 
            href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
            target="_blank"
            sx={styles.apiButton}
          >
            View API Docs
          </Button>
        </Box>
    );
}

export default Header;