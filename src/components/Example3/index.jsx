import React, { useState } from 'react';

import * as S from './styles';
import { ImagePreview } from '../ImagePreview';
import { Header } from '../Header';

export function Example3() {
  const [dataUri, setDataUri] = useState('');

  function handleInputChange(event) {
    const [file] = event.target.files;

    if (file) {
      setDataUri(URL.createObjectURL(file));
    }
  }

  return (
    <S.Container>
      <Header />

      {dataUri ? (
        <ImagePreview dataUri={dataUri} />
      ) : (
        <input
          type="file"
          name="picture"
          accept="image/*"
          capture="user"
          onChange={handleInputChange}
        />
      )}
    </S.Container>
  );
}
