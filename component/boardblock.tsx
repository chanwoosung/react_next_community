import { useEffect, useState } from "react";
import Image from 'next/image';
import { API } from "../pages/api/api";
import css from "../styles/boardblock.module.css";
import { Util } from "../public/util/util";

function BoardBlock({categoryName,
                      categoryPk,
                      commentCount,
                      content,
                      imageUrl,
                      likeCount,
                      title,
                      viewCount,
                      writerNickName,
                      writerProfileUrl,
                      writtenAt
                    }) {

  const imageLoader = (url) => {
    console.log(url);
    return `${url}`;
  }

  return (
    <div>
      <div className={css.writeblcok}>
        <div className={css.writersection}>
          <div className={css.profile_image}>
            <Image src={imageLoader(writerProfileUrl)} className={css.writerprofile} width={20} height={20} layout="fixed"/>
          </div>
          <div className={css.profile}>
            <div className={css.writername}>{writerNickName}</div>
            <div className={css.writeinfo}>{categoryName}ㆍ{Util.convertTime(writtenAt)} </div>
          </div>
        </div>
        <div className={css.maincontent}>
          <div className={css.content_title}>
            {title}
          </div>
          <div className={css.content_detail_summary}>
            {content}
          </div>
          {imageUrl !== null ?
          <div className={css.content_detail_image}>
            <Image src={imageLoader(imageUrl)} className={css.image} layout="fill" objectFit="cover"/>
          </div>
          :null
          }
          <div className={css.content_interest_section}>
            <div className={css.content_interest_block}>
              <Image src="/assets/icon/eye.png" objectFit="contain" width="14" height="9.69" />
              {viewCount}
            </div>
            <div className={css.content_interest_block}>
              <Image src="/assets/icon/like-thumb.png" objectFit="contain" width="8" height="12" />
              {likeCount}
            </div>
            <div className={css.content_interest_block}>
              <Image src="/assets/icon/comment.png" objectFit="contain" width="12" height="10" />
              {commentCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardBlock