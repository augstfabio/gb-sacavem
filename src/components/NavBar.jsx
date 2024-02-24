import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import { useState } from "react";
import logo from '../assets/logo.svg';
import { FaCaretDown } from "react-icons/fa";
function NavBar() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const mostrarMenuMouseEnter = () => {
    setMostrarMenu(true);
  };

  const esconderMenuMouseLeave = () => {
    setMostrarMenu(false);
  };

  const fecharMenu = () => {
    setMostrarMenu(false);
  };

  return (
    <header className={styles.cabecalho}>
      <div className={styles.logo}>
        <Link className={styles.a} to='/gb-sacavem'><h1>Gracie Barra Sacavém</h1></Link>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <Link className={styles.a} to='/gb-cohebsacavem'>Imagens</Link>
        <Link className={styles.a} to='/gb-cohebsacavem'>Localização</Link>
        <Link className={styles.a} to='/gb-cohebsacavem'>Contato</Link>
        <div className={styles.menu}
          onMouseEnter={mostrarMenuMouseEnter}
          onMouseLeave={esconderMenuMouseLeave}
        >
          <button >Sobre <span> <FaCaretDown /></span></button>
          {mostrarMenu && (
            <div className={styles.itens} onClick={fecharMenu}>
              <a href='https://leaodourado.com.br/historia-do-jiu-jitsu/'>História do Jiu Jitsu</a>
              <Link to='/regras'>Regras no Tatame</Link>
              <Link to='/familia'>Família Gracie Barra</Link>
              <Link to='/gb-sacavem/about'>Gracie Barra Sacavém</Link>
              <Link to='/horarios'>Horários</Link>
            </div>
          )}
        </div>
      </ul>
    </header>
  );
}

export default NavBar;
