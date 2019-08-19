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
        <Body
    text="What we do"

    />
    <HeadingFour
    class=" ml-10"
    text="We make educational materials and supporting technologies affordable and accessible to students."
    />
    </div>
    <div class="flex flex-row">
        <Body
    text="Our vision for the future"
    />
    <HeadingFour
     class="ml-10"
    text="Provide a retail experince for students that assists in making access to eductaional resources accessible."
    />
    </div>
</div>

<div class="flex lg:flex-row s:flex-col p-5 m-20">
    <div class="pr-20">
     <HeadingThree
     class="text-pinkDarkest"
     text="13"
     />
     <Body
    text="Years we've existed for"
    />
    </div>
     <div class="pr-20">
     <HeadingThree
     class="text-pinkDarkest"
     text="105 143"
     />
     <Body
    text="Books we've sold"
    />
    </div>
     <div class="pr-5">
     <HeadingThree
     text="17"
     class="text-pinkDarkest"
     />
     <Body
    text="SA campuses we have customers at"
    />
    </div>
</div>

<div>
     <HeadingThree
     class="text-pinkDarkest"
     text="Our Team"
     />
    <iframe class="airtable-embed" src="https://airtable.com/embed/shrBBIrIZ6arTUhSm?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"/>

</div>

</Layout>
</template>

<script>
import HeadingOne from '../components/typography/HeadingOne'
import HeadingThree from '../components/typography/HeadingThree'
import HeadingFour from '../components/typography/HeadingFour'
import Body from '../components/typography/Body'

export default {
    name: "Company",
    components:{
        HeadingOne,
        HeadingFour,
        HeadingThree,
        Body
    }
}
</script>