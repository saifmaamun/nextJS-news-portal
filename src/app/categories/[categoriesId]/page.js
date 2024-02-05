import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    console.log(data)
    return (
        <div>
            <h1>Total <span className="font-bold"> {searchParams.category}</span> news: {data.length}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map(news =>
                    <Grid key={news.id} item xs={6}>
                        <Card className='w-full my-4'>
                            <CardActionArea>
                                <CardMedia>

                                    <Image src={news.thumbnail_url} width='800' height='800' alt='latestNews' />
                                </CardMedia>

                                <CardContent>
                                    <p className=
                                        "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                                    >
                                        {news.category}
                                    </p>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {news.title}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" className='my-2'>
                                        By {news.author.name} - {news.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {news.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default DynamicNewsPage;