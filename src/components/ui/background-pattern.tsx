"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const svgs = [
    "/students-learning-maths-equation-in-classroom.svg",
    "/undraw_fatherhood_eldm.svg",
    "/undraw_learning-sketchingsh.svg",
    "/undraw_online-learning_tgmv.svg",
    "/undraw_saving-notes_wp71.svg",
    "/undraw_teaching_58yg.svg",
    "/undraw_true-friends_1h3v.svg",
    "/undraw_tutorial-video_zg9w.svg",
    "/undraw_visual-explanation_vd4l.svg",
]

interface BackgroundPatternProps {
    variant?: "hero" | "section" | "footer"
    intensity?: "light" | "medium" | "strong"
    seed?: string
    className?: string
}

// Simple seeded random number generator
function mulberry32(a: number) {
    return function () {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function stringToSeed(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

interface PatternElement {
    src: string
    style: React.CSSProperties
    animationDuration: string
    animationDelay: string
    baseOpacity: number
}

export function BackgroundPattern({
    variant = "section",
    intensity = "medium",
    seed = "default",
    className,
}: BackgroundPatternProps) {
    const [elements, setElements] = useState<PatternElement[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const numericSeed = stringToSeed(seed)
        const random = mulberry32(numericSeed)

        // Determine number of elements based on variant
        let count = 2
        if (variant === "hero") count = 4
        if (variant === "footer") count = 2

        // Select random SVGs
        const selectedSvgs: string[] = []
        const availableSvgs = [...svgs]
        for (let i = 0; i < count; i++) {
            if (availableSvgs.length === 0) break
            const index = Math.floor(random() * availableSvgs.length)
            selectedSvgs.push(availableSvgs[index])
            availableSvgs.splice(index, 1)
        }

        // Generate properties for each element
        const newElements = selectedSvgs.map((src, i) => {
            const style: React.CSSProperties = {}
            const positionJitter = 20; // % jitter

            const quadrant = i % 4

            if (quadrant === 0) { // Top Left
                style.top = `${random() * positionJitter}%`
                style.left = `${random() * positionJitter}%`
            } else if (quadrant === 1) { // Bottom Right
                style.bottom = `${random() * positionJitter}%`
                style.right = `${random() * positionJitter}%`
            } else if (quadrant === 2) { // Top Right
                style.top = `${random() * positionJitter}%`
                style.right = `${random() * positionJitter}%`
            } else { // Bottom Left
                style.bottom = `${random() * positionJitter}%`
                style.left = `${random() * positionJitter}%`
            }

            // Size: 80px - 240px
            const minSize = variant === "hero" ? 120 : 80
            const maxSize = variant === "hero" ? 280 : 200
            const size = minSize + random() * (maxSize - minSize)

            // Opacity: 0.15 - 0.25 (increased for visibility)
            let baseOpacity = 0.15 + random() * 0.10
            if (intensity === "light") baseOpacity *= 0.6
            if (intensity === "strong") baseOpacity *= 1.5

            const rotation = -15 + random() * 30
            const blur = random() * 2
            const duration = 20 + random() * 10

            style.width = `${size}px`
            style.height = `${size}px`
            style.transform = `rotate(${rotation}deg)`
            if (blur > 0.5) style.filter = `blur(${blur}px)`

            return {
                src,
                style,
                animationDuration: `${duration}s`,
                animationDelay: `${random() * -10}s`,
                baseOpacity
            }
        })

        setElements(newElements)
    }, [variant, intensity, seed])

    if (!mounted) return null

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none select-none", className)} aria-hidden="true">
            {elements.map((el, i) => (
                <div
                    key={i}
                    className="absolute transition-opacity duration-1000"
                    style={{
                        ...el.style,
                        opacity: el.baseOpacity,
                        "--bg-opacity": el.baseOpacity,
                    } as React.CSSProperties}
                >
                    <div className="w-full h-full opacity-[var(--bg-opacity)] dark:opacity-[calc(var(--bg-opacity)*1.8)] transition-opacity duration-300">
                        <div
                            className="w-full h-full animate-float"
                            style={{
                                animationDuration: el.animationDuration,
                                animationDelay: el.animationDelay
                            }}
                        >
                            <Image
                                src={el.src}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
