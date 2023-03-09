import React, { useEffect, useRef, useState } from 'react';

import * as S from './styles';
import { ImagePreview } from '../ImagePreview';
import { Header } from '../Header';

const VIDEO_CONSTRAINTS = {
  video: true,
  audio: false,
};
const PHOTO_WIDTH = 640;
const PHOTO_HEIGHT = 480;

export function Example4() {
  const [dataUri, setDataUri] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    async function getVideo() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          VIDEO_CONSTRAINTS
        );
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        await videoRef.current.play();
      } catch (error) {
        console.error(error);
      }
    }

    if (videoRef.current) {
      getVideo();
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  function takePhoto() {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = PHOTO_WIDTH;
    canvas.height = PHOTO_HEIGHT;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, PHOTO_WIDTH, PHOTO_HEIGHT);

    const imageUrl = canvas.toDataURL('image/jpeg');
    setDataUri(imageUrl);
  }

  return (
    <S.Container>
      <Header title="Using Navigator Interface (Web API)" />

      {dataUri ? (
        <ImagePreview dataUri={dataUri} />
      ) : (
        <S.CameraContainer>
          <video ref={videoRef}>Video stream not available</video>
          <canvas ref={canvasRef} />
          <button type="button" onClick={takePhoto} aria-label="Take photo">
            Take photo
          </button>
        </S.CameraContainer>
      )}
    </S.Container>
  );
}
