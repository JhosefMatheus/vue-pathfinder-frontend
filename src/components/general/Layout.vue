<script setup>
    import Popover from "./Popover.vue";
</script>

<script>
    export default {
        components: {
            Popover
        },
        data() {
            return {
                showPopOver: false
            }
        },
        methods: {
            handlePopOver(e) {
                const clickedElement = e.target;
                const userIcon = this.$refs.userIcon;

                if (clickedElement !== userIcon) {
                    this.showPopOver = false;
                } else {
                    if (!this.showPopOver) {
                        this.showPopOver = true;
                    } else {
                        this.showPopOver = false;
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="w-100 h-100 position-relative" @click="handlePopOver">
        <nav class="navbar navbar-expand-lg d-flex align-items-center p-2 shadow sticky-top bg-white">
            <i class="bi bi-person-plus-fill p-1" v-if="this.$route.name === 'pathfinders'" @click="this.$router.push('/create')"></i>
            <i class="bi bi-person-lines-fill p-1" v-if="this.$route.name === 'create' || this.$route.name === 'editPathfinder' || this.$route.name === 'pathfinderClasses'" @click="this.$router.push('/pathfinders')"></i>
            <i class="bi bi-person-circle p-1" ref="userIcon"></i>
        </nav>
        <Popover v-if="showPopOver"/>
        <slot />
    </div>
</template>

<style scoped>
    i {
        width: 48px;
        height: 48px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
    }

    i:hover {
        background-color: #ccc;
    }

    .bi-person-plus-fill, .bi-person-lines-fill {
        display: none;
    }
    
    @media (max-width: 576px) {
        .bi-person-plus-fill, .bi-person-lines-fill {
            display: flex;
        }
        
        nav {
            justify-content: space-between;
        }
    }
    
    @media (min-width: 577px) {
        nav {
            justify-content: flex-end;
        }
    }
</style>