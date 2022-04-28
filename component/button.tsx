import Image from "next/image";
import css from "../styles/button.module.css";

function Button({text,url,float,width,height,onClick}) {
    return (
        <div className={float?css.float_btn:css.btn} onClick={onClick} style={{width: width,height: height}}>
            <div className={css.btn_text}>
                {text}
            </div>
            {url !== null ?
                <Image src={url} width={22} height={22}/>
                : null
            }
        </div>
    )
}

export default Button;