import Image from "next/image";
import { useRouter } from "next/router";
import css from "../styles/backbutton.module.css";

export default function BackButton({destination}) {
    const router = useRouter();
    return (
        <div className={css.backbutton_section}>
            <Image src="/assets/icon/back.png" width="14" height="14" layout="fixed" onClick={()=>{
                router.back();
            }}/>
            {destination}
        </div>
    )
}