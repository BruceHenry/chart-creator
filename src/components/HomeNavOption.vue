<template>
    <div id="home-nav-option-container">
        <router-link :to="path">
            <div id="image-container">
                <img :src="getImgUrl(imagePath)" width="300" height="200" />
                <div>
                    <span>{{ label }}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script lang="js">
import { defineComponent} from "vue";

export default defineComponent({
    name: "home-nav-option",
    props:{
        path:{
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        imagePath: {
            type: String,
            // required: true
        },
    },
    setup(props) {
        console.log(props)
        const getImgUrl = (imageUrl) => {
            var images = require.context('../assets/')
            return images('./' + imageUrl)
        }
        return {
            getImgUrl
        }
    }
});
</script>

<style>
#home-nav-option-container{
    margin: 20px;
}
#image-container:hover{
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    transition: 0.3s;
}
</style>