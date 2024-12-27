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
    },
    methods: {
        onClick(){
            this.selected = !this.selected;

            if(this.selected){
                // emitindo um evento personalizado, com o nome 'addItem'
                // em que eh possivel escutar do componente pai
                this.$emit('addItem', this.item);
            }
        }
    },
    emits: ['addItem']
}

</script>

<template>
    <!-- A pratica de usar @ eh para substituir o v-on, eh como um atalho -->
    <button
        class="item"
        @click="onClick"
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