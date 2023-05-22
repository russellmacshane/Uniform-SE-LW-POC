import React from "react";

import type {
  GetServerDataProps,
  GetServerDataReturn,
  PageProps,
} from "gatsby";

import {
  UniformComposition,
  UniformCompositionProps,
  UniformSlot,
} from "@uniformdev/canvas-react";

import { UniformContext } from "@uniformdev/context-react";

import RussCta from "../../../components/RussCta";
import RussHeader from "../../../components/RussHeader";
import RussFooter from "../../../components/RussFooter";

import "../../../components/canvasComponents";

import { createUniformContext } from "../../../lib/uniformContext";
import { enhanceComposition, getCompositionById } from "../../../lib/canvas";

export async function getServerData({
  query,
}: GetServerDataProps): GetServerDataReturn {
  const composition = await getCompositionById("9b7a28a2-199c-455b-882e-e8ac3f69446f");
  await enhanceComposition(composition);
  return {
    status: 200,
    props: { composition },
  };
}

const clientContext = createUniformContext();

const WordPressEnterpriseHostingPage = (props: PageProps) => {
  const { serverData } = props;
  const { composition } = (serverData as any) || {};

  const contextualEditingEnhancer: UniformCompositionProps["contextualEditingEnhancer"] =
    async ({ composition }) => {
      await enhanceComposition(composition);
      return composition;
    };

  return (
    <div>
      <RussHeader background="bg-green-600" />
      <h1 className="text-7xl">This is the WordPress Enterprise Hosting Page!</h1>
      <RussCta
        title="Buy WordPress Enterprise Hosting Now!"
        subtitle="This is your chance to SAVE!"
        buttonText="BUY WORDPRESS!"
      />
      <UniformContext
        context={clientContext}
        outputType={
          process.env.GATSBY_UNIFORM_OUTPUT_MODE
            ? process.env.GATSBY_UNIFORM_OUTPUT_MODE
            : "standard"
        }
      >
        <UniformComposition
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}
        >
          <UniformSlot name="content" />
        </UniformComposition>
      </UniformContext>
      <RussFooter background="bg-green-600" />
    </div>
  );
};

export default WordPressEnterpriseHostingPage;
