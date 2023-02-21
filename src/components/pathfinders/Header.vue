<script>
</script>

<template>
    <div class="w-100 d-flex justify-content-between align-items-center mt-3">
        <h4>Desbravadores</h4>
        <button class="btn btn-primary" @click="this.$router.push('/create')">Add. desbravador</button>
    </div>
</template>

<style scoped>
    @media (max-width: 576px) {
        button {
            display: none;
        }
    }
</style>