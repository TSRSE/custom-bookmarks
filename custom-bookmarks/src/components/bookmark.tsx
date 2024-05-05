import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

type BookmarkProps = {
  title: string;
  description: string;
  link: string;
  img: string;
};

export default function Bookmark(props: BookmarkProps) {
  return (
    <Card className="flex min-w-[290px] max-w-[290px] flex-col justify-between">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <div className="h-32 w-[100%] relative rounded-[8px]">
          <Image
            src={props.img}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardContent> */}
      <CardFooter className="flex justify-between">
        <Link href={props.link} target="_blank">
          <Button variant="default" className="min-w-[100%]">
            Visit
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
