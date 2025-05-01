import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
  const data = useLoaderData()

  /*  const [data, setData] = useState([]) // Component ke andar data store aur re-render karne ke liye hota hai. 
  
    useEffect(() => {  //Side effects (API calls, localStorage, DOM updates, event listeners) handle karta hai.
      fetch("https://api.github.com/users/Er-Ayush-DU")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setData(data)
        })
  
    }, [])
    
    */

  return (
    <>
      <div className="bg-amber-400 text-center text-3xl text-black p-4 flex justify-center"> Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git_pic" width={250} />
      </div>
    </>
  )
}

export default Github;

export const GithubLoadFollwer = async () => {
  const response = await fetch("https://api.github.com/users/Er-Ayush-DU")
  return response.json()
}