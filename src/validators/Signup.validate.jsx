import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Le username doit avoir min 3 caractères")
    .required("Le username est requis"),
  email: Yup.string()
    .email("email invalide")
    .required("Ce champ est obligatoire"),
  password: Yup.string()
    .min(8, "Mot de passe trop court")
    .required("Ce champ est obligatoire"),
});
