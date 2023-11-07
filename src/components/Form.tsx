import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const Form = () => {
  type FormData = {
    name: string;
    prenom: string;
    age: string;
    email: string;
    address: string;
    title: string;
    description: string;
    sectionTitle: string;
    sectionContent: string;
  };

  const nameRegex = /^[A-Z][a-zA-Z]*$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z]+\.(com|fr)$/;
  const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
  const sectionRegex = /^[a-zA-Z\s]*$/;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    prenom: "",
    age: "",
    email: "",
    address: "",
    title: "",
    description: "",
    sectionTitle: "",
    sectionContent: "",
  });

  const [formErrors, setFormErrors] = useState<FormData>({
    name: "",
    prenom: "",
    age: "",
    email: "",
    address: "",
    title: "",
    description: "",
    sectionTitle: "",
    sectionContent: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: typeof formErrors = {
      name: "",
      prenom: "",
      age: "",
      email: "",
      address: "",
      title: "",
      description: "",
      sectionTitle: "",
      sectionContent: "",
    };
    let success = true;
    for (const field in formData) {
      switch (field as keyof typeof formData) {
        case "name":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = { ...newErrors, [field]: "Le nom est obligatoire" };
          } else if (
            !nameRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer un nom valide (en majuscules, sans chiffres ni caractères spéciaux).",
            };
          } else {
            newErrors = { ...newErrors, [field]: "" };
          }
          break;
        case "prenom":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = { ...newErrors, [field]: "Le prenom est obligatoire" };
          } else if (
            !nameRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer un prénom valide (commence par une majuscule, sans chiffres ni caractères spéciaux).",
            };
          } else {
            newErrors = { ...newErrors, [field]: "" };
          }
          break;
        case "age":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = { ...newErrors, [field]: "L'age est obligatoire." };
          } else if (parseInt(formData[field as keyof typeof formData]) < 18) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer un âge valide en chiffre (supérieur ou égal à 18).",
            };
          }
          break;
        case "email":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = { ...newErrors, [field]: "Email est obligatoire." };
          } else if (
            !emailRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]: "Veuillez entrer une adresse email valide.",
            };
          }
          break;
        case "address":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = { ...newErrors, [field]: "Address est obligatoire." };
          } else if (
            formData[field as keyof typeof formData].length > 100 ||
            !addressRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer une adresse valide (ne dépasse pas 100 caractères, sans caractères spéciaux).",
            };
          }
          break;
        case "title":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = {
              ...newErrors,
              [field]: "Titre du CV est obligatoire.",
            };
          } else if (
            !sectionRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer un titre valide (sans chiffres ni caractères spéciaux).",
            };
          }
          break;
        case "description":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = {
              ...newErrors,
              [field]: "Description du CV est obligatoire.",
            };
          } else if (
            !addressRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer une description valide (sans caractères spéciaux).",
            };
          }
          break;
        case "sectionTitle":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = {
              ...newErrors,
              [field]: "Titre de la section est obligatoire.",
            };
          } else if (
            !sectionRegex.test(formData[field as keyof typeof formData])
          ) {
            newErrors = {
              ...newErrors,
              [field]:
                "Veuillez entrer un titre de section valide (sans chiffres ni caractères spéciaux).",
            };
          }
          break;
        case "sectionContent":
          if (formData[field as keyof typeof formData] === "") {
            newErrors = {
              ...newErrors,
              [field]: "Contenu de la section est obligatoire.",
            };
          }
          break;
        default:
          break;
      }
    }
    setFormErrors(newErrors);
    for (const error in newErrors) {
      if (newErrors[error as keyof typeof formErrors].toString() !== "") {
        success = false;
      }
    }

    if (success) {
      console.log({ formData });
    }
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      prenom: "",
      age: "",
      email: "",
      address: "",
      title: "",
      description: "",
      sectionTitle: "",
      sectionContent: "",
    });
    setFormErrors({
      name: "",
      prenom: "",
      age: "",
      email: "",
      address: "",
      title: "",
      description: "",
      sectionTitle: "",
      sectionContent: "",
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="md:w-[500px] md:rounded-[20px] p-6 md:p-[35px] bg-[whitesmoke]"
    >
      <h1 className="font-bold text-[35px] text-center underline mb-10 text-[#071a6e] uppercase">
        Formulaire
      </h1>
      <Input
        label="Nom"
        id="name"
        type="text"
        placeholder="Entrer votre nom"
        value={formData.name}
        onChange={(event) => handleFieldChange("name", event.target.value)}
        inputError={formErrors.name}
      />
      <Input
        label="Prenom"
        id="prenom"
        type="text"
        placeholder="Entrer votre prenom"
        value={formData.prenom}
        onChange={(event) => handleFieldChange("prenom", event.target.value)}
        inputError={formErrors.prenom}
      />
      <Input
        label="Âge"
        id="age"
        type="number"
        placeholder="Entrer votre âge"
        value={formData.age}
        onChange={(event) => handleFieldChange("age", event.target.value)}
        inputError={formErrors.age}
      />
      <Input
        label="Email"
        id="age"
        type="text"
        placeholder="Entrer votre adresse email valide"
        value={formData.email}
        onChange={(event) => handleFieldChange("email", event.target.value)}
        inputError={formErrors.email}
      />
      <Input
        label="Address"
        id="address"
        type="text"
        placeholder="Entrer votre adresse"
        value={formData.address}
        onChange={(event) => handleFieldChange("address", event.target.value)}
        inputError={formErrors.address}
      />
      <Input
        label="Titre du CV"
        id="address"
        type="text"
        placeholder="Entrer le titre du CV"
        value={formData.title}
        onChange={(event) => handleFieldChange("title", event.target.value)}
        inputError={formErrors.title}
      />
      <TextArea
        label="Description"
        id="address"
        placeholder="Entrer le titre de la section"
        value={formData.description}
        onChange={(event) =>
          handleFieldChange("description", event.target.value)
        }
        inputError={formErrors.description}
      />
      <Input
        label="Titre de la section"
        id="sectionTitle"
        type="text"
        placeholder="Entrer le titre de la section"
        value={formData.sectionTitle}
        onChange={(event) =>
          handleFieldChange("sectionTitle", event.target.value)
        }
        inputError={formErrors.sectionTitle}
      />
      <TextArea
        label="Contenu de la section"
        id="sectionContent"
        placeholder="Entrer le contenu de la section"
        value={formData.sectionContent}
        onChange={(event) =>
          handleFieldChange("sectionContent", event.target.value)
        }
        inputError={formErrors.sectionContent}
      />
      <button
        type="submit"
        className="rounded-[5px] bg-[#075825] text-white p-[10px] text-xl w-full my-[20px] mb-4"
      >
        Envoyer
      </button>
      <button
        type="button"
        className="rounded-[5px] bg-[#075825] text-white p-[10px] text-xl w-full my-[20px]"
        onClick={handleClearForm}
      >
        Effacer
      </button>
    </form>
  );
};

export default Form;
