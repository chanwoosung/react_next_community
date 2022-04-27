import { useEffect, useState } from "react";
import Image from 'next/image';
import { API } from "../pages/api/api";
import css from "../styles/category.module.css";

function Category() {
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    callCategories();
  },[]);
  const callCategories = async() => {
    try {
      const categoryData = await API.Request('https://bf36ab19-e70b-44b3-b4fa-96f553ddd580.mock.pstmn.io/community/category',{})
      console.log(categories);
      console.log(categoryData);
      setCategories(categoryData);
      console.log(categories);
    } catch (error) {
      throw error;
    }
  }
  console.log(categories);
  return (
    <div className={css.topbar}>
      <div className={css.title}>커뮤니티</div>
      <ul>
        <li className={css.on}>전체</li>
        <li><Image src="/assets/icon/star.png" width={22} height={22}/>인기글</li>
        {/* {categories.filter(item => {
          console.log(item);
            <li>{item.categoryName}</li>
        })} */}
        {categories.map(data => {
          return (
            <li key={data.categoryPk}>
              {data.categoryName}
            </li>
          )
        })}
        {/* {category.length != 0 ? makeCategory(category):null} */}
      </ul>
    </div>
  )
}

export default Category