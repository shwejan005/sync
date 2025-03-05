"use client";
import { motion } from "framer-motion";
import PixelCard from "./ui/PixelCard";
import { CheckCircle, Users, Calendar, BarChart4, GitBranch, Users2, UserPlus } from "lucide-react";
import { useTheme } from "next-themes";

const jiraFeatures = [
  {
    title: "Issue Tracking",
    description: "Track bugs, stories, and tasks with powerful filtering and customizable workflows.",
    icon: CheckCircle,
  },
  {
    title: "Team Collaboration",
    description: "Collaborate seamlessly with your team through comments, mentions, and shared dashboards.",
    icon: Users,
  },
  {
    title: "Agile Planning",
    description: "Plan sprints, create roadmaps, and manage backlogs with flexible agile tools.",
    icon: Calendar,
  },
  {
    title: "Reporting & Analytics",
    description: "Gain insights with real-time reports, burndown charts, and velocity tracking.",
    icon: BarChart4,
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive tasks and create custom workflows that match your team's processes.",
    icon: GitBranch,
  },
  {
    title: "Manage Organisations",
    description: "Easily manage multiple teams and projects within your organization, ensuring smooth operations and collaboration.",
    icon: UserPlus,
  },
];

export default function Features() {
  const theme = useTheme()
  return (
    <motion.section
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`relative py-16 px-6 md:px-12 lg:px-24 bg-secondary text-primary border-b ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Key Features
        </h2>
        <p className="text-center text-primary mb-12 max-w-3xl mx-auto">
          Discover how SYNC can transform your team&#39;s productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jiraFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <PixelCard variant="secondary">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                  <div className="mb-6 p-3 bg-primary rounded-full shadow-md">
                    <feature.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-center text-primary">{feature.description}</p>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}