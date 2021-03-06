import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/index.module.css'
import { API } from '../api/api'
import Category from '../../component/category'
import BoardBlock from '../../component/boardblock'
import Button from '../../component/button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArticleListItem } from './post/[post_pk]'

const Home: NextPage = () => {
  const [contents,setContents] = useState<ArticleListItem[]>([]);
  const [categories,setCategories] = useState([]);
  const [option,setOption] = useState(0);
  const router = useRouter();

  useEffect(()=>{
    callContents();
  },[]);

  const callContents = async() => {
    try {
      const contentsData = await API.Request<ArticleListItem[]>('https://a5b357ce-1d22-43c0-9664-8f9b56ef2753.mock.pstmn.io/community/list',{})
      setContents(contentsData);
    } catch (error) {
      throw error;
    }
  }

  const clcikOption = (pk) => {
    console.log(pk);
    setOption(pk);
  }

  const checkOption = (pk,viewCount) => {
    if(option == 0) return true;
    if(option == 100) {
        if(viewCount >= 100) return true;
        else return false;
    }
    if(option == pk) {
        return true;
    } else {
        return false;
    }
  }

  const moveToDetail = (content) => {
    content.check=false;
    console.log("working",content);
    router.push({
      pathname:`/community/post/${content.pk}`,
      query:{detail:JSON.stringify(content)},
    },`/community/post/${content.pk}`);
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Call bus Assginment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Category onClick={clcikOption} categories={categories} setCategories={setCategories} option={option}/>
      <div className={styles.backboard}>
        {contents.map((content)=>{
          if(checkOption(content.categoryPk,content.viewCount)) {
            console.log(Array.isArray(content.imageUrl));
              return(
                // <Link href={{
                //   pathname:`/community/post/${content.pk}`,
                //   query:{detail:JSON.stringify(content)},
                //   }}
                //   as={`/community/post/${content.pk}`} passHref>
                  <BoardBlock key={content.pk}
                  categoryPk={content.categoryPk}
                  pk={content.pk}
                  categoryName={content.categoryName}
                  likeCount={content.likeCount}
                  commentCount={content.commentCount}
                  content={content.content}
                  viewCount={content.viewCount}
                  writtenAt={content.writtenAt}
                  writerProfileUrl={content.writerProfileUrl}
                  title={content.title}
                  imageUrl={content.imageUrl}
                  writerNickName={content.writerNickName}
                  check={false}
                  onClick={()=>{moveToDetail(content)}}  />
                // </Link>
            )
          }
        })}
      </div>
      <Button
      text="?????????"
      url="/assets/icon/finger-write.png"
      float={true}
      width="100px"
      height="52px"/>
    </div>
  )
}

export default Home
