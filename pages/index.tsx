import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/index.module.css'
import { API } from '../pages/api/api'
import Category from '../component/category'
import BoardBlock from '../component/boardblock'
import Button from '../component/button'

const List: NextPage = () => {
  const [contents,setContents] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    callContents();
  },[]);

  const callContents = async() => {
    try {
      const contentsData = await API.Request('https://bf36ab19-e70b-44b3-b4fa-96f553ddd580.mock.pstmn.io/community/list',{})
      setContents(contentsData);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Call bus Assginment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Category categories={categories} Setter={setCategories}/>
      <div className={styles.backboard}>
        {contents.map((content)=>{
          console.log("???",content);
          return(<BoardBlock key={content.pk}
          categoryPk={content.categoryPk}
          categoryName={content.categoryName}
          likeCount={content.likeCount}
          commentCount={content.commentCount}
          content={content.content}
          viewCount={content.viewCount}
          writtenAt={content.writtenAt}
          writerProfileUrl={content.writerProfileUrl}
          title={content.title}
          imageUrl={content.imageUrl}
          writerNickName={content.writerNickName}  />
        )})}
      </div>
      <Button
      text="글쓰기"
      url="/assets/icon/finger-write.png"
      float={true}
      width="100px"
      height="52px"/>
    </div>
  )
}

export default List
