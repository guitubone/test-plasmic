// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bKpefHuncX8cEW37wPMjAY
// Component: 1SCnhMzCyJ6Q
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: whXBuzPs67oZ/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: ZEjrHd9Sj00z/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qZ9zHZTyMfkd/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: bKpefHuncX8cEW37wPMjAY/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: 1SCnhMzCyJ6Q/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wH-q_ZHHI5xE/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: EgDL1U1mt1UT/icon
import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: L4effzobDuu0/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: gmxW2ng1jNY9/icon
import Icon27Icon from "./icons/PlasmicIcon__Icon27"; // plasmic-import: WpDlUhOlxl-u/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 0CstZd6DV2ch/icon
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: 7oRSR7Mf1t-V/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: huiTPv2FStCq/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {
  container432?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>("container432");

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"section">;
  container432?: p.Flex<"div">;
  copyrightSocialLanguage?: p.Flex<typeof CopyrightSocialLanguage>;
};

export interface DefaultFooterProps {
  container432?: React.ReactNode;
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"container432"}
        data-plasmic-override={overrides.container432}
        hasGap={true}
        className={classNames(defaultcss.all, sty.container432)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__bljQ)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__qeytH
                  )}
                >
                  {"Subscribe"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__uu3Pe
                  )}
                >
                  {
                    "Sign up for exclusive offers, original stories, activism, events and more."
                  }
                </div>

                <input
                  className={classNames(defaultcss.input, sty.textbox__x6GJe)}
                  placeholder={"Email address…" as const}
                  size={1 as const}
                  type={"text" as const}
                  value={"" as const}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__zvsP8)}
                  colors={"black" as const}
                  icons={"none" as const}
                  slot={"Sign me up"}
                />
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__h8X7P)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__sLRli
                  )}
                >
                  {"Help"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__xqDLe)}
                >
                  <Button slot={"Order status"}>
                    <Icon22Icon
                      className={classNames(defaultcss.all, sty.svg__qHkEi)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__u4Zcd)}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__ulkO
                        )}
                      >
                        {"Returns and exchanges"}
                      </div>
                    }
                  >
                    <Icon21Icon
                      className={classNames(defaultcss.all, sty.svg__zhLcW)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button___6DB39)}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__qvNBp
                        )}
                      >
                        {"Help center"}
                      </div>
                    }
                  >
                    <Icon20Icon
                      className={classNames(defaultcss.all, sty.svg__mT7Da)}
                      role={"img"}
                    />
                  </Button>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__moeuv)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__dkP7T
                  )}
                >
                  {"More info"}
                </div>

                <div
                  className={classNames(defaultcss.all, sty.freeBox___2T90V)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__gzwUt)}
                  >
                    <Button icons={"none" as const} slot={"Gift cards"} />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__eXee8
                      )}
                      icons={"none" as const}
                      slot={"Find a store"}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zrrk5
                      )}
                      icons={"none" as const}
                      slot={"Careers"}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__dufqZ
                      )}
                      icons={"none" as const}
                      slot={"Sitemap"}
                    />
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox___092R8)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__otYEa
                      )}
                      icons={"none" as const}
                      slot={"Group sales"}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__mlwe8
                      )}
                      icons={"none" as const}
                      slot={"Privacy policy"}
                    />

                    <Button
                      className={classNames("__wab_instance", sty.button__pm8G)}
                      icons={"none" as const}
                      slot={"Contact us"}
                    />
                  </p.Stack>
                </div>
              </p.Stack>
            </React.Fragment>
          ),
          value: args.container432
        })}
      </p.Stack>

      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container432", "copyrightSocialLanguage"],
  container432: ["container432"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  container432: "div";
  copyrightSocialLanguage: typeof CopyrightSocialLanguage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container432: makeNodeComponent("container432"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */