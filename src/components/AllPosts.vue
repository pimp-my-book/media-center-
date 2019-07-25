<template>
    
   <!-- All articles Grid -->

   <div class="mt-20">
<HeadingFour
class="p-5"
text="All Articles"
/>

<!-- start of All articles Grid -->

<div class="All__Grid x:p-5">
 <div v-for="allEdges in $static.allContent.edges" :key="allEdges.node.id">
<!-- lastest articles -->
<g-link
 class="no-underline text-black"
  :to="allEdges.node.path"
 
>
 <ArticleCard
    :img="allEdges.node.coverImg"
    :cardTag="allEdges.node.tag"
    :cardTitle="allEdges.node.title"
    :cardDate="allEdges.node.date"
    /> 
</g-link>
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
 align-items: end;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
                path
            }
        }
    }
}

</static-query>