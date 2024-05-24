import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>
  validationSchema: any;
 
}
  
export default function Input(props: InputProps) {
  return (
    <input
      className="rounded p-4 text-xl w-full"
      placeholder={props.placeholder}
      {...props.register(props.name, props.validationSchema)}
    />
  );
}
