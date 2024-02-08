import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from '../styles';

interface StatusProps {
    loading: boolean;
    error: boolean;
}

const Status: React.FC<StatusProps> = ({ loading, error }) => {
    return (
        <Box sx={styles.statusBox}>
            { loading && <Typography sx={styles.status} color="gray">Loading Your Joke...</Typography> }
            { error && <Typography sx={styles.status} color="red">There was an error loading your joke.</Typography> }
        </Box>
    )
}

export default Status;