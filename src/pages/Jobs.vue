<template>
    <Layout>
        <div
        class="flex flex-wrap justify-center mt-10"
        >
        <HeadingTwo
        text="Eish we're not hiring at the moment..."
        />
        <Body
        class="text-center p-10"
        text="However keep checking back 
        and we should have opportunites to share with you. However reach out to us at join@pimpmybook.co.za if you'd like to reach out."
        />
 <g-image
    width="650"
    src="../assets/jobs.svg"
    />
        </div>
   
    </Layout>
</template>
<script>
import HeadingTwo from "../components/typography/HeadingTwo"
import Body from "../components/typography/Body"

export default {
    name: "Jobs",
    components:{
        HeadingTwo,
        Body
    }
}
</script>
