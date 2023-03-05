import URL_API from "../config";
import ClassModel from "./ClassModel";

export default class PathfinderModel {
    $id;
    $userId;
    $name;

    constructor({ id, userId, name }) {
        this.$id = id;
        this.$userId = userId;
        this.$name = name;
    }

    get id() {
        return this.$id;
    }

    set id(id) {
        this.$id = id;
    }

    get userId() {
        return this.$userId;
    }

    set userId(userId) {
        this.$userId = userId;
    }

    get name() {
        return this.$name;
    }

    set name(name) {
        this.$name = name;
    }

    async createPathfinder() {
        const token = localStorage.getItem("token");
        
        const requestBody = {
            userId: this.$userId,
            name: this.$name
        }

        const createPathfinderResponse = await fetch(`${URL_API}/pathfinder/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        });

        const { message } = await createPathfinderResponse.json();

        if (createPathfinderResponse.status === 200) {
            return {
                flag: true,
                message
            }
        } else if (createPathfinderResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }

    async deletePathfinder() {
        const token = localStorage.getItem("token");

        const deletePathfinderResponse = await fetch(`${URL_API}/pathfinder/${this.$id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { message } = await deletePathfinderResponse.json();

        if (deletePathfinderResponse.status === 200) {
            return {
                flag: true,
                message
            }
        } else if (deletePathfinderResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }

    async getPathfinderData() {
        const token = localStorage.getItem("token");

        const getPathfinderDataResponse = await fetch(`${URL_API}/pathfinder/${this.$userId}/${this.$id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { message, currentPathfinder } = await getPathfinderDataResponse.json();

        if (getPathfinderDataResponse.status === 200) {
            this.$name = currentPathfinder.name;

            return {
                flag: true,
                message
            }
        } else if (getPathfinderDataResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }

    async updatePathfinder() {
        const token = localStorage.getItem("token");

        const requestBody = {
            name: this.$name
        }

        const updatePathfinderResponse = await fetch(`${URL_API}/pathfinder/${this.$userId}/${this.$id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        });

        const { message } = await updatePathfinderResponse.json();

        if (updatePathfinderResponse.status === 200) {
            return {
                flag: true,
                message
            }
        } else if (updatePathfinderResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }

    async getClasses() {
        const token = localStorage.getItem("token");

        const getClassesResponse = await fetch(`${URL_API}/class/classes`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { classes } = await getClassesResponse.json();

        const classesModel = classes.map(c => new ClassModel({
            id: c.id,
            classImage: c.classImage,
            name: c.name
        }));

        return {
            classes: classesModel
        }
    }
}