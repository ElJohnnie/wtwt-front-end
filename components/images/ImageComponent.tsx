import React from 'react';
import Image from 'next/image';

export interface ImageComponentProps {
  href: string;
  title: string;
  description: string;
}

export default function ImageComponent(props: ImageComponentProps) {
  const { href, title, description } = props;
  return (
    <div className="flex flex-col items-center mx-auto max-w-sm">
      <figure className="relative w-full h-64">
        <Image
          layout="fill"
          objectFit="contain"
          src={href}
          alt="image description"
          className="absolute inset-0"
        />
      </figure>
      <h3 className="font-bold text-pink-600 text-center text-lg mt-3 max-w-x">
        {title}
      </h3>
      <p className="text-pink-600 text-center text-sm mt-2 max-w-sm text-justify">
        {description}
      </p>
    </div>
  );
}
