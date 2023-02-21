<script>
</script>

<template>
    <div class="shadow p-4 mt-3 rounded">
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="search-icon">
                <i class="bi bi-search"></i>
            </span>
            <input type="text" class="form-control" placeholder="desbravador" aria-describedby="search-icon"/>
        </div>
    </div>
</template>

<style scoped>
    @media (max-width: 576px) {
        .input-group {
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        .input-group {
            width: 75%;
        }
    }

    @media (min-width: 992px) {
        .input-group {
            width: 50%;
        }
    }
</style>