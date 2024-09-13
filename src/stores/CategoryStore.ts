import axios from "@/plugins/axios";
import type { APIResponse, Category } from "@/types";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore('CategoryStore', {
    state: () => ({}),
    actions: {
        async createCategory(form: Record<string, string>){
            return new Promise<Category>(async (resolve, reject) => {
                try {
                    const {data} = await axios.post<APIResponse<Category>>('/ecommerce/categories', {
                        ...form
                    });
                    resolve(data.data)
                } catch (error) {
                    reject(error)
                }
            })
        },
    }
})