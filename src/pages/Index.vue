<template>
  <Layout>
    <ArticleCard
    img="https://images.unsplash.com/photo-1562819474-6ccdd832fe2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Blog"
    cardTitle="How To Run PMB"
    cardDate="2019-09-08"
    />
   
  </Layout>
</template>

<script>
import ArticleCard from "../components/cards/ArticleCard"
export default {
  components:{
    ArticleCard
  },
  metaInfo: {
    title: 'PMB Newsroom'
  }
}

/*

<ArticleCard
    img="https://images.unsplash.com/photo-1562819474-6ccdd832fe2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Blog"
    cardTitle="How To Run PMB"
    cardDate="2019-09-08"
    /> 
*/
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
