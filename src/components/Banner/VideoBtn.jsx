/* import { Link } from "react-router-dom"; */

export default function VideoBtn({ styles, vid,abrirModal }) {
  

  
    return (
      <>       
          <button
            className={styles.linkButtonMobile}
            onClick={ abrirModal}
            
          >
            {vid}
          </button>  
          
          <button
            className={styles.linkButton}
            onClick={ abrirModal}
            style={{width:"15em"}}
          >
            {vid}
          </button>
      </>
    );
}
