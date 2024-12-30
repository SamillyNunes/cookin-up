<script lang="ts">
import CurrentList from './CurrentList.vue';
import CustomFooter from './CustomFooter.vue';
import ReceiptsList from './ReceiptsList.vue';
import SelectIngredients from './SelectIngredients.vue';

type Page = 'SelectIngredients' | 'ShowReceipts';

export default {
    data(){
        return {
            ingredients: [] as string[],
            content: 'SelectIngredients' as Page,
        }
    },
    methods: {
        addIngredient(item: string){
            this.ingredients.push(item);
        },
        removeIngredient(item: string){
            if(this.ingredients.includes(item)){
                let i = this.ingredients.indexOf(item);
                this.ingredients.splice(i, 1);
            }
        },
        navigate(page: Page){
            this.content=page;
        }
    },
    components: { SelectIngredients, CurrentList, CustomFooter, ReceiptsList }
};

</script>

<template>

    <main class="conteudo-principal">
        <CurrentList :ingredients="ingredients"/>
        
        <KeepAlive>

            <SelectIngredients 
                v-if="content === 'SelectIngredients'"
                @add-item="addIngredient"
                @remove-item="removeIngredient"
                @search-receipts="navigate('ShowReceipts')"
            />

        </KeepAlive>
    
        <ReceiptsList  
            v-if="content==='ShowReceipts'"
            :ingredients="ingredients"
            @select-ingredients="navigate('SelectIngredients')"

        />

        
    </main>

    <CustomFooter/>

</template>

<style scoped>

.conteudo-principal{
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px){
    .conteudo-principal{
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px){
    .conteudo-principal{
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}

</style>