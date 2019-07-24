<template>
  <Layout>
   
   <div
   class=""
   >
   <div>
    <HomeCard
    />
   </div>
   <div>

   </div>
    
   </div>
   
  </Layout>
</template>

<script>
import HomeCard from "../components/cards/HomeCard"
import ArticleCard from "../components/cards/ArticleCard"
export default {
  components:{
    ArticleCard,
    HomeCard
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
