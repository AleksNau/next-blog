import { PrismaClient } from '@prisma/client';
import {Pool} from "@neondatabase/serverless";
import {PrismaNeon} from "@prisma/adapter-neon";

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    const neon = new Pool({connectionString:process.env.POSTGRES_PRISMA_URL});
    const adapter = new PrismaNeon(neon)

    prisma = new PrismaClient(adapter);
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;