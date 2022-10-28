import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "../component/Card";
import { useParams } from "react-router-dom";

export default function Search({title}) {
  const name = useParams();
  console.log(title);
  console.log(name);
  const [newsData, setNewsData] = React.useState([]);
  const date = new Date();
  const monthAgo = new Date(
    date.setMonth(date.getMonth() - 1)
  ).toLocaleDateString("en-CA");

  React.useEffect(() => {
    (async () => {
      const newsData = await fetch(
        `https://newsapi.org/v2/everything?q=${name.title}&pageSize=24&from=${monthAgo}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      ).then((response) => response.json());
      setNewsData(newsData.articles);
    })();
  }, [monthAgo, name.title]);

  return (
    <Container maxW={'full'}>
      <Heading
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        {name.title} News
      </Heading>
      <Grid mx={40} templateColumns={{ base: 'repeat(1, 2fr)', md: 'repeat(3, 2fr)' }} gap={10}>
        {newsData ? newsData.map((item, id) => <Card newsDataItem={item} key={id} />) : null}
      </Grid>
    </Container>
  );
}
