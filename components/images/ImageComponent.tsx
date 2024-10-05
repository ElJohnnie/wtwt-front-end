import React from 'react';
import Image from 'next/image';
import { ImageComponentProps } from '../../types';

export default function ImageComponent(props: ImageComponentProps) {
  const { href, title, description } = props;
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <figure className="w-full">
        <Image
          layout="responsive"
          src={href}
          alt="image description"
          width={80}
          height={80}
        />
      </figure>
      <h3 className="font-bold text-slate-900 text-center text-lg mt-3 max-w-x">
        {title}
      </h3>
      <p className="text-slate-700 text-center text-sm mt-2 max-w-sm">
        {description}
      </p>
    </div>
  );
}
