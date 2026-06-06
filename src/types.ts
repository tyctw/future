export interface Department {
  name: string;
  description: string;
  certificates: string[];
}

export interface Cluster {
  id: string;
  name: string;
  icon: string;
  color: string;
  lightColor: string;
  industries: string;
  traits: string[];
  departments: Department[];
  future: {
    work: string[];
    study: string;
  };
}
