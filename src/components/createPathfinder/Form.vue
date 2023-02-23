<script setup>
    import PathfinderModel from "../../models/PathfinderModel";
</script>

<script>
    export default {
        data() {
            return {
                name: ""
            }
        },
        methods: {
            setName(e) {
                this.name = e.target.value;
            },
            async submitForm() {
                const form = this.$refs.createForm;

                if (!form.checkValidity()) {
                    form.classList.add("was-validated");
                } else {
                    const userId = this.$store.state.user.id;

                    const currentPathfinder = new PathfinderModel({ userId, name: this.name });

                    const { flag, message } = await currentPathfinder.createPathfinder();

                    if (flag) {
                        this.$router.push("/pathfinders");
                    }
                }
            }
        }
    }
</script>

<template>
    <form class="needs-validation w-100 d-flex flex-column justify-content-start align-items-center mt-3 shadow p-3 rounded" @submit.prevent.stop="submitForm" ref="createForm" novalidate>
        <div class="mb-3 has-validation w-100">
            <label for="nameInput" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nameInput" @change="setName" required />
            <span class="invalid-feedback">
                Campo obrigatório
            </span>
        </div>

        <div class="w-100 d-flex justify-content-end align-items-center">
            <button class="btn btn-primary" type="submit">Criar</button>
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