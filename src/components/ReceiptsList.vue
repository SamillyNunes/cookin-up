<script lang="ts">
import { getReceipts } from '@/http';
import type IReceipt from '@/interfaces/IReceipt';
import ReceiptCard from './ReceiptCard.vue';
import AppButton from './AppButton.vue';


export default {
    components: { ReceiptCard, AppButton },
    data() {
        return {
            receipts: [] as IReceipt[],
        }
    },
    async created() {
        this.receipts = await getReceipts();
        console.log(this.receipts);
    },
    emits: ['selectIngredients'],
};

</script>

<template>
    
    <section class="receipts">
        <h1 class="cabecalho">Receitas</h1>
        <p class="paragrafo results">Resultados encontrados: {{ receipts.length }}</p>
        <p class="options" >Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!</p>

        <div class="list">
            <ReceiptCard
            v-for="receipt in receipts"
            :receipt="receipt"
        />
        </div>
        
    </section>
    
    <AppButton 
        label="Editar lista" 
        @click="$emit('selectIngredients')"
    />

</template>

<style lang="css" scoped>

.receipts{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.receipts h1{
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.results{
    color: var(--verde-medio);
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.options{
    font-size: 1rem;
    margin-bottom: 1.75rem;
}

.list{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

</style>