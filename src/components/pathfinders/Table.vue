<script>
    export default {
        data() {
            return {
                pathfinders: []
            }
        },
        methods: {
            async deletePathfinder(e, pathfinder) {
                const { flag, message } = await pathfinder.deletePathfinder();

                if (flag) {
                    this.$router.go();
                }
            }
        },
        async beforeCreate() {
            const { flag, message, pathfinders } = await this.$store.state.user.getPathfinders();

            if (flag) {
                this.pathfinders = pathfinders;
            }
        }
    }
</script>

<template>
    <table class="table mt-3 table-striped table-hover rounded">
        <thead class="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col"></th> <!-- options -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="pathfinder in pathfinders">
                <th scope="row" class="align-middle">{{ pathfinder.id }}</th>
                <td class="align-middle">{{ pathfinder.name }}</td>
                <td class="d-flex align-items-center options">
                    <button class="btn btn-primary class-option">
                        Classes
                    </button>
                    <button class="btn btn-primary edit-option" @click="this.$router.push(`/edit/${pathfinder.id}`)">
                        Editar
                    </button>
                    <button class="btn btn-danger delete-option" @click="deletePathfinder($event, pathfinder)">
                        Excluir
                    </button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <ul class="dropdown-menu pb-0" aria-labelledby="dropdown-button">
                            <li><a href="#" class="dropdown-item">Classes</a></li>
                            <li><a :href="`edit/${pathfinder.id}`" class="dropdown-item">Editar</a></li>
                            <li><button class="btn btn-outline-danger m-0 w-100 border-0 delete-pathfinder-btn" @click.prevent.stop="deletePathfinder($event, pathfinder)">Excluir</button></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

    .dropdown {
        display: none;
    }

    .delete-pathfinder-btn {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    @media (max-width: 576px) {
        .dropdown {
            display: block;
        }

        .class-option {
            display: none
        }
        
        .edit-option {
            display: none
        }
        
        .delete-option {
            display: none
        }

        .options {
            justify-content: flex-end;
        }
    }

    @media (min-width: 577px) {
        .options {
            justify-content: space-around;
        }
    }
</style>