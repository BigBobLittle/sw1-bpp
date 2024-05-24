import Image from "next/image";

import { RegistrationWithCourse } from "@/types";
import deleteRegistration from "@/lib/services/deleteRegistration";
import { useRouter } from "next/router";

export interface Props {
  registrations: RegistrationWithCourse[];
  onEdit: (registration:RegistrationWithCourse) => void
}

export default function Registrations({ registrations, onEdit }: Props) {
 const router = useRouter();
  const refetchData = () => {
    // router.reload();
    router.replace(router.asPath);
  };
 
  const handleDelete = async (id:number) => {
    try {
      await deleteRegistration(id)
      refetchData()
    } catch (error) {
      console.log(error)
    }
  }
  
 
  return (
    <>
      <div className="mb-3">
        <h2 className="text-3xl text-gray-700">Registrations</h2>
      </div>
      {registrations.map((registration, i: number) => (
        <div className="mb-3" key={i}>
          <div className="border rounded-lg p-4 flex">
            <div className="my-auto">
              <Image
                src={`https://i.pravatar.cc/50?img=${i}`}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="text-xl text-gray-700">
                {registration.firstName} {registration.lastName}
              </p>
              <p className="text-gray-500">{registration.email}</p>
              <p className="text-l text-blue-500">
                {registration.course.title}
              </p>

              <div className="mt-2">
                <button className="mr-2 rounded-md bg-blue-500 text-white px-2" onClick={() => onEdit(registration)}>Edit</button>
                <button className="mr-2 rounded-md bg-red-500 text-white px-2" onClick={()=> handleDelete(registration.id)}>Delete</button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </>
  );
}
