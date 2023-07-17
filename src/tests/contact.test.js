import {createTestUser, removeAllTestContacts, removeTestUser} from "./test-util.js";
import supertest from "supertest";
import {web} from "../application/web.js";
import {logger} from "../application/logging.js";
describe('POST /api/contacts', function (){
    beforeEach(async ()=>{
        await createTestUser()
    })
    afterEach(async ()=>{
        await removeAllTestContacts()
        await removeTestUser()
    })
    it('should can create new contact', async ()=>{

        const result = await supertest(web)
            .post("/api/contacts")
            .set("Authorization","test")
            .send({
                first_name:"test",
                last_name:"test",
                email:"test@gmail.com",
                phone:"0808232380"
            })
        expect(result.status).toBe(200)
        expect(result.body.data.id).toBeDefined()
        expect(result.body.data.first_name).toBe("test")
        expect(result.body.data.last_name).toBe("test")
        expect(result.body.data.email).toBe("test@gmail.com")
        expect(result.body.data.phone).toBe("0808232380")
    })

    it('should reject request is not valid', async ()=>{
        const result = await supertest(web)
            .post("/api/contacts")
            .set("Authorization","test")
            .send({
                first_name:"",
                last_name:"test",
                email:"test@gmail.com",
                phone:"080823238012345678909876543212345678"
            })
        expect(result.status).toBe(400)
        expect(result.body.errors).toBeDefined()
    })
})