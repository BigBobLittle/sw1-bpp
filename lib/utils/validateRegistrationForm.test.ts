import { Prisma } from '@prisma/client';

import validateRegistrationForm from "./validateRegistrationForm";

describe("validateRegistrationForm", () => {
    it("validates correctly", async () => {
        const mockRegistrationInput: Prisma.RegistrationCreateInput = {
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            course: { connect: { id: 1 } },
        }

        const validatedData = await validateRegistrationForm(mockRegistrationInput);

        expect(validatedData).toEqual(undefined);
    });
});
