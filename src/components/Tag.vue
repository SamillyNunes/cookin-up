<script lang="ts">

export default {
    props: {
        text: { type: String, required: true, },
    }
}
</script>

<template>
    <span class="tag">
        {{ text }}
    </span>
</template>

<style scoped>

.tag{
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}

</style>