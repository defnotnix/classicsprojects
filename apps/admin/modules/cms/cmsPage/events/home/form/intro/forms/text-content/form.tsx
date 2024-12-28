"use client";

import React from "react";
//mantine
import {
  Badge,
  Button,
  Divider,
  FileInput,
  Grid,
  NumberInput,
  Paper,
  Pill,
  PillsInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
//framework
import { FormHandler } from "@vsphere/core";
import { FormElement, ImageUpload } from "@vsphere/ui";
import { DateInput, TimeInput } from "@mantine/dates";
import { Plus, Signature, Upload } from "@phosphor-icons/react";

export { formProps } from "./form.config";

export function _Form() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { current } = FormHandler.usePropContext();

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <Stack gap="xs">
      <TextInput
        label="Sub-Heading"
        description="The text before the main header"
        {...form.getInputProps("subheading")}
        required
        placeholder="e.g. Classics Projects"
      />

      <Stack gap={0}>
        <TextInput
          label="Heading"
          description="4 Lines for the Heading Text"
          {...form.getInputProps("heading1")}
          required
          placeholder="e.g. From Dreamy Beginnings to Joyful"
          styles={{
            label: {
              fontSize: "var(--mantine-font-size-xs)",
            },
            input: {
              borderBottom: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
        <TextInput
          {...form.getInputProps("heading2")}
          required
          radius={0}
          placeholder="e.g. Endings - We perfect every moment"
          styles={{
            input: {
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
          <TextInput
          {...form.getInputProps("heading3")}
          required
          radius={0}
          placeholder="e.g. Endings - We perfect every moment"
          styles={{
            input: {
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />

        <TextInput
          {...form.getInputProps("heading4")}
          required
          placeholder="e.g. before, during & after"
          styles={{
            input: {
              borderTop: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
      </Stack>

      <Stack gap={0}>
        <TextInput
          label="Writer- Information"
          description="Organization & Postion of writer"
          {...form.getInputProps("post1")}
          required
          placeholder="e.g. Thrive Foundation for Youth Professor of Organization"
          styles={{
            label: {
              fontSize: "var(--mantine-font-size-xs)",
            },
            input: {
              borderBottom: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />

        <TextInput
          {...form.getInputProps("post2")}
          required
          placeholder="e.g. Behavior at the Stanford Graduate School of Business"
          styles={{
            input: {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
      </Stack>
    </Stack>
  );
}