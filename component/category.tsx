import { useEffect, useState } from "react";
import Image from 'next/image';
import { API } from "../pages/api/api";
import css from "../styles/category.module.css";

function Category({categories,setCategories,option,onClick}) {
  useEffect(()=>{
    callCategories();
  },[]);

  const callCategories = async() => {
    try {
      const categoryData = await API.Request('https://bf36ab19-e70b-44b3-b4fa-96f553ddd580.mock.pstmn.io/community/category',{})
      console.log(categoryData);
      setCategories(categoryData);
    } catch (error) {
      throw error;
    }
  }

  const checkCategory = (pk) => {
    if(option == pk) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={css.topbar}>
      <div className={css.title}>커뮤니티</div>
      <ul>
        <li className={checkCategory(0)?css.on:null}  onClick={()=>onClick(0)}>전체</li>
        <li className={checkCategory(100)?css.on:null} data-pk="popular"  onClick={()=>onClick(100)}><Image src="/assets/icon/star.png" width={22} height={22} objectFit="contain"/>인기글</li>
        {categories?.map(data => {
          return (
            <li className={checkCategory(data.categoryPk)?css.on:null} key={data.categoryPk} onClick={(e)=>{onClick(data.categoryPk);checkCategory(e);}}>
              {data.categoryName}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Category