<script>
</script>

<template>
    <div class="w-100 d-flex justify-content-between align-items-center mt-2">
        <h4>Criar desbravador</h4>
        <button class="btn btn-primary" @click="this.$router.push('/pathfinders')">Desbravadores</button>
    </div>
</template>

<style scoped>
    @media (max-width: 576px) {
        button {
            display: none;
        }
    }
</style>