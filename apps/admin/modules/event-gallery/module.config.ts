import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "event-gallerys"],
  moduleName: "Event-gallerys",
  endpoint: "/event-gallerys/info/",
  moduleDescription: {
    default: "Manage Event-gallerys",
    new: "Create a new Event-gallery.",
  },
  bread: [
    {
      label: "Classic Admin",
      url: "/",
    },
    {
      label: "Event-gallerys",
      url: "/event-gallerys",
    },
  ],
};
