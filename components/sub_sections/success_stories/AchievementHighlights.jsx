// components/AchievementHighlights.jsx
import { Award, TrendingUp, Users, Globe } from "lucide-react";

export function AchievementHighlights() {
  const achievements = [
    {
      icon: Award,
      value: "Rs. 10M+",
      label: "Scholarships Secured",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      value: "90%",
      label: "Visa Success Rate",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      value: "95%",
      label: "Student Satisfaction",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Years of Excellence",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Celebrating milestones and recognitions that reflect our commitment
            to student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.label} className="text-center">
                <div
                  className={`${achievement.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent
                    className={`h-8 w-8 ${achievement.iconColor}`}
                  />
                </div>
                <div className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">
                  {achievement.value}
                </div>
                <div className="text-foreground/70">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
