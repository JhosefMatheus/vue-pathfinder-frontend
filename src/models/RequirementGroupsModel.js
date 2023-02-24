import URL_API from "../config";
import RequirementGroupModel from "./RequirementGroupModel";

export default class RequirementGroupsModel {
    $requirementGroups;

    constructor({ requirementGroups }) {
        this.$requirementGroups = requirementGroups;
    }

    get requirementGroups() {
        return this.$requirementGroups;
    }

    set requirementGroups(requirementGroupos) {
        this.$requirementGroups = requirementGroupos;
    }

    async getRequirementGroups() {
        const token = localStorage.getItem("token");

        const getRequirementGroupsResponse = await fetch(`${URL_API}/requirementGroup/requirementGroups`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { requirementGroups } = await getRequirementGroupsResponse.json();

        this.$requirementGroups = requirementGroups.map(requirementGroup => new RequirementGroupModel({ id: requirementGroup.id, name: requirementGroup.name }));
    }
}