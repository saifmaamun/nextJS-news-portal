import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = () => {
    return (
        <Box>
            <Container>
                <Grid className='my-4' container spacing={2}>
                    <Grid item xs={3}>
                        categories
                    </Grid>
                    <Grid item xs={9}>

                        news
                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
};

export default CategoriesLayout;