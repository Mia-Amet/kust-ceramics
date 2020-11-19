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

interface CoursePrice {
  fullPrice: number;
  discountPrice: number;
  hasDiscount: boolean;
}

export interface Course {
  name: string;
  price: CoursePrice;
  duration: CourseDuration;
  level: number;
  description: CourseDescription;
  canBeRoving: boolean;
  photos: string[];
  links: CourseLinks;
  id?: string;
  courseId?: string;
}
