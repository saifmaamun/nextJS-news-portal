import { getAllCategories } from '@/utils/getAllCategories';
import { Box } from '@mui/material';
import React from 'react';

const CategoryList = async () => {
    const { data: categoryList } = await getAllCategories();
    console.log(categoryList)
    return (
        <Box>
            <h1>list</h1>
        </Box>
    );
};

export default CategoryList;