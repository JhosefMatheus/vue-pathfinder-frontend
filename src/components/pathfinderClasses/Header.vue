<script setup>
    import PathfinderModel from "../../models/PathfinderModel";
</script>

<script>
    export default {
        data() {
            return {
                pathfinder: null
            }
        },
        async beforeCreate() {
            const currentPathfinder = new PathfinderModel({ id: this.$route.params.id, userId: this.$store.state.user.id });

            const { flag, message } = await currentPathfinder.getPathfinderData();

            if (flag) {
                this.pathfinder = currentPathfinder;
            } else {
                this.$router.push("/pathfinders");
            }
        }
    }
</script>

<template>
    <div class="w-100 d-flex justify-content-between align-items-center mt-3">
        <h4 v-if="pathfinder">Classes - {{ pathfinder.name }}</h4>
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