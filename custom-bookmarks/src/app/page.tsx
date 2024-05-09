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
                tags={['Design', 'UI']}
              />

              <Bookmark
                title="#madeontilda"
                description="An inspiring selection of finest Tilda projects and a modern web design showcase. All websites from the collection are designed on Tilda."
                img=""
                link="https://tilda.cc/madeontilda/"
                tags={['Design', 'UI']}
              />

              <Bookmark
                title="Pinterest"
                description="Best platfor for insparation."
                img=""
                link="https://pinterest.com/"
                tags={['Design', 'UI', 'Insparation']}
              />

              <Bookmark
                title="Behance.net"
                description="Behance is the world's largest creative network for showcasing and discovering creative work."
                img=""
                link="https://www.behance.net/"
                tags={['Design', 'UI', 'Insparation']}
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
                tags={['UI', 'JS', 'TS', 'Library']}
              />

              <Bookmark
                title="Next.JS"
                description="React The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://nextjs.org/"
                tags={['UI', 'JS', 'TS', 'Library', 'Framework']}

              />

              <Bookmark
                title="Tailwind"
                description="Makes CSS easier [a bit]."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://tailwindcss.com/docs/installation"
                tags={['Design', 'UI', 'CSS', 'Library']}
              />

              <Bookmark
                title="shadcn/ui"
                description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://ui.shadcn.com/"
                tags={['Componetns', 'UI Kit', 'Library', '💙']}
              />

              <Bookmark
                title="Patterns.dev"
                description="Patterns.dev is a free online resource on design, rendering, and performance patterns for building powerful web apps with vanilla JavaScript or modern frameworks."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://www.patterns.dev/react/compound-pattern/"
                tags={['Theory', 'Design pattern', 'Components', 'Library', 'JS']}
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
                tags={['.NET', 'C#', 'Framework']}
              />

              <Bookmark
                title="Entity Framework"
                description="Entity Framework is a modern object-relation mapper that lets you build a clean, portable, and high-level data access layer with .NET."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://learn.microsoft.com/en-us/ef/"
                tags={['.NET', 'C#', 'Framework', 'Library', 'Database', 'SQL']}
              />

              <Bookmark
                title="Redis"
                description="Redis is often referred to as a data structures server."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://github.com/redis/redis"
                tags={['Redis', 'Cache', 'Hash', 'Key-value', 'Library', 'Database', 'SQL']}

              />

              <Bookmark
                title="NGINX"
                description="Nginx is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="http://nginx.org/en/"
                tags={['Web', 'Server', 'Load balancer', 'Proxy']}
              />

              <Bookmark
                title="Min.io"
                description="MinIO is a high-performance, S3 compatible object store."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://min.io/"
                tags={['S3', 'Bucket', 'Object store', 'Kubernetes']}
              />

              <Bookmark
                title="Kafka"
                description="Apache Kafka is an open-source distributed event streaming."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://kafka.apache.org"
                tags={['Distributed event streaming', 'Message', 'Consumer-Producer', 'Micro-service']}
              />

              <Bookmark
                title="PostgreSQL"
                description="PostgreSQL is a powerful, open source object-relational database system."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://www.postgresql.org"
                tags={['Database', 'SQL', 'Data']}
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
                tags={['Docker', 'Container', 'Image', 'Isolated environment']}
              />

              <Bookmark
                title="Kubernetes"
                description="Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://learn.microsoft.com/en-us/ef/"
                tags={['Kubernetes', 'k8s', 'Docker', 'Container', 'CI / CD', 'Orchestration', 'Isolated environment']}
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
                title="Kafka"
                description="Apache Kafka is an open-source distributed event streaming."
                img="https://tailwindcss.ru/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                link="https://kafka.apache.org"
              />

              <Bookmark
                title="PostgreSQL"
                description="PostgreSQL is a powerful, open source object-relational database system."
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
