import ClubDashBoard from "@/components/Club/ClubDashboard";
import Private from "@/components/auth/Private";
import { isAuth } from "@/actions/auth";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/404.module.css";
import { API } from "@/config";

const ClubDashBoardIndex = () => {

    const [canRenderDashboard, setCanRenderDashboard] = useState(false);
    const router = useRouter();
    const { username } = router.query;

    const checkUsernameExists = async () => {
        try {
            const response = await fetch(`${API}/v1/club/username-exists?username=${username}`, {method: 'GET'});
            const data = await response.json();
            console.log(data);
            if (data.exists) {
                if (isAuth() && isAuth().username == username) {
                    setCanRenderDashboard(true);
                }
            } else {setCanRenderDashboard(false);}
        } catch (err) {console.error(err);setCanRenderDashboard(false);} 
    };

    useEffect(() => {
        if (username) {
            checkUsernameExists();
        }
    }, [username]);


    return (
        <Private>

            {canRenderDashboard ? (
                <ClubDashBoard />
            ) : (
                <div className="main mx-auto flex flex-col w-full items-center justify-center py-12">
      <img src="/404 Error-light.png" className=' h-[50vh] md:h-[70vh]' />
      <h1 className='w-full text-center my-4 text-2xl font-semibold'>We Couldn't find the Page you are Looking for</h1>
      <button className='mx-auto rounded-md bg-[#509613] text-white px-2 py-1' onClick={()=>router.back()}>Go back</button>
    </div>
            )}

        </Private>
    )
}

export default ClubDashBoardIndex