import { useEffect, useState } from "react";
import Image from 'next/image';
import { API } from "../pages/api/api";
import css from "../styles/boardblock.module.css";

function BoardBlock() {

  const [contents,setContents] = useState([]);

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
    <div className={css.backboard}>
      
    </div>
  )
}

export default BoardBlock