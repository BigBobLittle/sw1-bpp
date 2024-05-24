import axios from 'axios';

import { RegistrationFormDto } from '@/types/RegistrationFormDto';
import transformRegistrationForm from '../utils/transformRegistrationForm';

export default async function saveRegistrationForm(registrationFormDto: RegistrationFormDto) {
  let registrationData = transformRegistrationForm(registrationFormDto)

  const response = await axios.post('http://localhost:3000/api/register', {
    ...registrationData
  });

  return response.data;
}
