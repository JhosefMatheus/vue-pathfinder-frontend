import URL_API from "../config";

export default class RequirementModel {
    $id;
    $requirementGroupId;
    $classId;
    $content;
    $state;
    
    constructor({ id, requirementGroupId, classId, content }) {
        this.$id = id;
        this.$requirementGroupId = requirementGroupId;
        this.$classId = classId;
        this.$content = content;
    }

    get id() {
        return this.$id;
    }

    set id(id) {
        this.$id = id;
    }

    get requirementGroupId() {
        return this.$requirementGroupId;
    }

    set requirementGroupId(requirementGroupId) {
        this.$requirementGroupId = requirementGroupId;
    }

    get classId() {
        return this.$classId;
    }

    set classId(classId) {
        this.$classId = classId;
    }

    get content() {
        return this.$content;
    }

    set content(content) {
        this.$content = content;
    }

    get state() {
        return this.$state;
    }

    set state(state) {
        this.$state = state;
    }

    async setRequirementState(pathfinderId) {
        const token = localStorage.getItem("token");

        const setRequirementStateResponse = await fetch(`${URL_API}/requirementPathfinder/${pathfinderId}/${this.$id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (setRequirementStateResponse.status === 200) {
            this.$state = true;
        } else if (setRequirementStateResponse.status === 401) {
            this.$state = false;
        }
    }
}