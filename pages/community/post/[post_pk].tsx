import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TobBar from "../../../component/tobbar";
import { API } from "../../api/api";
import css from "../../../styles/detail.module.css"
import Image from "next/image";
import { Util } from "../../../public/util/util";
import BoardBlock from "../../../component/boardblock";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    console.log(router.query);
    const props = JSON.parse(router.query.detail);
    console.log(props);
    // const [data,setData]=useState(router);
    const [data,setData]=useState(props);
    console.log(data);
    useEffect(()=>{
        getDetail();
    },[]);

    const getDetail = async() => {
        const {imageUrl} = await API.Request(`https://bf36ab19-e70b-44b3-b4fa-96f553ddd580.mock.pstmn.io/community/post?post_pk=${router.query.post_pk}`);
        console.log(imageUrl);
        if(imageUrl) {
            props.imageUrl = imageUrl;
            setData(props);
        }
    }
    return(
        <div>
            <TobBar destination="글 목록으로" />
            <BoardBlock key={props.pk}
            categoryPk={props.categoryPk}
            pk={props.pk}
            categoryName={props.categoryName}
            likeCount={props.likeCount}
            commentCount={props.commentCount}
            content={props.content}
            viewCount={props.viewCount}
            writtenAt={props.writtenAt}
            writerProfileUrl={props.writerProfileUrl}
            title={props.title}
            imageUrl={props.imageUrl}
            writerNickName={props.writerNickName}
            />
        </div>
    )
}