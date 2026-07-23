"use client";

import { createFormHook } from "@tanstack/react-form";
import { lazy } from "react";

import { fieldContext, formContext } from "./context";

const Input = lazy(() => import("./fields/FormInput"));
const Textarea = lazy(() => import("./fields/FormTextarea"));
const Select = lazy(() => import("./fields/FormSelect"));
const Autocomplete = lazy(() => import("./fields/FormAutocomplete"));
const Checkbox = lazy(() => import("./fields/FormCheckbox"));
const Combobox = lazy(() => import("./fields/FormCombobox"));
const DatePicker = lazy(() => import("./fields/FormDatePicker"));
const NumberField = lazy(() => import("./fields/FormNumberField"));

const Submit = lazy(() => import("./fields/FormSubmit"));
const Reset = lazy(() => import("./fields/FormReset"));

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    Input,
    Textarea,
    Select,
    Autocomplete,
    Checkbox,
    Combobox,
    DatePicker,
    NumberField,
  },
  formComponents: {
    Submit,
    Reset,
  },
  fieldContext,
  formContext,
});

export * from "./context";
export * from "./utils";
