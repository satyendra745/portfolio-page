// Assets Imports
import p1_vid1 from '../assets/videos/demo1.mp4';
import p1_vid2 from '../assets/videos/video2.mp4';
import p1_img1 from '../assets/images/robot1.jpg';
import p1_img2 from '../assets/images/robot2.jpg';
import p1_img3 from '../assets/images/profile.jpg';
import p5_img1 from '../assets/images/Wifi_car2.jpg';
import p5_img2 from '../assets/images/Wifi_car1.jpg';
import p7_img1 from '../assets/images/dual_b2.jpg';
import p7_img2 from '../assets/images/dual_b1.jpg';
import p2_img1 from '../assets/images/Lidar_d2.jpg';
import p2_img2 from '../assets/images/Lidar_d1.jpg';
import p8_img1 from '../assets/images/breath1.jpg';
import p8_img2 from '../assets/images/breath2.jpg';
import p8_img3 from '../assets/images/breath3.jpg';
import p6_img1 from '../assets/images/smartV1.jpg';
import p6_img2 from '../assets/images/smartV2.jpg';
import p6_img3 from '../assets/images/smartV3.jpg';
import p9_img1 from '../assets/images/tolltax1.jpg';
import p9_img2 from '../assets/images/tolltax2.jpg';
import p11_img1 from '../assets/images/gpsT1.jpg';
import p11_img2 from '../assets/images/gpsT2.jpg';
import p12_img1 from '../assets/images/plantM1.jpg';
import p12_img2 from '../assets/images/plantM2.jpg';
import p3_img1 from '../assets/images/lineF1.jpg';
import p13_img2 from '../assets/images/homeA2.jpg';
import p13_img1 from '../assets/images/homeA1.jpg';

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
      images: [p1_img1, p1_img2, p1_img3,p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
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
      id: 18, 
      title: "Autonomous AMR Navigation", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", 
      images: [p1_img1, p1_img2, p1_img3,p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
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
      id: 17, 
      title: "Autonomous AMR Navigation", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", 
      images: [p1_img1, p1_img2, p1_img3,p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
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
      id: 16, 
      title: "Autonomous AMR Navigation", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", 
      images: [p1_img1, p1_img2, p1_img3,p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
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
      id: 15, 
      title: "Autonomous AMR Navigation", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", 
      images: [p1_img1, p1_img2, p1_img3,p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
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
      id: 14, 
      title: "Autonomous AMR Navigation", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", 
      images: [p1_img1, p1_img2, p1_img3,p1_img3],
      videoData: [
        { url: p1_vid1, title: "Simulation Demo", type: "Gazebo", desc: "Testing SLAM algorithms in virtual environment." },
        { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
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
      id: 13, 
      title: "Home Automation System", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", img:p13_img1,
      images: [p13_img1, p13_img2],
      videoData: [
        { url: "https://www.youtube.com/embed/MOgD9fDkweE", title: " Demo1", type: "IOT", desc: "Developed an IoT-based system to control home appliances remotely, including IR remote control and fan speed regulation." },
        { url: "https://www.youtube.com/embed/lsNRD4dlSf4", title: "Detection", type: "NVIDIA Jetson", desc: " Remote control of lights, fans, and appliances." },
        { url: "https://www.youtube.com/embed/fYRX1bTbIYI", title: "YouTube Demo", type: "Real World", desc: "Fan Regulator: Adjust fan speed remotely." },
        { url: "https://www.youtube.com/embed/R0-T2Mnm6QY", title: "YouTube Demo", type: "Real World", desc: "IR Control: Manage appliances using IR signals (e.g., TV, AC, FAN)." },
       
      ],
      detailedDesc: [
        "Developed an IoT-based system to control home appliances remotely, including IR remote control and fan speed regulation.",
        "Remote control of lights, fans, and appliances.","IR Control: Manage appliances using IR signals (e.g., TV, AC, FAN).",
        "Fan Regulator: Adjust fan speed remotely.","Voice control via Google Assistant.",
        "Contribution: Developed control logic for IR and fan regulation; Integrated hardware components and configured IoT platform."
      ],
      techStack: ["ROS 2 Humble", "C++", "Python", "LiDAR", "OpenCV"]
    },

        { 
      id: 12, 
      title: "Plant Monitoring System", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", img: p12_img1,
      images: [p12_img1, p12_img2],
      videoData: [
        { url: "https://www.youtube.com/embed/kEsNyaW5X4Q", title: "YouTube Demo", type: "Real World", desc: "Live navigation on hardware platform." }
      ],
      detailedDesc: [
        "Designed a system to monitor soil moisture and environmental conditions for healthy plant growth.",
        "Real-time soil moisture and environmental data monitoring.","Alerts for low moisture or adverse conditions.",
        "Remote data access via a web or mobile interface.",
        "Contribution: Developed sensor integration and data logging; Configured WiFi communication for remote monitoring."
      ],
      techStack: ["IOT", "C++", "Python", "ESP8266", "Blynk"]
    },

        { 
      id: 11, 
      title: "Multi-Control Emergency Light & Location Tracking System", 
      category: "Robotics", 
      tag: "SLAM & ROS 2", img: p11_img1,
      images: [p11_img1, p11_img2],
      videoData: [
        { url: "https://www.youtube.com/embed/uS0qQhdwVUM", title: "Multi-Control Emergency Light & Location Tracking System", type: "Gazebo", desc: "Design an emergency light system with multi-control features and integrated location tracking for enhanced safety." },
       
      ],
      detailedDesc: [
        "Design an emergency light system with multi-control features and integrated location tracking for enhanced safety.",
        "Multi-control emergency lighting.","Real-time location tracking via GPS.","Remote communication using GSM.",
        "Contribution: System design, coding, and hardware integration; Implemented location tracking and safety features.",
        
      ],
      techStack: ["ROS 2 Humble", "C++", "Python", "LiDAR", "OpenCV"]
    },

    { 
      id: 2, 
      title: "LiDAR Data Acquisition & Storage System", 
      category: "UART", 
      tag: "Uart", img: p2_img1,
      images: [p2_img1, p2_img2],
      // videoData: [
      //   { url: p1_vid1, title: "Locomotion Test", type: "Simulation", desc: "Bipedal gait analysis using reinforcement learning." },
      //   { url: p1_vid2, title: "Detection", type: "NVIDIA Jetson", desc: " hardware." },
      //   { url: p1_vid2, title: "Stability Performance", type: "Physics Engine", desc: "Balance control under external disturbances." },
      //   { url: "https://www.youtube.com/embed/ro-cJp_Rg3M", title: "Live Feedback", type: "System Log", desc: "Real-time data visualization of joints." }
      // ],
      detailedDesc: [
        "Collect and store LiDAR data for applications like navigation and object.","Real-time LiDAR data collection.","Data storage for analysis and processing.",
        "Efficient SPI communication for high-speed data transfer.",
        "Contribution: System implementation and coding; Hardware integration and data storage management."
      ],
      techStack: ["Python", "Mujoco", "PyTorch", "Deep RL"]
    },
    { 
      id: 3, 
      title: "Obstacle Avoiding Robot", 
      category: "Vision", 
      tag: "PyTorch",img: p3_img1,
      images: [p3_img1],
      videoData: [
        { url: "https://www.youtube.com/embed/pNOSRNXqBpU", title: "Obstacle Avoiding Robot Demo", type: "NVIDIA Jetson", desc: "Developed a robot that autonomously detects and avoids obstacles in its path." },
        
        { url: "https://www.youtube.com/embed/Cud4aSgYm2w", title: "Obstacle Avoiding Robot", type: "Computer Vision", desc: "Autonomous navigation with sensor feedback" }
      ],
      detailedDesc: [
        "Developed a robot that autonomously detects and avoids obstacles in its path.", "Real-time obstacle detection and avoidance",
        "Autonomous navigation with sensor feedback","Smooth motor control for direction changes",
        "Contribution:- Implemented obstacle detection algorithms","            Integrated sensor and motor control systems",
      ],
      techStack: ["PyTorch", "OpenCV", "YOLOv8", "Jetson Orin"]
    },
    { 
      id: 4, 
      title: "Line Follower Robot (L.F.R)", 
      category: "Multi-Agent", 
      tag: "C++ & ROS",img: p3_img1,
      images: [p3_img1],
      videoData: [
        { url: "https://www.youtube.com/embed/b1flnCoKTQk", title: "Line Follower Robot demo1", type: "Multi-Agent", desc: "Developed a robot that follows a predefined path using line-detection sensors." },
        { url: "https://www.youtube.com/embed/VHGuBMu89j4", title: "Line Follower Robot demo2", type: "Algorithm", desc: "Smooth motor control for accurate movement." },
         { url: "https://www.youtube.com/embed/skv1aRM_3tk", title: "Line Follower Robot demo3", type: "Algorithm", desc: "Precise sensor-based path detection." },
          { url: "https://www.youtube.com/embed/RN_vK3V2ZpM", title: "Line Follower Robot demo4", type: "Algorithm", desc: "Autonomous navigation along a line." }
      ],
      detailedDesc: [
        "Developed a robot that follows a predefined path using line-detection sensors.",
        "Autonomous navigation along a line.","Precise sensor-based path detection","Smooth motor control for accurate movement.",
        "Contribution:- Designed control algorithms and sensor integration","             Hardware assembly and coding for path following"
      ],
      techStack: ["C++", "ROS 2", "Python", "Multi-Agent Systems"]
    },
    // Baaki projects 5-10 ko aap isi format mein 'videoData' aur 'images' arrays ke saath update kar sakte hain.
    { id: 5, title: "WiFi-Controlled Car", category: "Navigation", tag: "IOT", img: p5_img1,
            images: [p5_img1, p5_img2],
      videoData: [
        { url: "https://www.youtube.com/embed/3WBhPUdofrI", title: "WiFi-Controlled Car", type: "IOT", desc: "Remote control through a web interface or mobile app." },
       
      ],
      detailedDesc: [
        "Designed a car controlled remotely via WiFi for real-time navigation.",
        "Remote control through a web interface or mobile app","Real-time response and smooth navigation","Wireless communication over WiFi",
        "Contribution:- Developed control logic and web-based interface  ","            Integrated hardware components and ensured seamless connectivity",
      ],
      techStack: ["C++", "ROS 2", "Python", "Multi-Agent Systems"]
    },
    { id: 6, title: "Smart Vehicle Speed & Distance Monitoring System", category: "Simulation", tag: "Gazebo",img: p6_img1,
            images: [p6_img1, p6_img2, p6_img3],
      videoData: [
        { url: "https://www.youtube.com/embed/BcDu86giw_4", title: "Smart Vehicle Speed & Distance Monitoring System", type: "Multi-Agent", desc: "Real-time monitoring of vehicle speed and distance with accurate data acquisition and display." },
        { url: "https://www.youtube.com/embed/WHNZQjjnDgo", title: "Collision Avoidance", type: "Real-time speed and distance detection.", desc: "Accurate radar-based distance measurement" }
      ],
      detailedDesc: [
        "Real-time monitoring of vehicle speed and distance with accurate data acquisition and display.",
        "Real-time speed and distance detection.", " Wireless data transmission via Bluetooth ","Accurate radar-based distance measurement",
        "Contribution:- System design, coding, and hardware integration,Testing and debugging",
        "Components: GPS Module, K2 Pico Radar, HC-05 Bluetooth"
      ],
      techStack: ["C++", "ROS 2", "Python", "Multi-Agent Systems"]
    },
    { id: 7, title: "Dual-Battery Intelligent Power Management System", category: "Power management", tag: "Power controller", img: p7_img1,
             images: [p7_img1, p7_img2],
      videoData: [
        { url: "https://www.youtube.com/embed/680hg4BAWEE", title: "Dual-Battery Intelligent Power Management System", type: "Automatic switching between two batteries.", desc: "Manage dual batteries with intelligent power switching to extend battery life." },
        
      ],
      detailedDesc: [
        "Manage dual batteries with intelligent power switching to extend battery life.",
        "Automatic switching between two batteries.",
        "Efficient power management and load balancing.",
        "Enhanced battery performance and longevity"
      ],
      techStack: ["C++", "ROS 2", "Python", "Multi-Agent Systems"]
    },
    { id: 8, title: "Advanced Breath Analyzer System", category: "Aviation", tag: "Arduino", img: p8_img1,
            images: [p8_img1, p8_img2, p8_img3],
      videoData: [
        { url: "https://www.youtube.com/embed/BcDu86giw_4", title: "Advanced Breath Analyzer System", type: "Multi-Agent", desc: "Accurately detect alcohol levels with advanced calibration features." },
        
      ],
      detailedDesc: [
        "Accurately detect alcohol levels with advanced calibration features.",
        "Technologies Used:","Microcontroller: Raspberry Pi","Sensors: Fuel Cell Sensor, HX10B Air Pressure Sensor","Additional Components: Pi Camera, Instrumentation Amplifier"
      ],
      techStack: ["C++", "Arduino", "Python", "opencv"]
    },
    { id: 9, title: "Smart Toll Tax System", category: "IOT", tag: "IOT",img: p9_img1 ,
             images: [p9_img1,p9_img2],
      videoData: [
        { url: "https://www.youtube.com/embed/l_SCNzqAhBg", title: "Smart Toll Tax System", type: "Multi-Agent", desc: "Developed an automated toll collection system using Raspberry Pi and Python to streamline toll payments with a QR code scanner for vehicle identification." },
       
      ],
      detailedDesc: [
        "Developed an automated toll collection system using Raspberry Pi and Python to streamline toll payments with a QR code scanner for vehicle identification.",
        "QR Code Scanning: Identifies vehicles and links them to registered accounts.",
        "Contactless Payment: Automatic toll deductions from linked digital wallets.",
        "Data Logging: Records vehicle data and transaction history for monitoring.",
        
      ],
      techStack: ["C++", "Raspberry pi", "Python", "Multi-Agent Systems"]
    },
    { id: 10, title: "Jetson-Based Quadruped", category: "Embedded", tag: "Jetson Orin",
       desc: "Legged locomotion on edge AI.", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=600" }
  ]
};
