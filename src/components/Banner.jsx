import React from 'react'
import Animate from "../components/Devanimate";
import Button from "@material-ui/core/Button";
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Typical from 'react-typical';
const Banner = () => {
    return (
<div className={styles.Banner}>
        <div className={styles.InfoBanner}>
          <h1>
            ¡Hola! soy Fran Espino, desarrollo productos que generan experiencias</h1>
            <h1 className={styles.Typical}>
          <Typical
            loop={Infinity}
            color={"#3F51B5"}
            wrapper="p"
            steps={
              [
                'Increíbles 🚀.',
                 3000,
                 'Asombrosas  💫.',
                 3000,
                 'Creativas  ✍🏻.',
                 3000,
              ]
            }
          />
          </h1>
          <span className={styles.InfoTextBanner}>
            ¡Un placer conocerte! Sé que mi portafolio no es perfecto pero estos
            proyectos fueron desarrollados con mucho esfuerzo
          </span>
          <div>
            {" "}
            <Link href="/Projects">
            <Button variant="outlined" color="primary">
              Proyectos
            </Button>
            </Link>
          </div>
        </div>
        <div className={styles.ContainerAnimeDev}>
        <Animate />
        </div>
      </div>
    )
}

export default Banner
