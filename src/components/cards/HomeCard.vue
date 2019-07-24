<template>
    <div class="card w-500 h-300">
      <HeadingOne
      class="text-black"
      text="Welcome to Newsroom"
      />
      <HeadingFour
      text="This is Pimp My Book's all access area where you can get all annoucments, updates and blog posts fresh off the press."
       />
    </div>
</template>


<script>
import HeadingOne from "../typography/HeadingOne"
import HeadingFour from "../typography/HeadingFour"

export default {
    name: 'HomeCard',
    components:{
        HeadingFour,
        HeadingOne
    }
}
</script>
<style>
.card{
     background: linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%);
}
</style>
