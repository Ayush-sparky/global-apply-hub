'use client';

import { useEffect, useRef } from "react";
import CountUp from "react-countup";

export function StatsSection() {
  const stats = [
    { number: 5000, label: "Students Placed", suffix: "+" },
    { number: 98, label: "Visa Success Rate", suffix: "%" },
    { number: 200, label: "Partner Universities", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
  ];

  const refs = useRef([]);

  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 card">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-600 dark:text-foreground mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  suffix={stat.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={index * 200}
                  ref={(el) => (refs.current[index] = el)}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </div>
              <div className="text-muted-foreground text-xs md:text-sm xl:text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
