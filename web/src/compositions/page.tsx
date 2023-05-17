import React from "react";
import { UniformComposition, UniformCompositionProps, UniformSlot } from "@uniformdev/canvas-react";
import { UniformContext } from "@uniformdev/context-react";
import { createUniformContext } from "../lib/uniformContext";
import Container from "../components/Container";
import { enhanceComposition } from "../lib/canvas";

// IMPORTANT: importing all canvas registered components here
import "../components/canvasComponents";

const clientContext = createUniformContext();

export default function PageComposition(props: any) {
  const { pageContext } = props;
  const contextualEditingEnhancer: UniformCompositionProps["contextualEditingEnhancer"] =
    async ({ composition }) => {
      await enhanceComposition(composition);
      return composition;
    };

  const { composition } = pageContext || {};
  return (
    <UniformContext
      context={clientContext}
      outputType={
        process.env.GATSBY_UNIFORM_OUTPUT_MODE
          ? process.env.GATSBY_UNIFORM_OUTPUT_MODE
          : "standard"
      }
    >
      <Container>
        <UniformComposition
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}
        >
          <UniformSlot name="content" />
        </UniformComposition>
      </Container>
    </UniformContext>
  );
}
