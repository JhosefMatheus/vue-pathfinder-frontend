<script setup>
    import PathfinderModel from '../../models/PathfinderModel';
</script>

<script>
    export default {
        data() {
            return {
                pathfinder: null
            }
        },
        methods: {
            async submitForm() {
                const form = this.$refs.editForm;

                if (!form.checkValidity()) {
                    form.classList.add("was-validated");
                } else {
                    const { flag, message } = await this.pathfinder.updatePathfinder();

                    if (flag) {
                        this.$router.push("/pathfinders");
                    }
                }
            }
        },
        async beforeCreate() {
            const pathfinderId = this.$route.params.id;
            const userId = this.$store.state.user.id;

            const currentPathfinder = new PathfinderModel({ id: pathfinderId, userId });

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
    <form class="needs-validation w-100 d-flex flex-column justify-content-start align-items-center mt-3 shadow p-3 rounded" @submit.prevent.stop="submitForm" ref="editForm" novalidate>
        <div class="mb-3 has-validation w-100">
            <label for="nameInput" class="form-label">Nome</label>
            <input v-if="pathfinder" type="text" class="form-control" id="nameInput" @change="setName" required v-model="pathfinder.name"/>
            <span class="invalid-feedback">
                Campo obrigatório
            </span>
        </div>

        <div class="w-100 d-flex justify-content-end align-items-center">
            <button class="btn btn-primary" type="submit">Editar</button>
        </div>
    </form>
</template>

<style scoped>
    @media(max-width: 576px) {
        button {
            width: 100%;
        }
    }
</style>