import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const AutoScrollCarousel = ({ items, renderItem, speed = 20, className = "" }) => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Duplicate items to ensure seamless looping
    // We need enough duplicates to fill the screen width + buffer
    // For simplicity, we'll triple the items to guarantee coverage
    const duplicatedItems = [...items, ...items, ...items];

    useEffect(() => {
        if (containerRef.current) {
            const totalWidth = containerRef.current.scrollWidth / 3; // Width of one set
            setWidth(totalWidth);

            // Start the animation
            startAnimation(totalWidth);
        }
    }, [items]);

    const startAnimation = (totalWidth) => {
        controls.start({
            x: -totalWidth,
            transition: {
                duration: totalWidth / speed,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            },
        });
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        // Resume animation after drag
        // Note: Seamless resumption from drag position is complex in pure Framer Motion
        // We'll restart for simplicity in this custom implementation, 
        // or we could use a more complex useAnimationFrame approach.
        // For this specific request, a simple resume is often acceptable.
        if (!isHovered) {
            // Re-calculate current position to avoid jump? 
            // With simple controls.start, it resets. 
            // For a robust "drag + marquee", we might need a different approach.
            // Let's try a simpler marquee without drag-to-snap, just drag-to-scroll.

            const currentX = x.get();
            const totalWidth = width;
            // Find relative position in the loop
            const relativeX = currentX % totalWidth;

            controls.start({
                x: -totalWidth,
                transition: {
                    duration: (totalWidth + relativeX) / speed, // Adjust duration based on remaining distance
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        }
    };

    // Simplified Marquee approach that pauses on hover
    // Dragging a continuous marquee is tricky. 
    // Instead, we will implement a "Pause on Hover" Marquee that supports "Touch" by treating touch as hover/pause?
    // Or we can use a library like 'react-fast-marquee' logic but custom built.

    // Let's go with a robust Framer Motion marquee.

    return (
        <div
            className={`relative overflow-hidden w-full ${className}`}
            ref={containerRef}
            onMouseEnter={() => { setIsHovered(true); controls.stop(); }}
            onMouseLeave={() => { setIsHovered(false); if (width > 0) startAnimation(width); }}
        >
            <motion.div
                className="flex gap-8 w-max px-4"
                animate={controls}
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -width * 2, right: 0 }}
                onDragStart={() => { setIsDragging(true); controls.stop(); }}
                onDragEnd={handleDragEnd}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex-shrink-0">
                        {renderItem(item)}
                    </div>
                ))}
            </motion.div>

            {/* Gradient Masks for smooth fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default AutoScrollCarousel;
