<script lang="ts">
import Tag from './Tag.vue';


export default {
    components: { Tag },
    props: {
        item: {
            type: String, 
            required: true,
        }
    },
    data(){
        return {
            selected: false,
        }
    }
}

</script>

<template>
    <button
        class="item"
        v-on:click="selected=!selected"
        :aria-pressed="selected"
    >
        <Tag :text="item" :selected="selected" />
    </button>
</template>

<style scoped>

.item{
    cursor: pointer;
}

</style>