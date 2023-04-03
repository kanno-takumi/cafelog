import cafecardstyle from '../../styles/cafecard.module.css'
import { getCafeName } from '../../firebase/firebase'

export default function cafeText(props){
    return(
        
        <div className={cafecardstyle.textboxsize}>
        {props.explanation}
        </div>
    )
}