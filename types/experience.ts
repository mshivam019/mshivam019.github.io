export interface ExperienceTab {
  _key: string;
  title: string;
  date: string;
  location: string;
  description: string;
  icon?: string;
}

export interface Experiences {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  tabs: ExperienceTab[];
}

export interface ExperienceProps {
  experience: Experiences;
}
