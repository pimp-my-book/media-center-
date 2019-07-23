<template>
  <Layout>
   
   <div
   class="flex x:flex-row s:flex-col p-5"
   >
   
    <ArticleCard
    img="https://images.unsplash.com/photo-1562819474-6ccdd832fe2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Blog"
    cardTitle="How To Run PMB"
    cardDate="2019-09-08"
    />

<ArticleCard
    img="https://images.unsplash.com/photo-1563754672161-1da06ecad541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Blog"
    cardTitle="Best Networking Advice"
    cardDate="2019-10-23"
    />

    <ArticleCard
    img="https://images.unsplash.com/photo-1563640696537-80b625c3ccab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    cardTag="Product Update"
    cardTitle="Introducing PMB Plus"
    cardDate="2019-109"
    />

   </div>
   
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
