import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'




export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class = "header">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="navbar-text">Ваш город: </span>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Санкт-Петербург
        </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Москва</a>
              <a class="dropdown-item" href="#">Владивосток</a>
              <a class="dropdown-item" href="#">Бишкек</a>
            </div>
          </li>
          <li class="nav-item">
                <span class="navbar-text">  <FontAwesomeIcon icon={faMapMarker} /> Мучной переулок, 32124 Садовая улица </span>
          </li>
          <li class="nav-item">
                <span class="navbar-text">Главная </span>
          </li>
          <li class="nav-item">
                <span class="navbar-text"> <a href="/src/pages/shares/Shares.jsx">Акции</a>  </span>
          </li>
          <li class="nav-item">
                <span class="navbar-text">Прайс-лист </span>
          </li>
          <li class="nav-item">
                <span class="navbar-text">Условия работы </span>
          </li>
          <li class="nav-item">
                <span class="navbar-text">Гарантии </span>
          </li>
          <li class="nav-item">
                <span class="navbar-text">Контакты </span>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

