<template>
  <Layout>
   
   <div
   class="grid ml-5"
   >
   <div>
    <HomeCard
    />
   </div>
   <div>
     <HeadingFour
     text="Latest"
     />

     <ArticleCard
    img="https://images.unsplash.com/photo-1562819474-6ccdd832fe2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Blog"
    cardTitle="How To Run PMB"
    cardDate="2019-09-08"
    /> 

    <ArticleCard
    img="https://images.unsplash.com/photo-1562819474-6ccdd832fe2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Blog"
    cardTitle="How To Run PMB"
    cardDate="2019-09-08"
    /> 
    

   </div>
    
   </div>
   
  </Layout>
</template>

<script>
import HomeCard from "../components/cards/HomeCard"
import ArticleCard from "../components/cards/ArticleCard"
import HeadingFour from "../components/typography/HeadingFour"

export default {
  components:{
    ArticleCard,
    HomeCard,
    HeadingFour
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

.grid{
  display:grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
