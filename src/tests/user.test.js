import supertest from "supertest"
import { web } from "../application/web.js";
import { logger } from "../application/logging.js";
import {createTestUser, removeTestUser} from "./test-util.js";
import {func} from "joi";

describe('POST /api/users', function(){

    afterEach(async () => {
        await removeTestUser();
    })

    it('should can register new user',async()=>{
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username:'test',
            password:'password',
            name:'test'
        });
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');
        expect(result.body.data.password).toBeUndefined();
    });
    it('should reject if request invalid',async()=>{
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username:'',
            password:'',
            name:''
        });
        logger.info(result.body)
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if username is already registered',async()=>{
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username:'test',
                password:'password',
                name:'test'
            });
        logger.info(result.body)
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username:'test',
                password:'password',
                name:'test'
            });
        logger.info(result.body)
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
})

describe('POST /api/users/login',function () {
    beforeEach(async ()=>{
        await createTestUser()
    })
    afterEach(async ()=>{
        await removeTestUser()
    })
    it('should can login',async ()=>{
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username:"test",
                password:"password"
            });
        logger.info(result.body)
        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("test");
    });
    it('should reject login if request invalid',async ()=>{
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username:"",
                password:"password"
            });
        logger.info(result.body)
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
    it('should reject login if password is wrong',async ()=>{
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username:"test",
                password:"dd"
            });
        logger.info(result.body)
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
    it('should reject login if password is wrong',async ()=>{
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username:"tests",
                password:"password"
            });
        logger.info(result.body)
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

})

describe('GET /api/users/current', function(){
    beforeEach(async ()=>{
        await createTestUser()
    })
    afterEach(async ()=>{
        await removeTestUser()
    })
    it('should can get current user',async ()=>{
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'test');
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test')
    })
})