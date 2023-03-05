<script setup>
    import RequirementsModel from "../../models/RequirementsModel";
    import Requirement from "./Requirement.vue";
</script>

<script>
    export default {
        props: {
            classId: String,
            requirementGroupId: Number
        },
        components: {
            Requirement
        },
        data() {
            return {
                requirements: []
            }
        },
        async beforeCreate() {
            const newRequirements = new RequirementsModel({});

            await newRequirements.getRequirements(this.classId, this.requirementGroupId);

            this.requirements = newRequirements.requirements;
            
            this.$store.state.requirements = this.$store.state.requirements.concat(newRequirements.requirements);
        }
    }
</script>

<template>
    <ol class="p-0">
        <Requirement v-for="requirement in requirements" :requirement="requirement" :key="requirement.id" />
    </ol>
</template>

<style scoped>
    
</style>