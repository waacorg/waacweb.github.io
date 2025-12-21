import React from 'react';
import { notFound } from 'next/navigation';
import { Shield, Brain, Globe, Stethoscope, Cpu, Zap, Activity, Users } from 'lucide-react';
import collaborationDetails from '@/data/collaborationDetails.json';

// Helper to map category emoji/text to icon (reused from main page)
const getCategoryIcon = (category: string) => {
    if (category.includes("Artificial Consciousness") || category.includes("🧠")) return Brain;
    if (category.includes("Medical") || category.includes("Health") || category.includes("🏥")) return Stethoscope;
    if (category.includes("Disorder") || category.includes("Therapeutic") || category.includes("🧬")) return Activity;
    if (category.includes("Interface") || category.includes("Computing") || category.includes("🤖")) return Cpu;
    if (category.includes("Interaction") || category.includes("⚙️")) return Users;
    if (category.includes("Contact") || category.includes("📩")) return globe; // fallback
    return Zap;
};

// Generate static params for all projects
export async function generateStaticParams() {
    return collaborationDetails.map((project) => ({
        id: project.id,
    }));
}

interface PageProps {
    params: {
        id: string;
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { id } = await params;
    const project = collaborationDetails.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    const Icon = getCategoryIcon(project.category);

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="flex items-center justify-center gap-2 text-blue-600 mb-6 font-medium">
                            <Icon className="w-5 h-5" />
                            <span>{project.category}</span>
                        </div>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-12">
                <div className="bg-white p-8 md:p-0">
                    {/* 
                      Render extracted HTML content. 
                      Removed 'prose-invert' to use default dark text on light background.
                    */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-p:text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                </div>
            </div>
        </div>
    );
}

// Fallback icon definition since 'globe' was lowercase in function
const globe = Globe;
