import URL_API from "../config";
import PathfinderModel from "./PathfinderModel";

export default class UserModel {
    $id;
    $fullName;
    $login;
    $password;
    $confirmPassword;

    
    constructor({ id, fullName, login, password, confirmPassword }) {
        this.$id = id;
        this.$fullName = fullName;
        this.$login = login;
        this.$password = password;
        this.$confirmPassword = confirmPassword;
    }

    get id() {
        return this.$id;
    }

    set id(id) {
        this.$id = id;
    }

    get fullName() {
        return this.$fullName;
    }

    set fullName(fullName) {
        this.$fullName = fullName;
    }

    get login() {
        return this.$login;
    }

    set login(login) {
        this.$login = login;
    }

    get password() {
        return this.$password;
    }

    set password(password) {
        this.$password = password;
    }

    get confirmPassword() {
        return this.$confirmPassword;
    }

    set confirmPassword(confirmPassword) {
        this.$confirmPassword = confirmPassword;
    }

    async signIn() {
        const requestBody = {
            login: this.$login,
            password: this.$password
        }

        const signInResponse = await fetch(`${URL_API}/auth/signIn`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const signInJsonResponse = await signInResponse.json();

        const { message, token } = signInJsonResponse;

        if (signInResponse.status === 200) {
            return {
                flag: true,
                message, 
                token
            }
        }

        return {
            flag: false,
            message
        }
    }

    async signUp() {
        if (this.$password !== this.$confirmPassword) {
            return {
                flag: false,
                message: "Campos de senha e confirmar senha não coincidem."
            }
        } else {
            console.log("entrou no segundo if")

            const requestBody = {
                fullName: this.$fullName,
                login: this.$login,
                password: this.$password
            }

            const signUpResponse = await fetch(`${URL_API}/auth/signUp`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

             const signUpJsonResponse = await signUpResponse.json();

            const { message } = signUpJsonResponse;

            if (signUpResponse.status === 200) {
                return {
                    flag: true,
                    message
                }
            }

            return {
                flag: false,
                message
            }
        }
    }

    async getPathfinders() {
        const token = localStorage.getItem("token");

        const getPathfindersResposne = await fetch(`${URL_API}/pathfinder/pathfinders/${this.$id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const { message, pathfinders } = await getPathfindersResposne.json();

        if (getPathfindersResposne.status === 200) {
            return {
                flag: true,
                message,
                pathfinders: pathfinders.map(pathfinder => new PathfinderModel({ id: pathfinder.id, userId: pathfinder.userId, name: pathfinder.name }))
            }
        } else if (getPathfindersResposne.status === 401) {
            return {
                flag: false,
                message
            }
        }
    }
}