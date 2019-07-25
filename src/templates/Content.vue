<template>
    <Layout>
        <header
        
        >
        <img
        class="w-full h-500"
        :src="$page.post.coverImg"
        />

        </header>


<span
class="text-center"
v-html="$page.post.content"
/>
    </Layout>
</template>
<script>
export default {
    name: "Post"
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