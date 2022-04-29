import BackButton from "./backbutton";
import Button from "./button";
import css from "../styles/topbar.module.css";

export default function TobBar({title,destination,obj}) {
    return (
        <div className={css.topbar}>
            <BackButton destination={destination}/>
            <div>{title}</div>
            {obj?.flag?
                <Button
                    text={obj.text}
                    url={obj.url}
                    float={obj.float}
                    width={obj.width}
                    height={obj.height}
                    onClick={obj.onClick}
                />:null
            }
        </div>
    )
}