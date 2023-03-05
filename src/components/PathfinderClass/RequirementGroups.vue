<script setup>
    import RequirementGroupsModel from "../../models/RequirementGroupsModel";
    import Requirements from './Requirements.vue';
</script>

<script>
    export default {
        components: {
            Requirements
        },
        data() {
            return {
                requirementGroups: []
            }
        },
        async beforeCreate() {
            const newRequirementGroups = new RequirementGroupsModel({});

            await newRequirementGroups.getRequirementGroups();

            this.requirementGroups = newRequirementGroups;
        }
    }
</script>

<template>
    <ol type="I" class="mt-4">
        <li v-for="requirementGroup in requirementGroups.requirementGroups" :key="requirementGroup.id" class="requirementGroup">
            <strong>
                {{ requirementGroup.name }}
            </strong>
            <Requirements
                :classId="this.$route.params.classId"
                :requirementGroupId="requirementGroup.id"
            />
        </li>
    </ol>
</template>

<style scoped>
    .requirementGroup {
        font-size: 1.275rem;
        color: #5a5c5e;
    }
</style>