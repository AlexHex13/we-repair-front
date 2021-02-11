import '../../../styles/faceComponent/faceComponent.css'
import logo from "../../../static/head-img.png"


export function BlockSlider() {

    return (
        <nav className="block">
            <img className="pic" src={logo} />

            <h4 className="sale">
                Скидки 15% на все виды ремонта
         до<br /> конца июля
        </h4>
            <div className="form">
                <form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="staticEmail2" class="sr-only">Email</label>
                        <input type="text" class="form-control" id="text" placeholder="text" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Password</label>
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Оставить заявку</button>
                </form>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1" >
                        Связаться с вами по смс
                    </label>
                    <p className ="little-text">Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных</p>
                </div>
            </div>
        </nav >
    )

}