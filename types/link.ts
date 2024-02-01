export interface Link {
  url: string;
  altText: string;
  classname: string;
  svg: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  link: string;
  description: string;
  _key: string;
}

export interface Linktree {
  _createdAt: string;
  _rev: string;
  _type: string;
  Links: Link[];
  _id: string;
  _updatedAt: string;
}

export interface LinkProps {
  links: Linktree;
}
