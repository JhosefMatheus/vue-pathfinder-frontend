<script setup>
    import RequirementGroupsModel from "../../models/RequirementGroupsModel";
</script>

<script>
    export default {
        data() {
            return {
                requirementGroups: []
            }
        },
        async beforeCreate() {
            const newRequirementGroups = new RequirementGroupsModel({});

            await newRequirementGroups.getRequirementGroups();

            this.requirementGroups = newRequirementGroups;

            console.log(this.requirementGroups);
        }
    }
</script>

<template>
    <ol type="I">
        <strong><li v-for="requirementGroup in requirementGroups.requirementGroups" :key="requirementGroup.id">{{ requirementGroup.name }}</li></strong>
    </ol>
</template>

<style scoped>

</style>