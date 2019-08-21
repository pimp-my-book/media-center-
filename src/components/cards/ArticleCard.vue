<template>
    <div class="shadow-lg h-450 p-2 w-320 article__card">
        <!-- article img -->
        <img
        class="h-auto w-full"
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
<style>
.article__card:hover {
    -webkit-animation: scale-up-bottom 1s;
	animation: scale-up-bottom 1s;
}

@-webkit-keyframes scale-up-bottom {
 0%, 20%, 60%, 100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	40% {
		-webkit-transform: translateY(-20px);
		transform: translateY(-20px);
	}
	80% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
	}
}
@keyframes scale-up-bottom {
  0%, 20%, 60%, 100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	40% {
		-webkit-transform: translateY(-20px);
		transform: translateY(-20px);
	}
	80% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
	}
}
</style>

