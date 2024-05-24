import saveRegistrationForm from "@/lib/services/saveRegistrationFormService";
import { Course } from "@prisma/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Dropdown from "./dropdown";
import Input from "./input";
import InputSpacer from "./input-spacer";
import { useEffect } from "react";

const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

export interface Props {
  courses: Course[];
  initialValues ?: {
    firstName: string;
    lastName: string;
    email: string;
    courseId: number;
  };
  isEdit: boolean;
  submitHandler: (data:any) => Promise<void>

}

export default function RegistrationForm({ courses, initialValues, isEdit, submitHandler }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues || {
      firstName: "",
      lastName: "",
      email: "",
      courseId: undefined,
    },

  });


  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);
  
  const router = useRouter();
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const refetchData = () => {
    // router.reload();
    router.replace(router.asPath);
  };
  const onFormSubmission = async (data: any, event: any) => {
    try {
      await submitHandler(data)
      // await saveRegistrationForm(data);
      event.target.reset();
      refetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="mb-3">
        <h2 className="text-3xl text-white">
          {isEdit ? "Edit Registration" : "Register onto Course"}
        </h2>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit(onFormSubmission)}>
        <InputSpacer>
          <Input
            placeholder="First Name"
            name="firstName"
            register={register}
            validationSchema={{ required: true }}
          />
          {errors.firstName && (
            <FormError errorMessage="First Name is required" />
          )}
        </InputSpacer>
        <InputSpacer>
          <Input
            placeholder="Last Name"
            name="lastName"
            register={register}
            validationSchema={{ required: true }}
          />
          {errors.lastName && (
            <FormError errorMessage="Last Name is required" />
          )}
        </InputSpacer>

        <InputSpacer>
          <Input
            placeholder="Email"
            name="email"
            register={register}
            validationSchema={{
              required: true,
              pattern: {
                value: emailRegex,
                message: "Invalid email address",
              },
            }}
          />
          {errors.email && (
            <FormError
              errorMessage={errors.email?.message || "Email is required"}
            />
          )}
        </InputSpacer>
        <InputSpacer>
          <Dropdown
            placeholder="Course"
            courses={courses}
            name="courseId"
            register={register}
            validationSchema={{ required: true }}
          />
          {errors.courseId && <FormError errorMessage="Course is required" />}
        </InputSpacer>

        <button
          className="bg-blue-500 rounded-md p-4 text-blue-100"
          type="submit"
        >
          {isEdit ? "Update" : "Register"}
        </button>
      </form>
    </>
  );
}
