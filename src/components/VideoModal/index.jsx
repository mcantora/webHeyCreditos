import React, { useEffect, useState } from 'react';
import style from './modal.module.css';
import video from '../../assets/paga-cuota-online/Hey_PagoOnline.mp4';
import videoMobile from '../../assets/paga-cuota-online/pagoonline_mobile.mp4';
import CloseIcon from '@mui/icons-material/Close';

const VideoModal = ({ cerrarModal }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <div className={style.fondoModal}>
          {/* Contenido del modal */}
          <button className={style.cerrarModal} onClick={cerrarModal}>
            <CloseIcon />
          </button>
          <div className={style.modalContenedor}>
            <div className={style.videoDiv}>
              <video className={style.videoModal} controls autoPlay>
                <source src={video} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={style.fondoModalMobile}>
          {/* Contenido del modal */}
          <button className={style.cerrarModal} onClick={cerrarModal}>
            <CloseIcon />
          </button>
          <div className={style.modalContenedor}>
            <div className={style.videoDiv}>
              <video className={style.videoModal} controls autoPlay>
                <source src={videoMobile} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
