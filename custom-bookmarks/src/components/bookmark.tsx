import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { Badge } from './ui/badge';

type BookmarkProps = {
  title: string;
  description: string;
  link: string;
  img: string;
  tags?: string[]
};

export default function Bookmark(props: BookmarkProps) {
  return (
    <Card className="flex min-w-[320px] max-w-[320px] flex-col justify-between">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-between gap-[12px] w-[100%]">
        <Link href={props.link} target="_blank">
          <Button variant="default" className="min-w-[100%]">
            Visit
          </Button>
        </Link>
        <div className='flex flex-wrap gap-[8px]'>
          {props.tags?.map((tag) => <Badge key={crypto.randomUUID()} variant={'secondary'}>{tag}</Badge>)}
        </div>
      </CardFooter>
    </Card>
  );
}
