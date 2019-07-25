<template>
  <Layout>
   <!-- Header Grid -->
   <div
   class="grid ml-4"
   >
   <div>
    <HomeCard
    />
   </div>


   <!--start of latest flex row -->
   <div>
     <HeadingFour
     class="mt-5"
     text="Latest"
     />



<div class="flex x:flex-row s:flex-col">
  <div v-for="edge in $page.content.edges" :key="edge.node.id">
<!-- lastest articles -->
<router-link
 class="no-underline text-black"
  :to="edge.node.path"
 
>
 <ArticleCard
    :img="edge.node.coverImg"
    :cardTag="edge.node.tag"
    :cardTitle="edge.node.title"
    :cardDate="edge.node.date"
    /> 
</router-link>


  </div>
 
</div>



   
    

   </div>
    <!--End of latest flex row -->
   </div>

      <!-- End of Header Grid -->



   <AllPosts/>

  </Layout>
</template>

<script>
import HomeCard from "../components/cards/HomeCard"
import ArticleCard from "../components/cards/ArticleCard"
import HeadingFour from "../components/typography/HeadingFour"
import AllPosts from "../components/AllPosts"

export default {
  components:{
    ArticleCard,
    HomeCard,
    HeadingFour,
    AllPosts
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


.grid{
  display:grid;
 grid-gap: 0px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 0.45fr));
}
</style>
<page-query>
query Posts {
    content: allContent(limit: 2){
        edges{
            node{
              id
                title
                tag
                coverImg
                date
                path
            }
        }
    }
}



</page-query>
