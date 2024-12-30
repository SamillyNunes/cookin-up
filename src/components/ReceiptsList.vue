<script lang="ts">
import { getReceipts } from '@/http';
import type IReceipt from '@/interfaces/IReceipt';
import ReceiptCard from './ReceiptCard.vue';
import AppButton from './AppButton.vue';
import type { PropType } from 'vue';
import { list2HaveAllList1Itens } from '@/utils/arrays';


export default {
    components: { ReceiptCard, AppButton },
    props: {
        ingredients: {
            type: Array as PropType<string[]>,
            required: true,
        }
    },
    data() {
        return {
            receipts: [] as IReceipt[],
        }
    },
    async created() {
        console.log('ENTROU NO CREATED!!!');
        const receiptsList = await getReceipts();
        
        this.receipts = receiptsList.filter((receipt) => {
            // Todos os ingredientes de uma receita x devem estar contemplados na 
            // lista de ingredientes selecionado
            const receiptIsAvailable = list2HaveAllList1Itens(
                receipt.ingredientes,
                this.ingredients,
            );

            return receiptIsAvailable;

        });
    },
    emits: ['selectIngredients'],
};

</script>

<template>
    
    <section class="receipts">
        <h1 class="cabecalho">Receitas</h1>
        <p class="paragrafo results">Resultados encontrados: {{ receipts.length }}</p>
        <p class="options" >
            {{ 
                receipts.length ? 
                'Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!'
                : 'Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?' 
            }}
        </p>

        <div class="list">
            <ReceiptCard
                v-for="receipt in receipts"
                :receipt="receipt"
            />

            <img
                v-if="receipts.length===0"
                src="../assets/images/sem-receitas.png"
                alt="Imagem mostrando que não foram encontradas receitas"
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