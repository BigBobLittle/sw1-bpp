import axios from "axios";


export default async function deleteRegistration(
  id: number
) {
  
  // const res = await fetch(`http://localhost:3000/api/delete/${id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })

  // const data = await res.json()
  // return data
  const response = await axios.delete(`http://localhost:3000/api/delete/${id}`);
  
  return response.data;
}
