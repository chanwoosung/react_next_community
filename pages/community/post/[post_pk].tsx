import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TobBar from "../../../component/tobbar";
import { API } from "../../api/api";
import css from "../../../styles/detail.module.css"
import Image from "next/image";
import { Util } from "../../../public/util/util";
import BoardBlock from "../../../component/boardblock";
import { ArticleDetail } from "../../../model/articlemodel";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    console.log(router.query);
    const props = JSON.parse(router.query.detail);
    console.log(props);
    // const [data,setData]=useState(router);
    const [data,setData]=useState(props);
    const [like,setLike] = useState(data.likeCount);
    console.log(data);
    useEffect(()=>{
        getDetail();
    },[]);

    const clickFollow = () => {
        props.likeCount++;
        setLike(props);
    }

    const getDetail = async() => {
        const {imageUrl} = await API.Request<ArticleDetail>(`https://a5b357ce-1d22-43c0-9664-8f9b56ef2753.mock.pstmn.io/community/post?post_pk=${router.query.post_pk}`);
        console.log(imageUrl);
        if(imageUrl) {
            props.imageUrl = imageUrl;
            setData(props);
        }
    }
    return(
        <div>
            <TobBar destination="글 목록으로" />
            <div className={css.wrapper}>
                <BoardBlock key={data.pk}
                categoryPk={data.categoryPk}
                pk={data.pk}
                categoryName={data.categoryName}
                likeCount={data.likeCount}
                commentCount={data.commentCount}
                content={data.content}
                viewCount={data.viewCount}
                writtenAt={data.writtenAt}
                writerProfileUrl={data.writerProfileUrl}
                title={data.title}
                imageUrl={data.imageUrl}
                writerNickName={data.writerNickName}
                clickFollow={clickFollow}
                />
            </div>
        </div>
    )
}