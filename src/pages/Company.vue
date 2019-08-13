<template>
<Layout>
<div>
    <HeadingOne
    text="A Bit About Us"
    />
    <HeadingFour
    text="Pimp My Book started out in 2006 with the goal of making textbooks affordable. We managed to achieve this pretty well by expanding to 5 stores across South Africa. However, no great company can sit still which is why we spawned a bursary division in 2017. Which helps bursaries save several millions on academic material."
    />
</div>
</Layout>
</template>

<script>
import HeadingOne from '../components/typography/HeadingOne'
import HeadingFour from '../components/typography/HeadingFour'

export default {
    name: "Company",
    components:{
        HeadingOne,
        HeadingFour
    }
}
</script>