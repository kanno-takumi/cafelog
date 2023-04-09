//要素として写真、文章を取り入れる。
import cardstyle from '../../styles/cafecard.module.css'
import CafeImage from './cafeImage'
import CafeText from './cafeText'

export default function cafecard(props){
    const cafedata = props.cafedata
    const imageName = cafedata.image
    // const name = cafedata.name
    // const store = cafedata.store
    // const explanation = cafedata.explanation
    // const atmosphere = cafedata.atmosphere
    return(
        <div className={cardstyle.cardsize}>
            
            <h3 className={cardstyle.cafename}>{cafedata.name}{cafedata.store}</h3>
            <CafeImage imagepath={imageName}/>
            <CafeText cafedata={cafedata}/>
        </div>
    )
}