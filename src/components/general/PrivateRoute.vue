<script setup>
    import URL_API from '../../config';
    import UserModel from '../../models/UserModel';
</script>

<script>
    export default {
        async beforeCreate() {
            const token = localStorage.getItem("token");

            const tokenVerifyResponse = await fetch(`${URL_API}/token/verify`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const { tokenData } = await tokenVerifyResponse.json();

            if (tokenVerifyResponse.status === 200) {
                const { sub, username, login } = tokenData;

                const newUser = new UserModel({ id: sub, fullName: username, login });

                this.$store.commit("updateUser", newUser);
            } else if (tokenVerifyResponse.status === 401) {
                this.$router.push("/");
            }
        }
    }
</script>

<template>
    <slot />
</template>

<style>
</style>