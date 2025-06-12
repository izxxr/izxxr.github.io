import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Chip,
} from "@heroui/react";
import { CodeOutlined } from "@ant-design/icons";
import bujet_logo from "../assets/bujet_logo.png";
import type { ComponentCommonProps } from "../types"

interface ProjectProps {
    title: string,
    subtitle?: string,
    description?: string,
    is_new?: boolean,
    primary_url?: string,
    primary_url_text?: string,
    secondary_url?: string,
    secondary_url_text?: string,
    icon_url?: string,
}

const PROJECTS: ProjectProps[] = [
    {
        title: 'Prept',
        is_new: true,
        subtitle: 'Tool for managing and generating boilerplates',
        primary_url: 'https://github.com/izxxr/prept',
        secondary_url: 'https://prept.readthedocs.io/',
        secondary_url_text: 'View Documentation',
    },
    {
        title: 'Bujet',
        is_new: true,
        subtitle: 'Self hosted finance tracker app',
        primary_url: 'https://github.com/izxxr/bujet',
        primary_url_text: 'View Source (Server)',
        secondary_url: 'https://github.com/izxxr/bujet-client',
        secondary_url_text: 'View Source (Client)',
        icon_url: bujet_logo
    },
    {
        title: 'The Python Guide',
        subtitle: 'Online learning resource for Python',
        icon_url: 'https://github.com/thepyguide/thepyguide.github.io/blob/main/docs/_images/favicon.png?raw=true',
        primary_url: 'https://github.com/thepyguide/thepyguide.github.io',
        secondary_url: 'https://thepyguide.github.io',
    },
    {
        title: 'WEEBOT',
        subtitle: 'General purpose Discord bot',
        description: "WEEBOT was used by over 250 servers and 100k users on Discord.",
        icon_url: "https://i.ibb.co/njcq650/Logo-Makr-5-Gq-Ny-Z.png",
        primary_url: "https://top.gg/bot/793886243901014038",
        primary_url_text: "View Homepage"
    },
    {
        title: 'Oblate',
        subtitle: 'Data validation library for Python',
        primary_url: 'https://github.com/izxxr/oblate',
        secondary_url: 'https://oblate.readthedocs.io/',
        secondary_url_text: 'View Documentation',
    },
    {
        title: 'Search100',
        subtitle: 'Text files search engine written in C++',
        primary_url: 'https://github.com/izxxr/search100',
        icon_url: 'https://github.com/izxxr/search100/blob/main/assets/img_icon.png?raw=true',
    }
]

const Project = (props: ProjectProps) => {
    return (
        <Card className="max-w-[380px]">
            <CardHeader className="flex gap-5 p-5">
                {props.icon_url ? <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src={props.icon_url}
                    width={40}
                /> : <CodeOutlined className="text-3xl" />}
                <div className="flex flex-col">
                    <div className="flex flex-row gap-2">
                        <p className="text-md">{props.title}</p>
                        {props.is_new ? <Chip color="primary" radius="sm" variant="light" size="sm">Recent</Chip> : ''}
                    </div>
                    <p hidden={!props.subtitle} className="text-small text-default-500">{props.subtitle}</p>
                </div>
            </CardHeader>
            <Divider />
            {props.description ?
            <CardBody>
                <p className="text-default-500" style={{whiteSpace: 'pre-wrap'}}>{props.description}</p>
            </CardBody> : ''}
            <Divider hidden={!props.primary_url} />
            <CardFooter className="flex flex-col gap-3 my-auto" hidden={!(props.primary_url || props.secondary_url)}>
                <Link isExternal showAnchorIcon href={props.primary_url || "#"} isDisabled={!props.primary_url}>
                    {props.primary_url_text || 'View Source'}
                </Link>
                <Divider hidden={!props.secondary_url} />
                <Link isExternal showAnchorIcon href={props.secondary_url || "#"}  hidden={!props.secondary_url} isDisabled={!props.secondary_url}>
                    {props.secondary_url_text || 'View Homepage'}
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function Projects(_: ComponentCommonProps) {
    const project_items = PROJECTS.map((p) => {
        return <Project {...p} />
    })

    return (
        <div id="projects" className="flex flex-col items-center justify-center px-6 py-12 gap-8">
            <h1 className="underline underline-offset-8 decoration-solid font-black text-default-900 text-4xl text-center lg:text-left">
                Projects
            </h1>
            <h2 className="font-medium text-default-500 text-lg text-justify">
                These are some of the projects that I have worked on.
            </h2>
            <div className="flex lg:flex-row gap-10 px-10 py-8 flex-wrap justify-center">
                {project_items}
            </div>
            <Link href="https://github.com/izxxr" showAnchorIcon isExternal underline="hover">... view other projects on GitHub</Link>
        </div>
    )
}