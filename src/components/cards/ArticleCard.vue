<template>
    <div class="shadow-lg h-64 w-64">
        <!-- article img -->
        <img
        :src="img"
        />
        <div>
             <!-- article tag -->
         <Body
         :text="cardTag"
         />
            <!-- article title -->
        <HeadingThree
        :text="cardTitle"
        />

            <!-- article date -->
        <Caption
        :text="cardDate"
        />
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
