import { Course, Registration } from "@prisma/client";

export type RegistrationWithCourse = Registration & { course: Course };

// Export here for easier importing in other components
export type { Course }