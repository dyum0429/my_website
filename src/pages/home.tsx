import { ArrowRight, Code, Download, ExternalLink, Github, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"


export default function Home() {



  return (
    <div className="flex min-h-screen flex-col">

        <main className="flex-1">
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
                Hi, I'm Daniel Yum.
                <br />
                Front-End Developer.
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                I build accessible, responsive web applications with modern technologies. Currently focused on React and TypeScript.
                </p>
            </div>
            <div className="flex gap-4">
                <Button className="gap-1.5">
                View My Work
                <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-1.5">
                Download CV
                <Download className="h-4 w-4" />
                </Button>
            </div>
            </section>

            <section id="about" className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex flex-col gap-4 md:max-w-[58rem]">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                    I'm a full-stack developer with 5+ years of experience building web applications. I specialize in
                    JavaScript, React, Node.js, and modern web technologies.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                    My journey in web development started when I built my first website in college. Since then, I've
                    worked with startups and established companies to create intuitive and performant digital experiences.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Avatar className="h-64 w-64">
                    <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Profile" />
                    <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                </div>
                </div>
            </div>
            </section>

            <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Here are some of my recent projects. Check out my GitHub for more.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
                <Card className="flex flex-col">
                <CardHeader>
                    <div className="overflow-hidden rounded-md">
                    <img
                        src="/placeholder.svg?height=180&width=320"
                        alt="Project 1"
                        width={320}
                        height={180}
                        className="aspect-video object-cover transition-all hover:scale-105"
                    />
                    </div>
                    <CardTitle className="mt-4">E-commerce Platform</CardTitle>
                    <CardDescription>A full-featured online store built with Next.js and Stripe</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                    <Github className="h-4 w-4" />
                    Code
                    </Button>
                    <Button size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                    </Button>
                </CardFooter>
                </Card>
                <Card className="flex flex-col">
                <CardHeader>
                    <div className="overflow-hidden rounded-md">
                    <img
                        src="/placeholder.svg?height=180&width=320"
                        alt="Project 2"
                        width={320}
                        height={180}
                        className="aspect-video object-cover transition-all hover:scale-105"
                    />
                    </div>
                    <CardTitle className="mt-4">Task Management App</CardTitle>
                    <CardDescription>A collaborative task manager with real-time updates</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                    <Github className="h-4 w-4" />
                    Code
                    </Button>
                    <Button size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                    </Button>
                </CardFooter>
                </Card>
                <Card className="flex flex-col">
                <CardHeader>
                    <div className="overflow-hidden rounded-md">
                    <img
                        src="/placeholder.svg?height=180&width=320"
                        alt="Project 3"
                        width={320}
                        height={180}
                        className="aspect-video object-cover transition-all hover:scale-105"
                    />
                    </div>
                    <CardTitle className="mt-4">AI Content Generator</CardTitle>
                    <CardDescription>A tool that generates content using AI models</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">OpenAI</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                    <Github className="h-4 w-4" />
                    Code
                    </Button>
                    <Button size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                    </Button>
                </CardFooter>
                </Card>
            </div>
            </section>

            <section id="skills" className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Skills & Technologies</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Here are some of the technologies and tools I work with.
                </p>
            </div>
            <div className="mx-auto mt-8 md:max-w-[64rem]">
                <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="tools">Tools & Others</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux"].map(
                        (skill) => (
                        <Card key={skill} className="flex items-center justify-center p-4">
                            <CardContent className="flex items-center justify-center p-6">
                            <div className="text-center">
                                <Code className="mx-auto h-8 w-8 mb-2" />
                                <h3 className="font-medium">{skill}</h3>
                            </div>
                            </CardContent>
                        </Card>
                        ),
                    )}
                    </div>
                </TabsContent>
                <TabsContent value="backend" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "REST API", "AWS"].map(
                        (skill) => (
                        <Card key={skill} className="flex items-center justify-center p-4">
                            <CardContent className="flex items-center justify-center p-6">
                            <div className="text-center">
                                <Code className="mx-auto h-8 w-8 mb-2" />
                                <h3 className="font-medium">{skill}</h3>
                            </div>
                            </CardContent>
                        </Card>
                        ),
                    )}
                    </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {["Git", "GitHub", "VS Code", "Docker", "Jest", "CI/CD", "Figma", "Vercel"].map((skill) => (
                        <Card key={skill} className="flex items-center justify-center p-4">
                        <CardContent className="flex items-center justify-center p-6">
                            <div className="text-center">
                            <Code className="mx-auto h-8 w-8 mb-2" />
                            <h3 className="font-medium">{skill}</h3>
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                </TabsContent>
                </Tabs>
            </div>
            </section>

            <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="mx-auto grid gap-8 md:max-w-[58rem] md:grid-cols-2">
                <div>
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my
                    best to get back to you!
                </p>
                <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <a href="danielyum55@gmail.com" target="_blank">email</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        <a href="https://github.com/dyum0429" target="_blank"> github</a>
                    </div>
                    <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <a href="https://www.linkedin.com/in/daniel-yum-899578250/" target="_blank">linkedin</a>
                    </div>
                </div>
                </div>
                <Card>
                <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4">
                    <div className="grid gap-2">
                        <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        Name
                        </label>
                        <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        Email
                        </label>
                        <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        Message
                        </label>
                        <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                        />
                    </div>
                    <Button className="w-full">Send Message</Button>
                    </form>
                </CardContent>
                </Card>
            </div>
            </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Daniel Yum. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

