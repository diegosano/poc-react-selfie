import React, { useState } from 'react';

import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';

import * as S from './styles';
import { ImagePreview } from '../ImagePreview';
import { Header } from '../Header';

import 'react-html5-camera-photo/build/css/index.css';

export function Example1() {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  return (
    <S.Container>
      <Header title="react-html5-camera-photo" />

      {dataUri ? (
        <ImagePreview dataUri={dataUri} />
      ) : (
        <S.CameraContainer>
          {/* <S.Overlay /> */}

          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            idealFacingMode={FACING_MODES.USER}
            imageType={IMAGE_TYPES.JPG}
          />
        </S.CameraContainer>
      )}
    </S.Container>
  );
}
