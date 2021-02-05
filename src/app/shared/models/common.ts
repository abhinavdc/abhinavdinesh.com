export interface Project {
    name: string,
    stacks: string[],
    githubLink: string,
    demoLink: string,
    description: string,
    icon: string,
    images: string[],
    shortDescription: string
}

export interface Article {
    title: string,
    postedDate: string,
    tags: string[],
    content: string
}