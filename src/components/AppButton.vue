<script lang="ts">

export default {
    props: {
        label: {
            type: String,
            required: true,
        },
    }
};

</script>

<template>

    <button class="btn">
        {{ label }}
    </button>

</template>

<style scoped>

.btn{
    padding: 0.75rem 3.5rem;
    background-color: var(--coral);
    border-radius: 1.5rem;
    color: var(--branco);
    font-weight: bold;
    font-size: 1.1rem;
}

</style>