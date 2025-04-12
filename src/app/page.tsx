import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={25}
              className="dark:invert"
              priority
            />
            <span className="text-xl font-bold">Template</span>
          </div>
          <ModeToggle />
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Next.js 项目模板
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              一个现代化的 Next.js 模板，集成了 Shadcn UI、Tailwind CSS、Framer Motion 等技术栈。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                开始使用
              </Button>
              <Button variant="outline" size="lg">
                查看文档
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">安全可靠</h3>
              <p className="text-sm text-muted-foreground">
                使用最新的安全实践和依赖项，确保您的应用程序安全可靠。
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                  <line x1="16" x2="2" y1="8" y2="22" />
                  <line x1="17.5" x2="9" y1="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">美观易用</h3>
              <p className="text-sm text-muted-foreground">
                使用 Shadcn UI 和 Tailwind CSS 构建美观、响应式的用户界面。
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">高性能</h3>
              <p className="text-sm text-muted-foreground">
                基于 Next.js 的服务器组件和流式渲染，提供卓越的性能和用户体验。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Next.js 模板. 保留所有权利。
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:underline underline-offset-4">条款</a>
            <a href="#" className="hover:underline underline-offset-4">隐私政策</a>
            <a href="#" className="hover:underline underline-offset-4">联系我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
