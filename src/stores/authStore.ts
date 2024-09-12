import axios from "@/plugins/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({}),
    actions: {
        async registerUser(form: Record<string, string>){
            return new Promise<number>(async (resolve, reject) => {
                try {
                    const {data} = await axios.post('/users/register', {
                        ...form
                    });
                    resolve(1)
                } catch (error) {
                    reject()
                }
            })
        }
    }
})