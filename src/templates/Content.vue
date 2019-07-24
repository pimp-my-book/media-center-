<template>
    <Layout>
        <header
        :style="{backgroundImage:'url('+ $page.post.coverImg + ')'}"
        ></header>


<span
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