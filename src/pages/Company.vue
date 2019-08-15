<template>
<Layout>
<div class="p-5 ">
    <HeadingOne
    text="A Bit About Us"
    />
    <HeadingFour
    text="Pimp My Book started out in 2006 with the goal of making textbooks affordable. We managed to achieve this pretty well by expanding to 5 stores across South Africa. However, no great company can sit still which is why we spawned a bursary division in 2017. Which helps bursaries save several millions on academic material."
    />
</div>

<div class="p-5">
    <div class="flex flex-row">
        <HeadingFour
    text="What we do"
    />
    <Body
    text="We make educational materials and supporting technologies affordable and accessible to students."
    />
    </div>
    <div class="flex flex-row">
        <HeadingFour
    text="Our vision for the future"
    />
    <Body
    text="Provide a retail experince for students that assists in making access to eductaional resources accessible."
    />
    </div>
</div>


</Layout>
</template>

<script>
import HeadingOne from '../components/typography/HeadingOne'
import HeadingFour from '../components/typography/HeadingFour'
import Body from '../components/typography/Body'

export default {
    name: "Company",
    components:{
        HeadingOne,
        HeadingFour,
        Body
    }
}
</script>