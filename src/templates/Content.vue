<template>
    <Layout>
        <header
        class="flex flex-col"
        >
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