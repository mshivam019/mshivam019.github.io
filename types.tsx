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
  }
  
  export interface Project {
    _id: string;
    _updatedAt: string;
    _createdAt: string;
    _rev: string;
    _type: string;
    projects: ProjectDetails[];
  }
  
  export interface ExperienceTab {
    id: number;
    _key: string;
    title: string;
    date: string;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    altText: string;
    link: string;
    description: string;
  }
  
  export interface Experiences {
    _id: string;
    _updatedAt: string;
    _createdAt: string;
    _rev: string;
    _type: string;
    tabs: ExperienceTab[];
  }
  
  export interface Heros {
    technologies: string[];
    altText: string;
    _createdAt: string;
    _type: string;
    name: string;
    _id: string;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    buttons: {
      label: string;
      _key: string;
      url: string;
    }[];
    _rev: string;
    description: string;
    _updatedAt: string;
    tools: string[];
  }

  export interface HomeProps {
    project: Project;
    experiences: Experiences;
    hero: Heros;
  }

  export interface HeroButton {
    label: string;
    _key: string;
    url: string;
  }
  
  export interface ButtonProps {
    buttons: HeroButton[];
  }

 export interface HeroProps {
    hero: Heros;
  }

  export interface ProjectsProps {
    project: Project;
  }

  export interface ExperienceProps {
    experience: Experiences;
  }

  export interface imagePropsTypes {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }