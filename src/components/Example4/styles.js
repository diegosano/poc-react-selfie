import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 24px;
`;

export const CameraContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 24px;

  video {
    width: 640px;
    height: 480px;
  }

  canvas {
    display: none;
    width: 640px;
    height: 480px;
  }
`;
