// import {Spinner} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Loading.css'
import image from "../assets/imglogo.png"

export const Loading = () => {
    return(
        // <div className='dpadre'>
        //     <div className='dhijo'>
        //         {/* <Spinner/> */}
        //     </div>
        // </div>
        <div className='Padre__spinner'>
            <div className='Hijo__spinner'>
                <img src={image}  alt="" className='spinner'/>
            </div>
        </div>
    )
}