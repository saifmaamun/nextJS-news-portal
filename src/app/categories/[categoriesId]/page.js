import React from 'react';

const DynamicNewsPage = ({ params, searchParams }) => {
    return (
        <div>
            <h1>Dynamic News {searchParams.category}</h1>
        </div>
    );
};

export default DynamicNewsPage;