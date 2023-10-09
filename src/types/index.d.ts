export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type ErrorObj = {
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  user_description?: string;
}