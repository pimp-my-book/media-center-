<template>
    <div class="shadow-lg h-400 p-2 w-350">
        <!-- article img -->
        <img
        class="h-250 w-400"
        :src="img"
        />
        <div>
             <!-- article tag -->
         <Body
         :text="cardTag"
         />
            <!-- article title -->
        <HeadingFour
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
import HeadingFour from '../typography/HeadingFour'
import Body from '../typography/Body'
import Caption from '../typography/Caption'

export default {
    name:'ArticleCard',
    components:{
        HeadingFour,
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
