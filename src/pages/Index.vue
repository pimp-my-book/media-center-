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
     text="Latest"
     />



<div class="flex flex-row ">
  <div v-for="edge in $page.content.edges" :key="edge.node.id">
<!-- lastest articles -->
 <ArticleCard
    :img="edge.node.coverImg"
    :cardTag="edge.node.tag"
    :cardTitle="edge.node.title"
    :cardDate="edge.node.date"
    /> 

  </div>
 
</div>
   
    

   </div>
    
   </div>
   

   <!-- All articles Grid -->

   <div >
<HeadingFour
text="All Articles"
/>

<!-- start of All articles Grid -->

<div class="All_Grid">
 <div v-for="allEdges in $page.allContent.edges" :key="allEdges.node.id">
<!-- lastest articles -->
 <ArticleCard
    :img="allEdges.node.coverImg"
    :cardTag="allEdges.node.tag"
    :cardTitle="allEdges.node.title"
    :cardDate="allEdges.node.date"
    /> 

  </div>
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
            }
        }
    }
}


query AllPosts {
    allContent: allContent{
        edges{
            node{
              id
                title
                tag
                coverImg
                date
            }
        }
    }
}


</page-query>

<page-query>

</page-query>