import cafecard from '../../styles/cafecard.module.css'

export default function cafeText(props){
    const cafedata = props.cafedata
    return(
        <>
        <div className={cafecard.textboxsize}>
        <div>{cafedata.price}</div>
        <div>{cafedata.atmosphere}</div>
        <div>{cafedata.explanation}</div>
        </div>
        </>
    )
}