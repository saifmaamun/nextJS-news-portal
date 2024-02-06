import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import latestImage from '../../../assets/latest1.png';
import gridImage1 from '../../../assets/latest2.png';
import gridImage2 from '../../../assets/latest3.png';
import gridImage3 from '../../../assets/latest4.png';
import gridImage4 from '../../../assets/latest5.png';
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
    const { data } = await getAllNews()
    console.log(data[0])
    return (
        <Box>
            <Card className='w-full'>
                <CardActionArea>
                    <CardMedia>

                        <Image src={data[0].thumbnail_url} height={800} width='800' alt='latestNews' />
                    </CardMedia>

                    <CardContent>
                        <p className=
                            "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                        >
                            {data[0].category}
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom className='my-2'>
                            By {data[0].author.name}   {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid container rowSpacing={1} className='my-2' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {

                    data.slice(0, 4).map(news => (
                        // console.log(news)
                        <Grid key={news.id} item xs={6}>
                            <Card className='my-2'>
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img": {
                                            width: "500px",
                                            height: "250px",
                                        }
                                    }}>

                                        <Image src={news.thumbnail_url} height={800} width='800' alt='latestNews' />
                                    </CardMedia>

                                    <CardContent>
                                        <p className=
                                            "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                                        >
                                            {news.category}
                                        </p>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {news.title.length > 35 ? news.title.slice(0, 35) + "..." : news.title}
                                        </Typography>
                                        <Typography gutterBottom className='my-2'>
                                            By {news.author.name}   {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 80 ? news.details.slice(0, 80) + "..." : news.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                    ))

                }


            </Grid>
        </Box >
    );
};

export default LatestNews;