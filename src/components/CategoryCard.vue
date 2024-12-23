<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import type { PropType } from 'vue';


export default {
    props: {
        category: {
            type: Object as PropType<ICategory>,
            required: true,
        },
    }
};

</script>

<template>
    {{ category.nome }}
    {{ category.imagem }}
</template>