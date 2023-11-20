import Style from "./Button.module.css";

export default function Button({ type1, content1, ref1 }) {

    let typeStyle = (type1=="white")?Style.whiteButton:Style.blackButton;

    return (
        <div className={`${Style.container} ${typeStyle}`}>
            <a href={ref1}>{content1}</a>
        </div>
    )
}