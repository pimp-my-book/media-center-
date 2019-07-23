<template>
    <div>
        <!-- article img -->
        <img/>
        <div>
             <!-- article tag -->
 
            <!-- article title -->


            <!-- article date -->
        </div>
    </div>
</template>
<script>
import HeadingThree from '../typography/HeadingThree'
import Body from '../typography/Body'
import Caption from '../typography/Caption'

export default {
    name:'ArticleCard',
    components:{
        HeadingThree,
        Body,
        Caption
    },
    props:{
        img: String,
        cardTitle: String,
        cardTag: String,
        cardDate: String
    }
}
</script>
