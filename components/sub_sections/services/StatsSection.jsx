'use client';

import CountUp from "react-countup";

export function StatsSection() {
  const stats = [
    { number: 5000, label: "Students Placed", suffix: "+" },
    { number: 98, label: "Visa Success Rate", suffix: "%" },
    { number: 200, label: "Partner Universities", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
  ];

  return (
    <section className="py-16 bg-white border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  suffix={stat.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={index * 200} // Stagger the animations
                />
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
