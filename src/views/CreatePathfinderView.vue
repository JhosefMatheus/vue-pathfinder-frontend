<script setup>
    import PrivateRoute from "../components/general/PrivateRoute.vue";
    import Layout from "../components/general/Layout.vue";
    import Header from "../components/createPathfinder/Header.vue";
    import Form from "../components/createPathfinder/Form.vue";
</script>

<script>
    export default {
        components: {
            Header,
            Form
        }
    }
</script>

<template>
    <PrivateRoute>
        <Layout>
            <div class="container h-100 d-flex flex-column align-items-center">
                <Header />
                <Form />
            </div>
        </Layout>
    </PrivateRoute>
</template>

<style>
</style>