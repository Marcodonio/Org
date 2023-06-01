import "./Header.css"

function Header(){
    {/*Usamos "className" En Lugar De "class" Para Evitar Confuciones Con El Class de JS*/}
    return <header className="header"> <img src="/img/header.png" alt="Org"/> </header>
}

export default Header