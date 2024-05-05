import Bookmark from '@/components/bookmark';
import { ModeToggle } from '@/components/theme-toggle';
import { TypographyH1 } from '@/components/typography/H1';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="flex w-[100%] flex-row items-center justify-start gap-16">
        {/* <Button variant={"outline"}>{"That doesn't do anytginh yet"}</Button> */}
        <ModeToggle />
      </div>
      <div className="flex justify-center">
        <div className="flex flex w-[100%] flex-col flex-wrap justify-center gap-8 py-16">
          <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
            <TypographyH1>Design</TypographyH1>
            <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
              <Bookmark
                title="Onepagelove"
                description="One Page websites, curated. Since 2008, we have curated 8383 Single Page websites. Learn more about One Pagers or submit yours to get featured to 150k designers, devs & makers each month."
                img=""
                link="https://onepagelove.com/"
              />

              <Bookmark
                title="#madeontilda"
                description="An inspiring selection of finest Tilda projects and a modern web design showcase. All websites from the collection are designed on Tilda."
                img=""
                link="https://tilda.cc/madeontilda/"
              />

              <Bookmark
                title="Pinterest"
                description="Best platfor for insparation."
                img=""
                link="https://pinterest.com/"
              />

              <Bookmark
                title="Behance.net"
                description="Behance is the world's largest creative network for showcasing and discovering creative work."
                img=""
                link="https://www.behance.net/"
              />
            </div>
          </div>

          <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
            <TypographyH1>Front-end</TypographyH1>
            <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
              <Bookmark
                title="React.JS"
                description="The library for web and native user interfaces."
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
                description="Makes CSS easier [a bit]."
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

          <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
            <TypographyH1>Back-end</TypographyH1>
            <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
              <Bookmark
                title=".NET"
                description=".NET is the free, open-source, cross-platform framework for building modern apps and powerful cloud services."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://dotnet.microsoft.com/en-us/"
              />

              <Bookmark
                title="Entity Framework"
                description="Entity Framework is a modern object-relation mapper that lets you build a clean, portable, and high-level data access layer with .NET."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://learn.microsoft.com/en-us/ef/"
              />

              <Bookmark
                title="Redis"
                description="Redis is often referred to as a data structures server."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://github.com/redis/redis"
              />

              <Bookmark
                title="NGINX"
                description="Nginx is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="http://nginx.org/en/"
              />

              <Bookmark
                title="Min.io"
                description="MinIO is a high-performance, S3 compatible object store."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://min.io/"
              />

              <Bookmark
                title="PostgreSQL"
                description="PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://www.postgresql.org"
              />
            </div>
          </div>

          <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
            <TypographyH1>DevOps</TypographyH1>
            <div className="flex w-[100%] flex-row flex-wrap gap-8 py-2 ">
              <Bookmark
                title="Docker"
                description="Containerize applications for consistency."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://www.docker.com/"
              />

              <Bookmark
                title="Kubernetes"
                description="Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://learn.microsoft.com/en-us/ef/"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
