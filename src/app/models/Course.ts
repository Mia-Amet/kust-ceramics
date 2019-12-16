export interface CourseDescription {
  full: string[];
  advantages: string[];
}

interface CourseLinks {
  buy: string;
  certificate: string;
  roving?: string;
}

interface CourseDuration {
  inHours: number;
  inClasses?: number;
}

export interface Course {
  name: string;
  price: number;
  duration: CourseDuration;
  level: number;
  description: CourseDescription;
  canBeRoving: boolean;
  photos: string[];
  links: CourseLinks;
}
