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
const DateRangePicker = lazy(() => import("./fields/FormDateRangePicker"));
const TimeInput = lazy(() => import("./fields/FormTimeInput"));
const NumberField = lazy(() => import("./fields/FormNumberField"));

const Form = lazy(() => import("./components/FormForm"));
const SubmitButton = lazy(() => import("./components/FormSubmitButton"));
const ResetButton = lazy(() => import("./components/FormResetButton"));
const CancelButton = lazy(() => import("./components/FormCancelButton"));
const Dialog = lazy(() => import("./components/FormDialog"));
const Drawer = lazy(() => import("./components/FormDrawer"));

export const { useAppForm, withForm, useTypedAppFormContext } = createFormHook({
  fieldComponents: {
    Input,
    Textarea,
    Select,
    Autocomplete,
    Checkbox,
    Combobox,
    DatePicker,
    DateRangePicker,
    TimeInput,
    NumberField,
  },
  formComponents: {
    Form,
    SubmitButton,
    ResetButton,
    CancelButton,
    Dialog,
    Drawer,
  },
  fieldContext,
  formContext,
});

export type { FormDialogProps } from "./components/FormDialog";
export type { FormDrawerProps } from "./components/FormDrawer";
export type { FormFormProps } from "./components/FormForm";
export * from "./context";
export * from "./formActions";
export * from "./types";
export * from "./utils";
