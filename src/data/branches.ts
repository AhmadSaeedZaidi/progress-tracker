import type { Branch } from "../models/Branch";

export const rawBranches: Omit<Branch, "skillIds">[] = [
  { id: 'robotics', name: 'Robotics & ROS2', description: 'ROS2, robotics systems, estimation', color: '#F44336' },
  { id: 'graphics-cv', name: 'Graphics & Computer Vision', description: 'OpenGL, OpenCV, OpenCL', color: '#2196F3' },
  { id: 'python-dev', name: 'Python Development', description: 'Flask, TensorFlow, data science', color: '#4CAF50' },
  { id: 'systems', name: 'Systems & Tools', description: 'CMake, testing, protocols', color: '#FF9800' },
  { id: 'mathematics', name: 'Mathematics', description: 'Linear Algebra, Statistics, Calculus', color: '#9C27B0' },
  { id: 'research', name: 'Research & ML', description: 'Research experience, RL, academic work', color: '#795548' },
];