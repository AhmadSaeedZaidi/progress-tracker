import type { Skill } from "../models/Skill";

export const skills: Skill[] = [
  // Robotics & ROS2 Branch
  { id: 'ros2-basics', name: 'ROS2 Basics', branchId: 'robotics', experience: 200, level: 2, goal: 400, unlocked: true, categoryId: 'robotics' },
  { id: 'ros2-networking', name: 'ROS2 Multi-Device', branchId: 'robotics', experience: 150, level: 2, goal: 300, unlocked: true, categoryId: 'robotics' },
  { id: 'ros2-pubsub', name: 'Publishers & Subscribers', branchId: 'robotics', experience: 180, level: 2, goal: 350, unlocked: true, categoryId: 'robotics' },
  { id: 'estimation', name: 'Estimation & Filtering', branchId: 'robotics', experience: 100, level: 1, goal: 300, unlocked: true, categoryId: 'robotics' },
  { id: 'trajectory', name: 'Trajectory Planning', branchId: 'robotics', experience: 80, level: 1, goal: 250, unlocked: true, categoryId: 'robotics' },
  { id: 'ros2-advanced', name: 'Advanced ROS2', branchId: 'robotics', experience: 0, level: 0, goal: 400, unlocked: false, categoryId: 'robotics' },

  // Graphics & Computer Vision Branch  
  {
    id: 'opengl', name: 'OpenGL', branchId: 'graphics-cv', experience: 300, level: 3, goal: 500, unlocked: true, categoryId: 'graphics',
    perkIds: ['game-dev']
  },
  { id: 'opencv-basics', name: 'OpenCV Basics', branchId: 'graphics-cv', experience: 50, level: 1, goal: 200, unlocked: true, categoryId: 'cv' },
  { id: 'opencl', name: 'OpenCL', branchId: 'graphics-cv', experience: 30, level: 0, goal: 150, unlocked: true, categoryId: 'systems' },
  { id: 'opencv-projects', name: 'OpenCV Projects', branchId: 'graphics-cv', experience: 0, level: 0, goal: 300, unlocked: false, categoryId: 'cv' },
  { id: 'computer-vision', name: 'Computer Vision Theory', branchId: 'graphics-cv', experience: 0, level: 0, goal: 400, unlocked: false, categoryId: 'cv' },

  // Python Development Branch
  { id: 'python-core', name: 'Python Programming', branchId: 'python-dev', experience: 400, level: 4, goal: 600, unlocked: true, categoryId: 'backend' },
  { id: 'flask', name: 'Flask Web Framework', branchId: 'python-dev', experience: 250, level: 3, goal: 400, unlocked: true, categoryId: 'backend' },
  { id: 'matplotlib', name: 'Matplotlib', branchId: 'python-dev', experience: 200, level: 2, goal: 350, unlocked: true, categoryId: 'data-science' },
  { id: 'tensorflow', name: 'TensorFlow', branchId: 'python-dev', experience: 150, level: 2, goal: 400, unlocked: true, categoryId: 'ml' },
  { id: 'numpy-scipy', name: 'NumPy & SciPy', branchId: 'python-dev', experience: 180, level: 2, goal: 300, unlocked: true, categoryId: 'data-science' },
  { id: 'pandas', name: 'Pandas', branchId: 'python-dev', experience: 120, level: 1, goal: 250, unlocked: true, categoryId: 'data-science' },

  // Systems & Tools Branch
  { id: 'cmake', name: 'CMake', branchId: 'systems', experience: 180, level: 2, goal: 300, unlocked: true, categoryId: 'systems' },
  { id: 'gtest', name: 'Google Test (GTest)', branchId: 'systems', experience: 120, level: 1, goal: 250, unlocked: true, categoryId: 'systems' },
  { id: 'protobuf', name: 'Protocol Buffers', branchId: 'systems', experience: 150, level: 2, goal: 300, unlocked: true, categoryId: 'communication' },
  { id: 'udp', name: 'UDP Communication', branchId: 'systems', experience: 140, level: 2, goal: 280, unlocked: true, categoryId: 'communication' },
  { id: 'docker', name: 'Docker', branchId: 'systems', experience: 0, level: 0, goal: 200, unlocked: false, categoryId: 'systems' },
  { id: 'git-advanced', name: 'Advanced Git', branchId: 'systems', experience: 80, level: 1, goal: 200, unlocked: true, categoryId: 'systems' },

  // Mathematics Branch
  { id: 'linear-algebra', name: 'Linear Algebra', branchId: 'mathematics', experience: 350, level: 4, goal: 500, unlocked: true, categoryId: 'math' },
  { id: 'statistics', name: 'Statistics', branchId: 'mathematics', experience: 320, level: 3, goal: 450, unlocked: true, categoryId: 'math' },
  { id: 'calculus', name: 'Calculus', branchId: 'mathematics', experience: 380, level: 4, goal: 500, unlocked: true, categoryId: 'math' },
  { id: 'probability', name: 'Probability Theory', branchId: 'mathematics', experience: 200, level: 2, goal: 350, unlocked: true, categoryId: 'math' },
  { id: 'optimization', name: 'Optimization', branchId: 'mathematics', experience: 80, level: 1, goal: 300, unlocked: false, categoryId: 'math' },

  // Research & ML Branch
  {
    id: 'research-application', name: 'Research Application', branchId: 'research', experience: 50, level: 1, goal: 100, unlocked: true, categoryId: 'research',
    perkIds: ['urogiki-applicant']
  },
  { id: 'reinforcement-learning', name: 'Reinforcement Learning', branchId: 'research', experience: 0, level: 0, goal: 300, unlocked: false, categoryId: 'ml' },
  { id: 'research-methods', name: 'Research Methodology', branchId: 'research', experience: 0, level: 0, goal: 250, unlocked: false, categoryId: 'research' },
  { id: 'academic-writing', name: 'Academic Writing', branchId: 'research', experience: 0, level: 0, goal: 200, unlocked: false, categoryId: 'research' },
  { id: 'paper-reading', name: 'Paper Reading & Analysis', branchId: 'research', experience: 20, level: 0, goal: 150, unlocked: true, categoryId: 'research' },
];