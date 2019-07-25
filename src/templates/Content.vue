<template>
    <Layout>
        <header
        class="flex flex-col text-center p-5"
        >
        
        <HeadingTwo
        class=" mb-5"
        :text="$page.post.title"
        />
        <Caption
        class="text-greyDark mb-5"
        :text="$page.post.date"
        />
       
        
        <img
        
        :src="$page.post.coverImg"
        />

        </header>


<div class="flex flex-col">
    <span
class="font-body font-light text-lg p-5 pl-5 m-10"
v-html="$page.post.content"
/>
</div>
    </Layout>
</template>
<script>
import HeadingTwo from "../components/typography/HeadingTwo"
import Caption from "../components/typography/Caption"

export default {
    name: "Post",
    components:{
        HeadingTwo,
        Caption
    }
}
</script>

<page-query>
query OnePost ($path: String!){
    post: content(path: $path){
        title
        content
        coverImg
        date
    }
}
</page-query>