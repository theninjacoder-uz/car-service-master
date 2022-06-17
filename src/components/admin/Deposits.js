import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>Oxirgi online pul tushumi</Title>
            <Typography component="p" variant="h4">
                3,024,000.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                 22 Iyun, 2022
            </Typography>
        </React.Fragment>
    );
}