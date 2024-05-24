import { Course } from "@prisma/client"

export type Props = {
  courses: Course[];
};

export default function Courses({ courses }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl text-gray-700 mb-6">Courses</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Max Capacity
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number Registered
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course.id} data-testid="course-row">
              <td className="py-4 px-6 whitespace-nowrap">{course.id}</td>
              <td className="py-4 px-6 whitespace-nowrap">{course.title}</td>
              <td className="py-4 px-6 whitespace-nowrap">{course.description}</td>
              <td className="py-4 px-6 whitespace-nowrap">{course.cost}</td>
              <td className="py-4 px-6 whitespace-nowrap">{course.type}</td>
              <td className="py-4 px-6 whitespace-nowrap">{course.capacity}</td>
              <td className="py-4 px-6 whitespace-nowrap">{course.registered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
