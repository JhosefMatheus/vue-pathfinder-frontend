<script setup>
    import Layout from '../components/general/Layout.vue';
    import Header from "../components/editPathfinder/Header.vue";
    import Form from "../components/editPathfinder/Form.vue";
    import PrivateRoute from '../components/general/PrivateRoute.vue';
</script>

<template>
    <PrivateRoute>
        <Layout v-if="this.$store.state.user">
            <div class="container">
                <Header />
                <Form />
            </div>
        </Layout>
    </PrivateRoute>
</template>

<style>
</style>