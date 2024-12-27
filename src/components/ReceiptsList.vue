<script lang="ts">
import { getReceipts } from '@/http';
import type IReceipt from '@/interfaces/IReceipt';
import ReceiptCard from './ReceiptCard.vue';


export default {
    components: { ReceiptCard },
    data() {
        return {
            receipts: [] as IReceipt[],
        }
    },
    async created() {
        this.receipts = await getReceipts();
        console.log(this.receipts);
    },
};

</script>

<template>
    
    <section>
        <h1>Receitas</h1>
        <p>Resultados encontrados: {{ receipts.length }}</p>
        <p>Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!</p>

        <div class="list">
            <ReceiptCard
            v-for="receipt in receipts"
            :receipt="receipt"
        />
        </div>
    </section>

</template>

<style lang="css" scoped>

.list{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

</style>