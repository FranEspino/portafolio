import React from "react";
import Dev from "../assets/dev.json";
import Lottie from "react-lottie";
import styles from '../../styles/Home.module.css';
import { useWindowSize } from "@react-hook/window-size/throttled";

export default function PageNotFound() {
  const [width] = useWindowSize();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dev,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return( 
    <div className={styles.AnimeDev}>
          <Lottie options={defaultOptions} />
    </div>
   
  );
  
}
