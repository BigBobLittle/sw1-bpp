import { render, screen } from "@testing-library/react";

import { Course } from "@/types";
import Registrations, { Props } from './registrations';

describe("Registrations", () => {
    it("should render correctly with 1 registration", () => {
        const mockCourse: Course = {
            id: 1,
            title: "fake title 1",
            description: "fake description 1",
            cost: 1,
            type: "fake type 1",
            capacity: 1,
            registered: 1,
        }

        const mockRegistrations: Props["registrations"] = [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                courseId: 1,
                course: mockCourse,
            },
        ];

        render(
            <Registrations registrations={mockRegistrations} />
        );

        expect(screen.getByText("Registrations")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
});
