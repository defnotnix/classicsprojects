import {
  _Form as FormMainCard,
  formProps as formPropsMainCard,
} from "./forms/maincard/form";
import {
  _Form as FormTextContent,
  formProps as formPropsTextContent,
} from "./forms/text-content/form";

export const _cmsEventsAboutPhaseForms = [
  {
    header: "Phase - Text Contents",
    module: FormTextContent,
    id: 39,
    config: formPropsTextContent,
  },
  {
    header: "Phase 1 : Pre-Event",
    module: FormMainCard,
    id: 49,
    config: formPropsMainCard,
  },
  {
    header: "Phase 2 : During-Event",
    module: FormMainCard,
    id: 41,
    config: formPropsMainCard,
  },
  {
    header: "Phase 3 : Post-Event",
    module: FormMainCard,
    id: 42,
    config: formPropsMainCard,
  },
];
