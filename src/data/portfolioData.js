export const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "I am a passionate AI and Robotics Engineer specialized in building autonomous systems. My expertise lies in ROS 2, SLAM, and Computer Vision.",
    socials: { linkedin: "#", github: "#", twitter: "#" }
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
        "Implemented MoveIt 2 for robotic arm motion planning."
      ]
    }
  ],
  projects: [
    { 
        id: 1, 
        title: "Autonomous AMR Navigation", 
        category: "Robotics", 
        tag: "SLAM & ROS 2", 
        desc: "End-to-end navigation stack using ROS 2 and Nav2.", 
        img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600",
        videos: ["assets/video1.mp4", "assets/video2.mp4"] 
    },
    { 
        id: 2, 
        title: "Humanoid Balance Control", 
        category: "AI", 
        tag: "Mujoco & Python", 
        desc: "Bipedal walking simulation using reinforcement learning.", 
        img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600",
        videos: ["assets/video1.mp4"] 
    }
  ]
};