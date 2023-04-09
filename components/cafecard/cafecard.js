//要素として写真、文章を取り入れる。
import cardstyle from '../../styles/cafecard.module.css'
import CafeImage from './cafeImage'
import CafeText from './cafeText'

export default function CafeCard(props){
    const cafeData = props.cafeData
    const cafeName = cafeData.name
    const cafeStore = cafeData.store
    const imageUrl = cafeData.imageurl

    // const name = cafedata.name
    // const store = cafedata.store
    // const explanation = cafedata.explanation
    // const atmosphere = cafedata.atmosphere
    return(
        <div className={cardstyle.cardsize}>
            
            <h3 className={cardstyle.cafename}>{cafeName}{cafeStore}</h3>
            <CafeImage imageUrl={imageUrl}/>
            <CafeText cafedata={cafeData}/>
        </div>
    )
}