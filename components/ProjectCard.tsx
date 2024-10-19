'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Card from "@/components/Card";

interface Projects {
    url: string | null;
    image_filename: string;
    title: string;
    description: string;
}

export default function ProjectCard() {
    const [projects, setProjects] = useState<Projects[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    return (
        <>
            
            {projects.map((project) => (
                <Card
                    key={project.image_filename}
                    url={project.url ?? '#'}
                    image_filename={project.image_filename}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </>
    );
}