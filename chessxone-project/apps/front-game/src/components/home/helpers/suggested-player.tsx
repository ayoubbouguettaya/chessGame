
import React from 'react';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@chessxone-project/ui';
import Image from 'next/image';

type Props = {};

const SuggestedPlayer = (props: Props) => {
  return (
    <section>
      <h3>Suggested Player</h3>
      <div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-60">
                <div className="p-1">
                  <Card className="border-2 border-sky-500">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <Image
                        className="p-1 rounded-2xl"
                        width={500}
                        height={400}
                        alt="avatar"
                        src={'/avatar/default.webp'}
                      />
                      <p>user 87873</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Invite</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
};

export default SuggestedPlayer;
