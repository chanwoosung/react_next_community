import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TobBar from "../../../component/tobbar";
import { API } from "../../api/api";
import css from "../../../styles/detail.module.css"
import Image from "next/image";
import { Util } from "../../../public/util/util";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    console.log(router.query);
    const props = JSON.parse(router.query.detail);
    console.log(props);
    // const [data,setData]=useState(router);
    useEffect(()=>{
        getDetail();
    },[]);

    const getDetail = async() => {
        const data = await API.Request(`https://bf36ab19-e70b-44b3-b4fa-96f553ddd580.mock.pstmn.io/community/post?post_pk=${router.query.post_pk}`);
        console.log(data);
    }
    return(
        <div>
            <TobBar destination="글 목록으로" />
            <div>
                <div>
                <div className={css.writeblock}>
                    <div className={css.writersection}>
                        <div className={css.profile_image}>
                        <Image src={Util.imageLoader(props.writerProfileUrl)} className={css.writerprofile} width={20} height={20} layout="fixed"/>
                        </div>
                        <div className={css.profile}>
                        <div className={css.writername}>{props.writerNickName}</div>
                        <div className={css.writeinfo}>{props.categoryName}ㆍ{Util.convertTime(props.writtenAt)} </div>
                        </div>
                    </div>
                    <div className={css.maincontent}>
                        <div className={css.content_title}>
                        {props.title}
                        </div>
                        <div className={css.content_detail_summary}>
                        {props.content}
                        </div>
                        {props.imageUrl !== null ?
                        <div className={css.content_detail_image}>
                        <Image src={imageLoader(props.imageUrl)} className={css.image} layout="fill" objectFit="cover"/>
                        </div>
                        :null
                        }
                        <div className={css.content_interest_section}>
                        <div className={css.content_interest_block}>
                            <Image src="/assets/icon/eye.png" objectFit="contain" width="14" height="9.69" />
                            {props.viewCount}
                        </div>
                        <div className={css.content_interest_block}>
                            <Image src="/assets/icon/like-thumb.png" objectFit="contain" width="8" height="12" />
                            {props.likeCount}
                        </div>
                        <div className={css.content_interest_block}>
                            <Image src="/assets/icon/comment.png" objectFit="contain" width="12" height="10" />
                            {props.commentCount}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}