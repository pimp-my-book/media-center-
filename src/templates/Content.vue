<template>
  <Layout>
    <header class="flex flex-col text-center p-10">
      <HeadingTwo class="mb-5 s:text-2xl x:text-4xl" :text="$page.post.title" />
      <Caption class="text-greyDark mb-5" :text="$page.post.date" />
      <div class="flex justify-center mb-5">
        <g-image :src="$page.post.authorImg" class="rounded-full mr-2 w-20 h-5" />
        <Caption :text="$page.post.author" />
      </div>

      <g-image class="x:h-650 h-auto w-full" :src="$page.post.coverImg" />
    </header>

    <div class="flex flex-col break-normal">
      <span
        class="font-body font-light pb-5 text-lg p-5 pl-5 m-10 mt-10"
        v-html="$page.post.content"
      />
    </div>
  </Layout>
</template>
<script>
import HeadingTwo from "../components/typography/HeadingTwo";
import Caption from "../components/typography/Caption";

export default {
  name: "Post",
  components: {
    HeadingTwo,
    Caption
  },
  metaInfo() {
    return {
      title: this.$page.post.title,

      meta: [
        //facebook meta
        { property: "og:type", content: "website" },
        { property: "og:url", content: this.$route.path },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:image", content: this.$page.post.coverImg },
        //twitter meta
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: this.$route.path },
        { property: "twitter:title", content: this.$page.post.title },
        { property: "twitter:image", content: this.$page.post.coverImg }
      ]
    };
  }
};
</script>

<page-query>
query OnePost ($path: String!){
    post: content(path: $path){
        title
        content
        coverImg
        date
        path
        authorImg
        author
    }
}
</page-query>

<style scoped>
</style>
