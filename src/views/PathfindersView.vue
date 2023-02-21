<script setup>
    import Layout from "../components/general/Layout.vue";
    import Header from "../components/pathfinders/Header.vue";
    import SearchBar from "../components/pathfinders/SearchBar.vue";
    import Table from "../components/pathfinders/Table.vue";
    import PrivateRoute from "../components/general/PrivateRoute.vue";
</script>

<script>
    export default {
        components: {
            Layout,
            Header,
            SearchBar,
            Table,
        }
    }
</script>

<template>
    <PrivateRoute>
        <Layout>
            <div class="container">
                <Header />
                <SearchBar />
                <Table />
            </div>
        </Layout>
    </PrivateRoute>
</template>

<style>
</style>