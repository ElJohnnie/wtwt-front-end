import React from 'react';
import Image from 'next/image';

export interface ImageComponentProps {
  href: string;
}

export default function ImageComponent(props: ImageComponentProps) {
  const { href } = props;
  return (
    <figure className="max-w-lg">
      <Image
        layout="fill"
        objectFit="contain"
        src={href}
        alt="image description"
      />
    </figure>
  );
}
