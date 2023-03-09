import Webcam from 'react-webcam';
import React, { useState } from 'react';

import * as S from './styles';
import { ImagePreview } from '../ImagePreview';
import { Header } from '../Header';

export function Example2() {
  const [dataUri, setDataUri] = useState('');

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setDataUri(imageSrc);
  }, [webcamRef]);

  return (
    <S.Container>
      <Header title="react-webcam" />

      {dataUri ? (
        <ImagePreview dataUri={dataUri} />
      ) : (
        <S.CameraContainer>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: 'user',
            }}
            width="100%"
            mirrored
          />

          <button onClick={capture}>Capture photo</button>
        </S.CameraContainer>
      )}
    </S.Container>
  );
}
