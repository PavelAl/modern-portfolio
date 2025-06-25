import type { FC } from "react";

import { BrandIcon } from "~/Library/Icons/components/BrandIcons";
import type { BrandIconType } from "~/Library/Icons/components/BrandIcons";

const allIcons: BrandIconType[] = [
  "aws",
  "css",
  "figma",
  "git",
  "gitlab",
  "html",
  "javascript",
  "jenkins",
  "jest",
  "jira",
  "materialui",
  "mobx",
  "nodejs",
  "npm",
  "react",
  "redux",
  "rollup",
  "sass",
  "storybook",
  "typescript",
  "vite",
  "vscode",
];

export const BrandIconGallery: FC = () => {
  return (
    <section style={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}
      >
        Brand Icons Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {allIcons.map((iconName) => (
          <div
            key={iconName}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <BrandIcon icon={iconName} />

            <span
              style={{
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                textTransform: "capitalize",
                color: "#333",
              }}
            >
              {iconName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
