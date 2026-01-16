export const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "AI and Robotics engineer with hands-on experience developing autonomous navigation, SLAM, and simulation-driven robotic systems. Worked on AMR, humanoid, quadruped, and manipulator platforms using ROS 2, LiDAR, depth cameras, and high-fidelity simulation.",
    details: [
      "Experienced in integrating AI models, imitation and reinforcement learning pipelines.",
      "Developing systems from simulation to real-world robots.",
      "Strong focus on scalable software architecture using ROS 2 (Humble/Jazzy).",
      "Proficient in hardware deployment on NVIDIA Jetson platforms."
    ],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  skills: [
    { category: "Core", items: ["Python (OOP)", "C++", "C"] },
    { category: "Simulation", items: ["Isaac Sim", "Isaac Lab", "Ignition Gazebo"] },
    { category: "Robotics", items: ["ROS 2", "Nav2", "RTAB-MAP", "MoveIt 2"] },
    { category: "Tools", items: ["Git", "Linux", "AutoCAD (Fusion360)"] },
    { category: "AI & CV", items: ["PyTorch", "YOLOv8", "OpenCV", "MediaPipe", "LLM", "Reinforcement Learning"] }
  ],
  experience: [
    {
      company: "MuksRobotics",
      role: "Robotics Engineer",
      period: "April 2025 – Present",
      tasks: [
        "Building autonomous navigation stacks for AMRs and Humanoids.",
        "Integrating LiDAR and RGB-D cameras for 3D SLAM.",
        "Developing hardware-agnostic Robot SDKs for NVIDIA Jetson."
      ]
    },
    {
      company: "MuksRobotics",
      role: "AI & Robotics Intern",
      period: "Aug 2024 – Feb 2025",
      tasks: [
        "Simulated mobile manipulators in Gazebo and Ignition.",
        "Implemented MoveIt 2 for robotic arm motion planning."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "Your University Name",
      period: "2021 – 2025",
      score: "CGPA: 8.5/10"
    }
  ],
  projects: [
    { id: 1, title: "Autonomous AMR Navigation", category: "Robotics", tag: "SLAM & ROS 2", desc: "End-to-end navigation stack using ROS 2 and Nav2.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600" },
    // ... baki projects same rahenge
  ]
};