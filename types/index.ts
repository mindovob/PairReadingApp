export * from './state';

export interface Person {
  // id: number;
  // first_name: string;
  // last_name: string;
  // contact: Contact;
  // gender: string;
  // ip_address: string;
  // avatar: string;
  // address: Address;
  title: string;
  author: string;
  url: string;
  imgUrl: string;
  buyUrl: string;
  userId: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}
