<template>
    
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
</template>

<script>
import ArticleCard from "../components/cards/ArticleCard"
import HeadingFour from "../components/typography/HeadingFour"
export default {
    name: "AllPosts",
    components:{
        ArticleCard,
        HeadingFour
    }
}
</script>

<static-query>

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

</static-query>