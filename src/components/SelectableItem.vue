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
    <!-- A pratica de usar @ eh para substituir o v-on, eh como um atalho -->
    <button
        class="item"
        @click="selected=!selected"
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