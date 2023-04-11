import { myAxios } from "./Helper"

export const userLogin=(input)=>{

    return myAxios.post('/api/auth/user',input).then((Response)=>Response.data)
}