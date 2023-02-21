<script>
    export default {
        methods: {
            logout() {
                localStorage.removeItem("token");

                this.$router.push("/");
            }
        }
    }
</script>

<template>
    <div class="position-absolute float-right bg-white popover end-0 m-2" @blur="this.focusOut">
        <h6 class="m-3">Usuário</h6>
        <hr class="m-0">
        <p class="text-muted m-1">{{ this.$store.state.user.fullName }}</p>
        <button class="btn btn-outline-danger w-100 border-0" @click="logout">Sair</button>
    </div>
</template>

<style scoped>
    button {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>