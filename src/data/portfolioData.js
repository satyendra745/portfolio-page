export const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "I am a passionate AI and Robotics Engineer specialized in building autonomous systems. My expertise lies in ROS 2, SLAM, and Computer Vision. I focus on bridging the gap between high-fidelity simulations and real-world robot deployment.",
    details: [
      "5+ Projects in Autonomous Navigation",
      "Expertise in ROS 2 & NVIDIA Jetson Platforms",
      "Specialized in LiDAR-based 3D SLAM",
      "Proficient in Gazebo & Ignition Simulation"
    ],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  skills: [
    { category: "Robotics", items: ["ROS 2", "Nav2", "MoveIt 2", "SLAM", "URDF/SDF"] },
    { category: "AI & Vision", items: ["PyTorch", "OpenCV", "YOLO", "TensorRT", "MediaPipe"] },
    { category: "Control & Sim", items: ["Gazebo", "Mujoco", "PID Control", "MPC", "Python/C++"] },
    { category: "Hardware", items: ["Jetson Orin", "LiDAR", "IMU", "Depth Cameras", "Micro-controllers"] }
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
      degree: "Bachelor of Technology in Robotics/AI",
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