<template>
    <Layout>
        <header
        class="flex flex-col"
        >
        <HeadingTwo
        class="text-center mb-5"
        :text="$page.post.title"
        />
        <img
        class=""
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
export default {
    name: "Post",
    components:{
        HeadingTwo
    }
}
</script>

<page-query>
query OnePost ($path: String!){
    post: content(path: $path){
        title
        content
        coverImg
    }
}
</page-query>