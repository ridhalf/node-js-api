import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import * as uval from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"
import {constants as httpStatus} from "http2"

const register = async (request) =>{
    const user = validate(uval.registerUserValidation,request);

    const countUser = await prismaClient.user.count({
        where:{
            username: user.username
        }
    });
    if(countUser === 1){
        throw new ResponseError(400,"Username already exist")
    }

    user.password = await bcrypt.hash(user.password,10);

    return await prismaClient.user.create({
        data: user,
        select:{
            username:true,
            name:true
        }
    });

}

const login = async (request)=>{
    const loginRequest = validate(uval.loginUserValidation,request);
    const user = await prismaClient.user.findUnique({
        where:{
            username:loginRequest.username
        },
        select:{
            username:true,
            password:true,
            wrong_login:true
        }
    })

    if(!user){
        throw new ResponseError(401,"Username or password wrong");
    }

    if(user.wrong_login >= 3){
        throw new ResponseError(httpStatus.HTTP_STATUS_UNAUTHORIZED,"Akun anda diblokir");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if(!isPasswordValid){
        const wrong_login = await prismaClient.user.update({
            data:{
                wrong_login : user.wrong_login + 1,
            },
            where:{
                username: user.username
            }
        })
        throw new ResponseError(401,"Username or password wrong");
    }
    const token = uuid().toString()
    return prismaClient.user.update({
        data:{
            token:token,
        },
        where:{
            username: user.username
        },
        select:{
            token:true
        }
    })
}
const get = async (username)=>{
     username = validate(uval.getUserValidation, username);
     const user = await prismaClient.user.findUnique({
         where:{
             username:username
         },
         select:{
             username:true,
             name:true
         }
     })
    if(!user){
        throw new ResponseError(404, "User is not found");
    }
    return user;
}

export default{
    register,
    login,
    get
}