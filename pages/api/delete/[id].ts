import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";


const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
  ) {
    if (req.method === "DELETE") {
      const id = req.query.id
    try {
      
       await prisma.registration.delete({
            where:{
                id: Number(id)
            }
        })

      

      res.status(200).json({message: "Registration deleted"});
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something went wrong", error: String(err) });
    }
      // return res
      //   .status(405)
      //   .json({ message: `Method '${req.method}' not allowed` });
    }
  
    
  };