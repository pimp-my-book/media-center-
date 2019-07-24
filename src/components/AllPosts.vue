<template>
    
   <!-- All articles Grid -->

   <div class="mt-20">
<HeadingFour
text="All Articles"
/>

<!-- start of All articles Grid -->

<div class="All__Grid">
 <div v-for="allEdges in $static.allContent.edges" :key="allEdges.node.id">
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
import ArticleCard from "./cards/ArticleCard"
import HeadingFour from "./typography/HeadingFour"
 
export default {
    name: "AllPosts",
    components:{
        ArticleCard,
        HeadingFour
    }
}
</script>

<style>
.All__Grid{
     display:grid;
 grid-gap: 0px;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
}
</style>


<static-query>

query AllPosts {
    allContent: allContent(skip: 2){
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