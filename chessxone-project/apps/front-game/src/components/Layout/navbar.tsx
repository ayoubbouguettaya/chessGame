'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from '@chessxone-project/ui';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex content-center h-[90px] border-b text-lg border-cyan-500  w-full  text-sky-100">
      <div className="flex justify-between w-full max-w-[1400px] m-auto">
        <img width={200} src="/chessone.png" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-sky-900">AB</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
