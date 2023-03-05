<script setup>
    import PrivateRoute from '../components/general/PrivateRoute.vue';
    import Layout from '../components/general/Layout.vue';
    import Header from "../components/PathfinderClass/Header.vue";
    import RequirementGroups from '../components/PathfinderClass/RequirementGroups.vue';
    import RequirementsModel from '../models/RequirementsModel';
</script>

<script>
    export default {
        components: {
            PrivateRoute,
            Layout
        },
        methods: {
            async saveRequirements() {
                const newRequirementsModel = new RequirementsModel({ requirements: this.$store.state.requirements });
                
                await newRequirementsModel.saveRequirements(parseInt(this.$route.params.pathfinderId));

                this.$router.push("/pathfinders");
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