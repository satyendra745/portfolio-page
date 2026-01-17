export const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "AI and Robotics engineer with hands-on experience developing autonomous navigation, SLAM, and simulation-driven robotic systems.",
    details: [
      "Experienced in integrating AI models, imitation and reinforcement learning pipelines.",
      "Developing systems from simulation to real-world robots.",
      "Strong focus on scalable software architecture using ROS 2.",
      "Proficient in hardware deployment on NVIDIA Jetson platforms."
    ],
    socials: { linkedin: "#", github: "#" }
  },
  skills: [
    { category: "Core", items: ["Python (OOP)", "C++", "C"] },
    { category: "Simulation", items: ["Isaac Sim", "Isaac Lab", "Ignition Gazebo"] },
    { category: "Robotics", items: ["ROS 2 (Humble/Jazzy)", "Nav2", "RTAB-MAP", "MoveIt 2"] },
    { category: "Tools", items: ["Git", "Linux", "AutoCAD (Fusion360)"] },
    { category: "AI & CV", items: ["PyTorch", "YOLOv8", "OpenCV", "MediaPipe", "Reinforcement Learning"] }
  ],
  experience: [
    {
      company: "Highflow Industries (NextStep Robotics)",
      role: "Robotics Engineer",
      period: "December 2024 – Present",
      tasks: ["Building autonomous navigation stacks for AMRs.", "Integrating LiDAR and RGB-D cameras for 3D SLAM.", "Developing hardware-agnostic Robot SDKs."]
    },
    {
      company: "XPRT Enforcement Pvt. Ltd.",
      role: "Embedded System Engineer",
      period: "August 2022 – February 2023",
      tasks: ["Designed and developed new products.", "Created, tested, and validated hardware modules.", "Prepared technical documentation and compliance reports."]
    },
    {
      company: "Experio Traffiko System Pvt. Ltd.",
      role: "Embedded Software Developer",
      period: "November 2020 – October 2021",
      tasks: ["Designed and developed firmware for new products.", "Validated electronic modules through rigorous testing.", "Created system architecture reports."]
    }
  ],
  training: [
    {
      company: "Softpro India Computer Technologies",
      course: "Internet of Things (IoT)",
      period: "July 2024",
      tasks: ["IoT architecture and cloud connectivity.", "Sensor integration and data acquisition."]
    },
    {
      company: "Softpro India Computer Technologies",
      course: "PCB Design Crash Course",
      period: "July 2024",
      tasks: ["Schematic creation and layout design.", "Hands-on practice with electronic projects."]
    },
    {
      company: "ITI Limited, Mankapur",
      course: "Embedded System & OS",
      period: "July 2019",
      tasks: ["Fundamentals of real-time operating systems.", "Microcontroller interfacing and integration."]
    }
  ],
  education: [
    { degree: "B.Tech in Robotics & AI", institution: "Your University Name", period: "2021 – 2025" },
    { degree: "Diploma in Engineering", institution: "Your Polytechnic Name", period: "2018 – 2021" }
  ],
  projects: [
    { id: 1, title: "Autonomous AMR Navigation", category: "Robotics", tag: "SLAM & ROS 2", videoUrl: "https://www.youtube.com/embed/ro-cJp_Rg3M", desc: "Autonomous navigation stack with real-time mapping.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600" },
    { id: 2, title: "Humanoid Balance Control", category: "AI", tag: "Mujoco", desc: "Bipedal stability using RL.", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600" },
    { id: 3, title: "Edge-AI Object Tracking", category: "Vision", tag: "PyTorch", desc: "Object detection on Jetson Nano.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600" },
    { id: 4, title: "Robot Swarm Coordination", category: "Multi-Agent", tag: "C++ & ROS", desc: "Multi-robot path planning.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
    { id: 5, title: "Pick & Place Automation", category: "Manipulation", tag: "MoveIt 2", desc: "Industrial arm trajectory control.", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600" },
    { id: 6, title: "Digital Twin Environment", category: "Simulation", tag: "Gazebo", desc: "Digital twin for warehouse robots.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" },
    { id: 7, title: "Telepresence Robot", category: "IoT", tag: "MQTT", desc: "Remote controlled IoT platform.", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600" },
    { id: 8, title: "Autonomous Drone Delivery", category: "Aviation", tag: "PX4", desc: "GPS-based autonomous flight.", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600" },
    { id: 9, title: "Robot Voice Command AI", category: "NLP", tag: "LangChain", desc: "Voice activated control via LLM.", img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600" },
    { id: 10, title: "Jetson-Based Quadruped", category: "Embedded", tag: "Jetson Orin", desc: "Legged locomotion on edge AI.", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=600" }
  ]
};