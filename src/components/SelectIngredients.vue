<script lang="ts">
import { getCategories } from '@/http';
import type ICategory from '@/interfaces/ICategory';
import CategoryCard from './CategoryCard.vue';


export default {
    // as propriedades dentro de data sao reativas
    components: { CategoryCard: CategoryCard },
    data(){
        return {
            categories: [] as ICategory[],
        }
    },
    emits:['addItem'],
    async created(){
        // a lista de categorias vai ser inicializada no data e depois
        // quando obter a resposta do metodo getCategories() vai ser redefinida
        // pelo created
        this.categories = await getCategories();
    }
};

</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categorias">
            <li
                v-for="category in categories"
                :key="category.nome"
            >
                <CategoryCard 
                    :category="category" 
                    @add-item="$emit('addItem', $event)" 
                />
            </li>
        </ul>

        <p class="paragrafo dica">
            *Atenção: Consideramos que você tem em casa sal, pimenta e água
        </p>
    </section>
</template>

<style scoped>

.selecionar-ingredientes{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes{
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes{
    margin-bottom: 2rem;
}

.categorias{
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica{
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px){
    .dica{
        margin-bottom: 2.5rem;
    }
}

</style>