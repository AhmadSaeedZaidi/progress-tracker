import type { Branch } from "../models/Branch";

export const rawBranches: Omit<Branch, "skillIds">[] = [
  { id: 'robotics', name: 'Robotics & ROS2', description: 'ROS2, robotics systems, estimation', color: '#F44336' },
  { id: 'graphics-cv', name: 'Graphics & Computer Vision', description: 'OpenGL, OpenCV, Three.js, OpenCL, Camera Calibration', color: '#2196F3' },
  { id: 'python-dev', name: 'Python Development', description: 'Flask, TensorFlow, PyQt, Data Science', color: '#4CAF50' },
  { id: 'cpp-dev', name: 'C++ Development', description: 'C++ programming, OOP, SFML, Embedded Systems', color: '#00BCD4' },
  { id: 'systems', name: 'Systems & Tools', description: 'CMake, Testing, Protocols, Linux, Distributed Computing', color: '#FF9800' },
  { id: 'mathematics', name: 'Mathematics', description: 'Linear Algebra, Statistics, Calculus, Analysis', color: '#9C27B0' },
  { id: 'research-docs', name: 'Research & Documentation', description: 'Research Methodology, Documentation', color: '#795548' },
  { id: 'ai-ml', name: 'AI, ML & RL', description: 'Artificial Intelligence, Machine Learning, Algorithms', color: '#E91E63' },
];