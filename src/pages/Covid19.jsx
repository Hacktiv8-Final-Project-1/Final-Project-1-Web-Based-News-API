import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "../component/Card";

export default function Covid19() {
  const [newsData, setNewsData] = React.useState([]);
  const date = new Date();
  const monthAgo = new Date(
    date.setMonth(date.getMonth() - 1)
  ).toLocaleDateString("en-CA");

  React.useEffect(() => {
    (async () => {
      const newsData = await fetch(
        `https://newsapi.org/v2/everything?q=covid&pageSize=24&from=${monthAgo}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      ).then((response) => response.json());
      setNewsData(newsData.articles);
    })();
  }, [monthAgo]);

  return (
    <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
      {newsData ? newsData.map((item, id) => <Card newsDataItem={item} key={id} />) : null}
    </Grid>
  );
}
