<script>
    export default {
        data() {
            return {
                pathfinders: []
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
                    <button class="btn btn-primary edit-option">
                        Editar
                    </button>
                    <button class="btn btn-danger delete-option">
                        Excluir
                    </button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <ul class="dropdown-menu" aria-labelledby="dropdown-button">
                            <li><a href="#" class="dropdown-item">Classes</a></li>
                            <li><a href="#" class="dropdown-item">Editar</a></li>
                            <li><a href="#" class="dropdown-item">Excluir</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    table {
        overflow: hidden;
    }

    .dropdown {
        display: none;
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