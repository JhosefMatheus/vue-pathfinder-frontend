<script setup>
    import PrivateRoute from "../components/general/PrivateRoute.vue";
    import Layout from "../components/general/Layout.vue";
    import Header from "../components/pathfinderClasses/Header.vue";
    import ClassesGrid from "../components/pathfinderClasses/ClassesGrid.vue";
</script>

<template>
    <PrivateRoute>
        <Layout v-if="this.$store.state.user">
            <div class="container">
                <Header />
                <ClassesGrid />
            </div>
        </Layout>
    </PrivateRoute>
</template>

<style>
</style>