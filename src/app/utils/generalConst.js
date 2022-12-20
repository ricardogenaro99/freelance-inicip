export const MESSAGES = {
  notCurrentUser: "Ocurrio un error al ingresar a la plataforma",
  errorRole: "No cuenta con los permisos para acceder a la plataforma.",
  emailUnverified: "Le enviamos un correo para validar su cuenta.",
  resetPassword: "Le enviamos un correo para resetear su contraseña",
};

export const VALIDATE_INPUTS = {
  incomplete: "Este campo es obligatorio",
};

export const TIME_OUT = 10000;

export const API_ENDPOINT = "https://apimocha.com/inicip";

export const PROPS_SECTION = {
  isMainContent: true,
  maxWidth: "var(--max-width-inner)",
  textAlign: "left",
};

export const PROPS_SECTION_CENTER_TITLE = {
  ...PROPS_SECTION,
  textAlign: "center",
};

export const DATA_INIT = {
  id: "",
  author: "",
  type: "",
  content: "",
  title: "",
  image: "",
  createdAt: "",
  updateAt: "",
  featured_media: "",
};
