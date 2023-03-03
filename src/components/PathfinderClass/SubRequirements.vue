<script setup>
    import SubRequirementsModel from "../../models/SubrequirementsModel";
</script>

<script>
    export default {
        props: {
            requirementId: Number
        },
        data() {
            return {
                subRequirements: []
            }
        },
        async beforeCreate() {
            const newSubRequirements = new SubRequirementsModel({});

            const { flag, message } = await newSubRequirements.getSubrequirements(this.requirementId);

            this.subRequirements = newSubRequirements.subrequirements;
        }
    }
</script>

<template>
    <ol class="w-50" v-if="subRequirements.length > 0 && subRequirements[0].subrequirementTypeId === 1" type="a">
        <li v-for="subRequirement in subRequirements" :key="subRequirement.id">
            {{ subRequirement.content }}
        </li>
    </ol>

    <ul class="w-50" v-else>
        <li v-for="subRequirement in subRequirements" :key="subRequirement.id">
            {{ subRequirement.content }}
        </li>
    </ul>
</template>

<style scoped>
    ul > li {
        list-style-type: disc;
    }
</style>