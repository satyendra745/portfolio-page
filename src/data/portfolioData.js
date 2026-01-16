export const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "I am a passionate AI and Robotics Engineer specialized in building autonomous systems. My expertise lies in ROS 2, SLAM, and Computer Vision. I focus on bridging the gap between high-fidelity simulations and real-world robot deployment.",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
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
        "Implemented MoveIt 2 for robotic arm motion planning.",
        "Trained imitation learning policies for task automation."
      ]
    }
  ],
  projects: [
    { id: 1, title: "Autonomous AMR Navigation", category: "Robotics", tag: "SLAM & ROS 2", desc: "End-to-end navigation stack using ROS 2 and Nav2.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600" },
    { id: 2, title: "Humanoid Balance Control", category: "AI", tag: "Mujoco & Python", desc: "Bipedal walking simulation using reinforcement learning.", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600" },
    { id: 3, title: "Edge-AI Object Tracking", category: "Vision", tag: "PyTorch & OpenCV", desc: "Real-time detection and tracking on Jetson Nano.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600" },
    { id: 4, title: "Robot Swarm Coordination", category: "Multi-Agent", tag: "C++ & ROS", desc: "Decentralized path planning for multiple robots.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
    { id: 5, title: "Pick & Place Automation", category: "Manipulation", tag: "MoveIt 2", desc: "6-DOF robotic arm control for warehouse sorting.", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600" },
    { id: 6, title: "Digital Twin Environment", category: "Simulation", tag: "Gazebo Ignition", desc: "High-fidelity simulation of a smart factory.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" },
    { id: 7, title: "Telepresence Robot", category: "IoT", tag: "MQTT & ESP32", desc: "Web-controlled robot for remote monitoring.", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600" },
    { id: 8, title: "Autonomous Drone Delivery", category: "Aviation", tag: "PX4 Autopilot", desc: "GPS-based waypoint navigation for VTOL drones.", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600" },
    { id: 9, title: "Robot Voice Command AI", category: "NLP", tag: "LangChain", desc: "Integrating GPT-4 for natural language robot control.", img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600" },
    { id: 10, title: "Jetson-Based Quadruped", category: "Embedded", tag: "Jetson Orin", desc: "Control algorithms for a 4-legged robot dog.", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=600" },
  ]
};