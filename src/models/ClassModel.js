import URL_API from "../config";

export default class ClassModel {
    $id;
    $name;
    $classImage;

    constructor({ id, name, classImage }) {
        this.$id = id;
        this.$name = name;
        this.$classImage = classImage;
    }

    get id() {
        return this.$id;
    }

    set id(id) {
        this.$id = id;
    }

    get name() {
        return this.$name;
    }
    
    set name(name) {
        this.$name = name;
    }
    
    get classImage() {
        return this.$classImage;
    }
    
    set classImage(classImage) {
        this.$classImage = classImage;
    }

    async getClassData() {
        const token = localStorage.getItem("token");

        const getClassDataResponse = await fetch(`${URL_API}/class/${this.$id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { message, currentClass } = await getClassDataResponse.json();

        if (getClassDataResponse.status === 200) {
            this.$name = currentClass.name;
            this.$classImage = currentClass.classImage;

            return {
                flag: true,
                message
            }
        } else if (getClassDataResponse.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }
}