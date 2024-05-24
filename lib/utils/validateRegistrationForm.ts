import { Prisma } from "@prisma/client";

export class ValidationError extends Error {}

export const validateRegistrationForm = async (requestBody: Prisma.RegistrationCreateInput) => {
    if (!requestBody) {
        throw new ValidationError("Empty request body");
    }
};

export default validateRegistrationForm;
