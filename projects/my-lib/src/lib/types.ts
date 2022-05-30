export enum ProjectTypes {
  EBA = 'eba',
  VCLOUD = 'vcloud',
  EXTERNAL = 'external',
}

export interface MyLibConfig {
  siteTitle: string;
  projectType: ProjectTypes.EBA | ProjectTypes.VCLOUD | ProjectTypes.EXTERNAL;
  userData: any;
}
