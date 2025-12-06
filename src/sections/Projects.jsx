import React from 'react';
import ProjectCard from '../components/ProjectCard';
import WorkGallery from '../components/WorkGallery';

const Projects = ({ viewMode }) => {
    // If in Visual Mode, render the new Work Gallery
    if (viewMode === 'visual') {
        return <WorkGallery />;
    }

    // Technical Mode (Existing Grid Layout)
    const projects = [
        {
            id: '01',
            title: 'Erkey Motors Telematics',
            image: '/projects/erkey_motors.png',
            visual: {
                shortDesc: 'Real-time EV monitoring interface.',
                caption: 'UI/UX • Flutter • Mobile App',
                buttonText: 'Click to see Architecture ↻'
            },
            technical: {
                shortDesc: 'Embedded Signal Processing.',
                caption: 'C++ • IoT • MQTT',
                fullDesc: 'Reduced data latency by 30% using optimized MQTT payloads. Implemented Kalman filters for noise reduction in sensor data. Architecture: ESP32 Sensors -> AWS IoT Core -> Flutter App.',
                tech: ['C++', 'IoT', 'Flutter', 'AWS'],
                buttonText: '↻ Return to UI'
            },
            color: 'from-blue-600 to-cyan-500'
        },
        {
            id: '02',
            title: 'Dhoot Transmission',
            image: '/projects/dhoot_transmission.png',
            visual: {
                shortDesc: 'Workflow Automation Dashboard.',
                caption: 'Efficiency • Web Tool • React',
                buttonText: 'Click to see Script ↻'
            },
            technical: {
                shortDesc: 'Google Sheets API Scripting.',
                caption: 'Python • REST APIs • Cron Jobs',
                fullDesc: 'Automated data entry pipelines; reduced human error by 40%. Scripts parse CSV reports and update master sheets via Google API, saving 15 hours/week.',
                tech: ['Python', 'Google APIs', 'Automation'],
                buttonText: '↻ Return to Visual'
            },
            color: 'from-emerald-500 to-teal-600'
        },
        {
            id: '03',
            title: 'Smart Grid Energy Monitor',
            image: '/projects/smart_grid.png',
            visual: {
                shortDesc: 'Household Energy Visualization.',
                caption: 'Data Viz • D3.js • Dashboard',
                buttonText: 'Click to see Firmware ↻'
            },
            technical: {
                shortDesc: 'Real-time Power Analysis.',
                caption: 'Embedded C • Modbus • RS485',
                fullDesc: 'Engineered a smart meter reader using Modbus protocol. Samples voltage/current at 1kHz for harmonic analysis. Transmits data via WebSocket for live graphing.',
                tech: ['Embedded C', 'Modbus', 'WebSockets', 'D3.js'],
                buttonText: '↻ Return to UI'
            },
            color: 'from-orange-500 to-red-500'
        },
        {
            id: '04',
            title: 'Autonomous Drone Controller',
            image: '/projects/drone_controller.png',
            visual: {
                shortDesc: 'Flight Path Planning UI.',
                caption: 'Mapbox • React • Control Panel',
                buttonText: 'Click to see Control Loop ↻'
            },
            technical: {
                shortDesc: 'PID Flight Stabilization.',
                caption: 'C++ • RTOS • Sensors',
                fullDesc: 'Implemented a custom PID controller running on FreeRTOS. Achieved stable hover within ±5cm. Sensor fusion of Gyro, Accelerometer, and Barometer for state estimation.',
                tech: ['C++', 'RTOS', 'PID Control', 'Sensors'],
                buttonText: '↻ Return to UI'
            },
            color: 'from-purple-600 to-indigo-600'
        },
        {
            id: '05',
            title: 'E-Commerce Analytics Suite',
            image: '/projects/ecommerce_analytics.png',
            visual: {
                shortDesc: 'Sales & Inventory Dashboard.',
                caption: 'SaaS Design • Next.js • Tailwind',
                buttonText: 'Click to see Backend ↻'
            },
            technical: {
                shortDesc: 'Microservices Architecture.',
                caption: 'Node.js • Docker • Redis',
                fullDesc: 'Designed a scalable backend using Dockerized microservices. Implemented Redis caching to handle 10k+ concurrent requests during flash sales. PostgreSQL for transactional integrity.',
                tech: ['Node.js', 'Docker', 'Redis', 'PostgreSQL'],
                buttonText: '↻ Return to UI'
            },
            color: 'from-pink-500 to-rose-500'
        }
    ];

    return (
        <div className="min-h-screen bg-dark py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center" id="projects">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16 text-center">
                    <h2 className="font-medium tracking-widest uppercase mb-2 text-secondary">
                        Technical Case Studies
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        System Architecture
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Deep dives into the code, hardware, and logic powering complex systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} initialMode={viewMode} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
