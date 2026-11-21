export const siteConfig = {
  name: "coop",
  description: "App de gestión para entidad financiera inicial. manejar creditos, inversiones, ahorros. realizando auditoria, roles y seguridad",
  archetype: "saas_tool" as
    | "storefront"
    | "dashboard"
    | "workflow"
    | "saas_tool"
    | "content",
  primaryColor: "#0f766e",
} as const;
