<template>
    <div class="card x:w-500 h-300 s:w-300 p-2">
      <HeadingOne
      class="text-white s:text-4xl"
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
     background: linear-gradient(90deg, #249DC9 2.49%, #F9B4ED 76.81%, #F9B4ED 87.91%);
}
</style>
