<script lang="ts">
import AppButton from './AppButton.vue';
import CurrentList from './CurrentList.vue';
import CustomFooter from './CustomFooter.vue';
import SelectIngredients from './SelectIngredients.vue';

export default {
    data(){
        return {
            ingredients: [] as string[],
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
        }
    },
    components: { SelectIngredients, CurrentList, AppButton, CustomFooter }
};

</script>

<template>

    <main class="conteudo-principal">
        <CurrentList :ingredients="ingredients"/>

        <SelectIngredients 
            @add-item="addIngredient"
            @remove-item="removeIngredient"
        />
        
        <AppButton
            label="Buscar receitas!"
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