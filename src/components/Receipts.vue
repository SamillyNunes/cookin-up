<script lang="ts">
import { getReceipts } from '@/http';
import type IReceipt from '@/interfaces/IReceipt';


export default {
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
    Mostrando receitas...
</template>