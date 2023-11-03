import { useParams } from "react-router-dom"

export default function User() {
    const {userID} = useParams();
  return (
    <div className="text-blue-500 text-bold p-6 m-10 text-center bg-black">User: {userID}</div>
  )
}
