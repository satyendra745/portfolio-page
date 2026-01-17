// Assets Imports
import p1_vid1 from '../assets/videos/demo1.mp4';
import p1_vid2 from '../assets/videos/video2.mp4';
import p1_img1 from '../assets/images/robot1.jpg';
import p1_img2 from '../assets/images/robot2.jpg';
import p1_img3 from '../assets/images/profile.jpg';

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
    { 
      id: 1, 
      title: "Autonomous AMR Navigation", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", 
      images: [p1_img1, p1_img2, p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: "https://www.youtube.com/embed/ro-cJp_Rg3M", title: "YouTube Demo", type: "Real World", desc: "Live navigation on hardware platform." }
      ],
      detailedDesc: [
        "Implemented Gmapping and Cartographer for real-time 2D/3D SLAM.",
        "Integrated TEB Local Planner for dynamic obstacle avoidance.",
        "Designed a custom ROS 2 node for sensor fusion of LiDAR and IMU data.",
        "Optimized navigation stack for NVIDIA Jetson Orin Nano deployment."
      ],
      techStack: ["ROS 2 Humble", "C++", "Python", "LiDAR", "OpenCV"]
    },
    { 
      id: 2, 
      title: "Humanoid Balance Control", 
      category: "AI", 
      tag: "Mujoco", 
      images: [p1_img1, p1_img2],
      videoData: [
        { url: p1_vid1, title: "Locomotion Test", type: "Simulation", desc: "Bipedal gait analysis using reinforcement learning." },
        { url: p1_vid2, title: "Stability Performance", type: "Physics Engine", desc: "Balance control under external disturbances." },
        { url: "https://www.youtube.com/embed/ro-cJp_Rg3M", title: "Live Feedback", type: "System Log", desc: "Real-time data visualization of joints." }
      ],
      detailedDesc: [
        "Implemented Mujoco for high-fidelity physics simulation.",
        "Integrated reinforcement learning for stable locomotion gait.",
        "Optimized joint control for smooth humanoid movement."
      ],
      techStack: ["Python", "Mujoco", "PyTorch", "Deep RL"]
    },
    { 
      id: 3, 
      title: "Edge-AI Object Tracking", 
      category: "Vision", 
      tag: "PyTorch",
      images: [p1_img1, p1_img2],
      videoData: [
        { url: p1_vid1, title: "Real-time Detection", type: "NVIDIA Jetson", desc: "YOLOv8 deployment on edge hardware." },
        { url: "https://www.youtube.com/embed/ro-cJp_Rg3M", title: "Tracking Demo", type: "Computer Vision", desc: "Multi-object tracking in dynamic urban environments." }
      ],
      detailedDesc: [
        "Deployed YOLOv8 models for real-time inference on edge.",
        "Integrated OpenCV for advanced image processing pipelines.",
        "Optimized model for NVIDIA Jetson Orin platform."
      ],
      techStack: ["PyTorch", "OpenCV", "YOLOv8", "Jetson Orin"]
    },
    { 
      id: 4, 
      title: "Robot Swarm Coordination", 
      category: "Multi-Agent", 
      tag: "C++ & ROS",
      images: [p1_img1, p1_img2, p1_img3],
      videoData: [
        { url: p1_vid1, title: "Swarm Logic", type: "Multi-Agent", desc: "Coordinated path planning for 10+ robots." },
        { url: p1_vid2, title: "Collision Avoidance", type: "Algorithm", desc: "Decentralized control for swarm navigation." }
      ],
      detailedDesc: [
        "Implemented decentralized path planning for multi-robot systems.",
        "Integrated ROS 2 for seamless inter-robot communication.",
        "Designed scalable architecture for large-scale robot swarms."
      ],
      techStack: ["C++", "ROS 2", "Python", "Multi-Agent Systems"]
    },
    // Baaki projects 5-10 ko aap isi format mein 'videoData' aur 'images' arrays ke saath update kar sakte hain.
    { id: 5, title: "Pick & Place Automation", category: "Manipulation", tag: "MoveIt 2", desc: "Industrial arm trajectory control.", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600" },
    { id: 6, title: "Digital Twin Environment", category: "Simulation", tag: "Gazebo", desc: "Digital twin for warehouse robots.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" },
    { id: 7, title: "Telepresence Robot", category: "IoT", tag: "MQTT", desc: "Remote controlled IoT platform.", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600" },
    { id: 8, title: "Autonomous Drone Delivery", category: "Aviation", tag: "PX4", desc: "GPS-based autonomous flight.", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600" },
    { id: 9, title: "Robot Voice Command AI", category: "NLP", tag: "LangChain", desc: "Voice activated control via LLM.", img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600" },
    { id: 10, title: "Jetson-Based Quadruped", category: "Embedded", tag: "Jetson Orin", desc: "Legged locomotion on edge AI.", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=600" }
  ]
};