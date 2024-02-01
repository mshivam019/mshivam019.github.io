interface Certificate {
  url: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  altText: string;
  classname: string;
  _type: string;
  description: string;
  _key: string;
  title: string;
}

export interface Button {
  _key: string;
  url: string;
  label: string;
}

export interface Skill {
  _key: string;
  altText: string;
  level: string;
  classname?: string;
  svg: {
    hotspot: {
      x: number;
      y: number;
      height: number;
      _type: string;
      width: number;
    };
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    crop: {
      _type: string;
      right: number;
      top: number;
      left: number;
      bottom: number;
    };
  };
  name: string;
}

interface ReadMore {
  _type: string;
  description: string;
  _key: string;
  title: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  altText: string;
  classname: string;
}

interface Image {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface Blog {
  _key: string;
  title: string;
  image: Image;
  altText: string;
  classname: string;
  _type: string;
  description: string;
}

export interface Hero {
  name: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  certificates: Certificate[];
  _createdAt: string;
  buttons: Button[];
  skills: Skill[];
  _id: string;
  classname: string;
  readmore: ReadMore[];
  image: Image;
  altText: string;
  blogs: Blog[];
  description: string;
}

export interface HeroProps {
  hero: Hero;
}
