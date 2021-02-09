import logo from "../../static/video.png"


export default function SecondBlock(){
    return(
        <>
        
        <nav className="container-remont">

            <nav className="text-container">
                <p className="text">
                Работаем лучше всех. <br/>
                Только посмотрите!
                </p>
                <p>
                Наш сервисный центр в Санкт-Петербурге <br/>
                 занимается проведением качественного  ремонта.
                </p>
                <button type="button" class="btn btn-warning">Warning</button>
            </nav>
                <nav className="image">
                    <img src={logo}/>
                </nav>
        </nav>
        
        </>
    )
}