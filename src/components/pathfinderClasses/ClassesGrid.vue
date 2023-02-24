<script setup>
    import PathfinderModel from '../../models/PathfinderModel'
</script>

<script>
    export default {
        data() {
            return {
                classes: []
            }
        },
        async beforeCreate() {
            const currentPathfinder = new PathfinderModel({ id: this.$route.params.id, userId: this.$store.state.user.id });

            const { flag, message } = await currentPathfinder.getPathfinderData();

            if (flag) {
                const { classes } = await currentPathfinder.getClasses();

                this.classes = classes;
            } else {
                this.$router.push("/pathfinders");
            }
        }
    }
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col" v-for="currentClass in classes" :key="currentClass.id">
            <div class="card my-2">
                <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                    <img :src="`/classes-logo/${currentClass.classImage}`" class="card-img-top">
                </div>
                <div class="card-body">
                    <p class="card-title"><strong>{{ currentClass.name }}</strong></p>
                    <div class="w-100 d-flex justify-content-between align-items-center">
                        <p>0% concluído</p>
                        <button class="btn btn-primary">Ver classe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 150px;
        height: 150px;
    }

    .card {
        height: 400px;
    }
</style>