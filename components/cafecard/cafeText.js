import cafecard from '../../styles/cafecard.module.css'

export default function CafeText(props){
    const cafedata = props.cafedata
    return(
        <>
        <div className={cafecard.textboxsize}>
        <div>価格帯：{cafedata.price}</div>
        <div>雰囲気：{cafedata.atmosphere}</div>
        <div>説明：{cafedata.explanation}</div>
        </div>
        </>
    )
}