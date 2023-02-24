<script setup>
    import PrivateRoute from '../components/general/PrivateRoute.vue';
    import Layout from '../components/general/Layout.vue';
    import Header from "../components/PathfinderClass/Header.vue";
    import RequirementGroups from '../components/PathfinderClass/RequirementGroups.vue';
</script>

<template>
    <PrivateRoute>
        <Layout>
            <div class="container">
                <Header />
                <RequirementGroups />
            </div>
        </Layout>
    </PrivateRoute>
</template>

<style scoped>

</style>