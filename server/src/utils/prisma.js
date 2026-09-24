import { db as prisma } from "../prisma/db.ts";



export const verifyDatabaseConnection = async () => {
	console.log("Se verifică conexiunea la PostgreSQL...")
	try{
		const connect = await prisma.orm.public.User.all();

		console.log("✅ Conexiunea la PostgreSQL a fost realizată cu succes!")
	}catch(error){
		console.error("❌ Conexiunea la PostgreSQL a eșuat:", error);
    	process.exit(1);
	}
}


