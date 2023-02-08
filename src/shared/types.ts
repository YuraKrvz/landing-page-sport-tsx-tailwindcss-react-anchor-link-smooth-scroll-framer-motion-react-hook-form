export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface TypeBenefit {
  icon: JSX.Element
  title: String
  description: String
}

export interface TypeClass {
  name: String
  description?: String
  image: String
}
