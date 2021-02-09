import '../../styles/faceComponent/faceComponent.css'
import { BlockSlider } from './slider/BlockSlider';



export default function FaceComponent() {

    return (
        <nav className="navbar-back">

            <nav className="text-header">
                <p className="text-header head">
                    Сервисный центр умных устройств в Санкт-Петербурге
              </p>
            <BlockSlider/> 
            </nav>
        </nav>
    );



}