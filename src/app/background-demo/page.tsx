"use client"

import React from "react"
import { BackgroundPattern } from "@/components/ui/background-pattern"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BackgroundDemoPage() {
    return (
        <div className="min-h-screen bg-background p-8 space-y-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold mb-4">Background Pattern Demo</h1>
                <p className="text-muted-foreground mb-8">
                    Showcasing the dynamic SVG background system with different variants and intensities.
                </p>
                <Link href="/">
                    <Button variant="outline">Back to Home</Button>
                </Link>
            </div>

            {/* Hero Variant */}
            <section className="relative h-[400px] border rounded-xl overflow-hidden flex items-center justify-center bg-card/50">
                <BackgroundPattern variant="hero" seed="demo-hero" intensity="medium" />
                <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-bold mb-2">Hero Variant</h2>
                    <p className="text-muted-foreground">Intensity: Medium | Seed: demo-hero</p>
                    <p className="text-xs mt-2">Larger icons, more elements (4)</p>
                </div>
            </section>

            {/* Section Variant - Light */}
            <section className="relative h-[300px] border rounded-xl overflow-hidden flex items-center justify-center bg-card/50">
                <BackgroundPattern variant="section" seed="demo-section-light" intensity="light" />
                <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
                    <h2 className="text-xl font-bold mb-2">Section Variant</h2>
                    <p className="text-muted-foreground">Intensity: Light | Seed: demo-section-light</p>
                    <p className="text-xs mt-2">Standard size, fewer elements (2), lower opacity</p>
                </div>
            </section>

            {/* Section Variant - Strong */}
            <section className="relative h-[300px] border rounded-xl overflow-hidden flex items-center justify-center bg-card/50">
                <BackgroundPattern variant="section" seed="demo-section-strong" intensity="strong" />
                <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
                    <h2 className="text-xl font-bold mb-2">Section Variant</h2>
                    <p className="text-muted-foreground">Intensity: Strong | Seed: demo-section-strong</p>
                    <p className="text-xs mt-2">Standard size, higher opacity</p>
                </div>
            </section>

            {/* Footer Variant */}
            <section className="relative h-[200px] border rounded-xl overflow-hidden flex items-center justify-center bg-muted">
                <BackgroundPattern variant="footer" seed="demo-footer" intensity="light" />
                <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
                    <h2 className="text-xl font-bold mb-2">Footer Variant</h2>
                    <p className="text-muted-foreground">Intensity: Light | Seed: demo-footer</p>
                    <p className="text-xs mt-2">Optimized for smaller height</p>
                </div>
            </section>
        </div>
    )
}
