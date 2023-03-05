import URL_API from "../config";
import RequirementModel from "./RequirementModel";

export default class RequirementsModel {
    $requirements;
    
    constructor({ requirements }) {
        this.$requirements = requirements;
    }

    get requirements() {
        return this.$requirements;
    }

    set requirements(requirements) {
        this.$requirements = requirements;
    }

    async getRequirements(classId, requirementGroupId) {
        const token = localStorage.getItem("token");

        const getRequirementsResponse = await fetch(`${URL_API}/requirement/requirements/${classId}/${requirementGroupId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { message, requirements } = await getRequirementsResponse.json()

        if (getRequirementsResponse.status === 200) {
            this.$requirements = requirements.map(r => new RequirementModel({ id: r.id, requirementGroupId: r.requirementGroupId, classId: r.classId, content: r.content }));

            return {
                flag: true,
                message
            }
        } else if (getRequirementsResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }

    async saveRequirements(pathfinderId) {
        const token = localStorage.getItem("token");

        const concludedRequirements = this.$requirements.filter(requirement => requirement.state).map(requirement => {
            return {
                id: requirement.id,
                requirementGroupId: requirement.requirementGroupId,
                classId: requirement.classId,
                content: requirement.content
            }
        });

        const notConcludedRequirements = this.$requirements.filter(requirement => !requirement.state).map(requirement => {
            return {
                id: requirement.id,
                requirementGroupId: requirement.requirementGroupId,
                classId: requirement.classId,
                content: requirement.content
            }
        });

        const requestBody = {
            pathfinderId,
            concludedRequirements,
            notConcludedRequirements
        }
        
        const saveRequirementsResponse = await fetch(`${URL_API}/requirementPathfinder/save`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        });
    }
}