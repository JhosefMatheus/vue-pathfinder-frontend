<script setup>
    import Header from "../components/pathfinders/Header.vue";
    import SearchBar from "../components/pathfinders/SearchBar.vue";
    import Table from "../components/pathfinders/Table.vue";
</script>

<script>
    export default {
        components: {
            Header,
            SearchBar,
            Table
        }
    }
</script>

<template>
    <div class="container">
        <Header />
        <SearchBar />
        <Table />
    </div>
</template>

<style>
</style>