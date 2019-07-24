<template>
    <div class="card w-300 h-300">
      <HeadingOne
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
