import Bookmark from "@/components/bookmark";
import { ModeToggle } from "@/components/theme-toggle";
import { TypographyH1 } from "@/components/typography/H1";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="flex flex-row w-[100%] items-center justify-start gap-16">
        {/* <Button variant={"outline"}>{"That doesn't do anytginh yet"}</Button> */}
        <ModeToggle/>
      </div>
      <div className="flex justify-center">
        <div className="flex flex justify-center flex-col w-[100%] py-16 gap-8 flex-wrap">
          <div className="flex flex-row w-[100%] py-2 gap-8 flex-wrap ">
            <TypographyH1>Design</TypographyH1>
            <div className="flex flex-row w-[100%] py-2 gap-8 flex-wrap ">
            <Bookmark 
              title="Onepagelove" 
              description="One Page websites, curated. Since 2008, we have curated 8383 Single Page websites. Learn more about One Pagers or submit yours to get featured to 150k designers, devs & makers each month." 
              img="" 
              link="https://onepagelove.com/" 
            />

            <Bookmark 
              title="#madeontilda" 
              description="Галерея лучших проектов пользователей Tilda и наглядные примеры современного веб-дизайна. Все примеры в подборке сделаны на платформе." 
              img="" 
              link="https://tilda.cc/ru/madeontilda/" 
            />

            <Bookmark 
              title="Pinterest" 
              description="Best platfor for insparation" 
              img="" 
              link="https://ru.pinterest.com/" 
            />

            <Bookmark 
              title="Behance.net" 
              description="Behance is the world's largest creative network for showcasing and discovering creative work." 
              img="" 
              link="https://www.behance.net/" 
            />
            </div>
          </div>
          
          <div className="flex flex-row w-[100%] py-16 gap-8 flex-wrap ">
          <TypographyH1>Front-end</TypographyH1>
            <div className="flex flex-row w-[100%] py-2 gap-8 flex-wrap ">

            <Bookmark 
                title="React.JS" 
                description="The library for web and native user interfaces" 
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg" 
                link="https://react.dev/" 
              />

            <Bookmark 
              title="Next.JS" 
              description="React The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions." 
              img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg" 
              link="https://nextjs.org/" 
            />

              <Bookmark 
                title="Tailwind" 
                description="Makes CSS easier [a bit]" 
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg" 
                link="https://tailwindcss.com/docs/installation" 
              />

            <Bookmark 
              title="shadcn/ui" 
              description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source." 
              img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg" 
              link="https://ui.shadcn.com/" 
            />

            

          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
