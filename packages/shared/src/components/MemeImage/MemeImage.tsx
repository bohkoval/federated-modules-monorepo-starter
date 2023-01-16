import React from 'react';
import Image from '../../assets/images/meme.jpg';

const MemeImage: React.FC = () => (
  <div>
    <p>Meme image</p>
    <img src={Image} alt="Meme" />
  </div>
);

export default MemeImage;
