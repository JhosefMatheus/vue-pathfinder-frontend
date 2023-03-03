export default class RequirementModel {
    $id;
    $requirementGroupId;
    $classId;
    $content;
    
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
}