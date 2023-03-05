import taskVideo from './../../assets/videos/task-man-por.mp4'
import pathVideo from './../../assets/videos/path-por.mp4'
import runnerv1 from './../../assets/videos/runnerv1.mp4'

type Projects = {
  title: string
  techStack: string[]
  videoUrl: string
  descr: string
  linkCode: string
  linkUrl: string
}


export const PROJECTS_DATA: Projects[] = [
    {
      title: 'T-REX ENDLESS RUNNER',
      techStack: ['three.js', 'webpack', 'sass'],
      videoUrl: runnerv1,
      descr:
        '3D clone of google chrome browser t-rex game made in 3D with the help of Three.js framework',
      linkCode: 'https://github.com/YariPL/404-trex-clone',
      linkUrl: 'https://dino3d.herokuapp.com/',
    },
    {
      title: 'Task manager',
      techStack: ['react', 'mongodb', 'nodejs', 'express', 'rest', 'sass'],
      videoUrl: taskVideo,
      descr: 'Task manager is the app which helps to manage projects and tasks',
      linkCode: 'https://github.com/YariPL/task-manager',
      linkUrl: 'https://tasksorginizer.herokuapp.com/',
    },
    {
      title: 'Pathfinding visualizer',
      techStack: ['react', 'sass'],
      videoUrl: pathVideo,
      descr: 'Visualization of how the pathfinding algorithm works',
      linkCode: 'https://github.com/YariPL/pathfinder-algorithms-visualizer',
      linkUrl: 'https://pathfindingvisualizeralg.herokuapp.com/',
    },
  ]