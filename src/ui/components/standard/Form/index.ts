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

const SubmitButton = lazy(() => import("./components/FormSubmitButton"));
const ResetButton = lazy(() => import("./components/FormResetButton"));

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
    SubmitButton,
    ResetButton,
  },
  fieldContext,
  formContext,
});

export * from "./context";
export * from "./utils";
