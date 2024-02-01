export interface ProjectDetails {
  _key: string;
  title: string;
  technologies: string[];
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  githubLink: string;
  altText: string;
  description: string;
  liveLink: string;
  className?: string;
}
export interface ProjectItem {
  projectItem: ProjectDetails;
}
export interface Project {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  projects: ProjectDetails[];
  name: string;
  description: string;
}

export interface ProjectsProps {
  project: Project;
}
