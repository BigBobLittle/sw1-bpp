import { Prisma } from '@prisma/client';
import { RegistrationFormDto } from '@/types/RegistrationFormDto';

const transformRegistrationForm = (registrationForm: RegistrationFormDto): Prisma.RegistrationCreateInput => ({
  firstName: registrationForm.firstName,
  lastName: registrationForm.lastName,
  email: registrationForm.email,
  course: {
    connect: { id: parseInt(registrationForm.courseId, 10) }
  }
});

export default transformRegistrationForm;