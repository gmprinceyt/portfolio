import "dotenv/config";
import { prisma } from "./client";


(async ()=> {
    try {
        await prisma.test.upsert({
            where: {id: 1},
            create: {
                name: "Hello Db Works as Expted",
                other: "Test Passed"
            },
            update: {
                name: "Hello Db Works as Expted",
                other: "Test Passed"
            }
        });
        
        console.log("Prisma Data Seeded Succesfully ✅")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
})()