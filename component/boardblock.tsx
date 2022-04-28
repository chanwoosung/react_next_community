import { useEffect, useState } from "react";
import Image from 'next/image';
import { API } from "../pages/api/api";
import css from "../styles/boardblock.module.css";
import { Util } from "../public/util/util";
import Link from "next/link";

function BoardBlock(props) {
  console.log(props)
  const imageLoader = (url) => {
    console.log(url);
    return `${url}`;
  }

  return (
    <div>
      <Link href={{
        pathname:`/community/post/${props.pk}`,
        query:{ data:props}
        }}>
        <div className={css.writeblock}>
          <div className={css.writersection}>
            <div className={css.profile_image}>
              <Image src={imageLoader(props.writerProfileUrl)} className={css.writerprofile} width={20} height={20} layout="fixed"/>
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
      </Link>
    </div>
  )
}

export default BoardBlock