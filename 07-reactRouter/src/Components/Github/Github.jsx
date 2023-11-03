import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Alokray007')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <>
        <div className='text-center bg-yellow-300 text-black text-3xl text-bold py-4'>Github Followers: {data.followers} </div>
        <img src={data.avatar_url} alt="profilePic" width={300} className="aspect-square" />
    </>

  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Alokray007')
    return response.json();
}
