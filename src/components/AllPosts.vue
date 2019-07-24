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
export default {
    name: "AllPosts"
}
</script>

