<script setup>
    import ClassModel from "../../models/ClassModel";
    import PathfinderModel from '../../models/PathfinderModel';
</script>


<script>
    export default {
        data() {
            return {
                currentClass: null,
                pathfinder: null
            }
        },
        async beforeCreate() {
            const currentClass = new ClassModel({ id: this.$route.params.classId });

            const { flag, message } = await currentClass.getClassData();

            if (flag) {
                this.currentClass = currentClass;

                const currentPathfinder = new PathfinderModel({ id: this.$route.params.pathfinderId, userId: this.$store.state.user.id });

                const { flag: pathfinderFlag, message } = await currentPathfinder.getPathfinderData();

                if (pathfinderFlag) {
                    this.pathfinder = currentPathfinder;
                } else {
                    this.$router.psuh("/pathfinders");
                }
            } else {
                this.$router.push("/pathfinders");
            }
        }
    }
</script>

<template>
    <div class="w-100 d-flex justify-content-between align-items-center mt-3">
        <h4 v-if="currentClass && pathfinder" class="w-50">{{ `${pathfinder.name } - ${currentClass.name}` }}</h4>
        <div class="w-50 d-flex justify-content-end align-items-center">
            <button class="btn btn-primary" @click="this.$router.push('/pathfinders')">Desbravadores</button>
            <button class="btn btn-primary mx-1" @click="this.$router.push(`/classes/${this.pathfinder.id}`)">Classes</button>
        </div>
    </div>
</template>

<style scoped>

</style>