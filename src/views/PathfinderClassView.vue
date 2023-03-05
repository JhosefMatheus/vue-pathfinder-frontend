<script setup>
    import PrivateRoute from '../components/general/PrivateRoute.vue';
    import Layout from '../components/general/Layout.vue';
    import Header from "../components/PathfinderClass/Header.vue";
    import RequirementGroups from '../components/PathfinderClass/RequirementGroups.vue';
</script>

<script>
    export default {
        components: {
            PrivateRoute,
            Layout
        },
        methods: {
            saveRequirements() {
                console.log(this.$store.state.requirements);
            }
        },
        beforeUnmount() {
            this.$store.state.requirements = [];
        }
    }
</script>

<template>
    <PrivateRoute>
        <Layout>
            <div class="container">
                <Header />
                <RequirementGroups />
            </div>
        </Layout>
        <button class="btn btn-primary position-fixed" @click="saveRequirements">Salvar</button>
    </PrivateRoute>
</template>

<style scoped>
    button {
        bottom: 10px;
        right: 10px;
    }
</style>