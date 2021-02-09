import "../../styles/faceComponent/faceComponent.css"
import Blocks from "./Blocks"
import FormCount from "./FormCount"
import FourthBlock from "./FourthBlock"
import SecondBlock from "./SecondBlock"
import ThirdBlock from "./ThirdBlock"


export default function BodyPart() {

    return (
        <>
            <span className="prebody">
                <i class="fa fa-android fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-windows  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-apple  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-windows  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-android  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-windows  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-apple  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-android fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-apple  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-android  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-windows  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-apple  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-android  fa-2x" aria-hidden="true" ></i>
                <i class="fa fa-windows  fa-2x" aria-hidden="true" ></i>

            </span>
            <span className="cards">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </span>
            <Blocks/>
            <FormCount/>
            <SecondBlock/>
            <ThirdBlock/>
            <FourthBlock/>
        </>
    )


}