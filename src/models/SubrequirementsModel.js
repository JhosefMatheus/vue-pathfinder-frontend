import URL_API from "../config";

export default class SubrequirementsModel {
    $subrequirements;

    constructor({ subrequirements }) {
        this.$subrequirements = subrequirements;
    }

    get subrequirements() {
        return this.$subrequirements;
    }

    set subrequirements(subrequirements) {
        this.$subrequirements = subrequirements;
    }

    async getSubrequirements(requirementId) {
        const token = localStorage.getItem("token");

        const getSubRequirementsResponse = await fetch(`${URL_API}/subRequirement/subRequirements/${requirementId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { message, subRequirements } = await getSubRequirementsResponse.json();

        if (getSubRequirementsResponse.status === 200) {
            this.$subrequirements = subRequirements;

            return {
                flag: true,
                message
            }
        } else if (getSubRequirementsResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }
}