<script lang="ts">
import type IReceipt from '@/interfaces/IReceipt';
import type { PropType } from 'vue';


export default {
    props: {
        receipt: {
            type: Object as PropType<IReceipt>,
            required: true,
        }
    }
};

</script>

<template>
    <div class="receipt">
        <img
            :src="`/images/receipts/${receipt.imagem}`"
            :alt="`Imagem de ${receipt.nome}`"
            class="img"
        />

        <h5 class="label">{{ receipt.nome }}</h5>
    </div>
</template>

<style lang="css" scoped>

.receipt{
    width: 12rem;
    height: 10rem;
    background-color: var(--branco);
    border-radius: 1rem;
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.1);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.img{
    height:65%;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
}

.label{
    text-align: center;
    color: var(--cinza);
    padding: 1rem 0.5rem;
    font-family: var(--font-family-padrao);
}

</style>