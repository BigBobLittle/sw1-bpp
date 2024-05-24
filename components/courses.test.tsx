import React from "react"
import { render, screen } from "@testing-library/react"

import Courses, { Props } from "./courses"

describe("<Courses />", () => {
    it("should render correctly with 1 course", async() => {
        const mockCourses: Props["courses"] = [
            {
                id: 1,
                title: "fake title 1",
                description: "fake description 1",
                cost: 1,
                type: "fake type 1",
                capacity: 1,
                registered: 1,
            },
        ];

        render(<Courses courses={mockCourses} />);

        expect(screen.getByText("Courses")).toBeInTheDocument();
        expect(screen.getAllByTestId("course-row").length).toStrictEqual(1);
        expect(screen.getByRole("cell", { name: "fake title 1" })).toBeInTheDocument();
    })
})
