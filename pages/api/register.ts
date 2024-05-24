import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

import validateRegistrationForm from '../../lib/utils/validateRegistrationForm';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `Method '${req.method}' not allowed` });
  }

  try {
    const requestBody: Prisma.RegistrationCreateInput = req.body;
    await validateRegistrationForm(requestBody);

    const savedRegistration = await prisma.registration.create({
      data: requestBody,
    });

    // fetch the updated registration
    // const registrations = await prisma.registration.findMany({
    //   include:{
    //     course: true
    //   }
    // });
    res.status(200).json(savedRegistration);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something went wrong", error: String(err) });
  }
};
