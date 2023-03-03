<script setup>
    import RequirementModel from '../../models/RequirementModel';
    import SubRequirements from "./SubRequirements.vue"; 
</script>

<script>
    export default {
        props: {
            requirement: RequirementModel
        },
        components: {
            SubRequirements
        },
        data() {
            return {
                concluded: false
            }
        }
    }
</script>

<template>
    <li class="my-4" :class="{concluded}">
        <div class="w-100 d-flex justify-content-between align-items-start">
            <p>
                {{ requirement.content }}
            </p>
            <input type="checkbox" v-model="concluded" />
        </div>
        <SubRequirements
            :requirementId="requirement.id"
        />
    </li>
</template>

<style scoped>
    li {
        font-size: 1rem;
    }

    .concluded {
        text-decoration: line-through;  
    }
</style>