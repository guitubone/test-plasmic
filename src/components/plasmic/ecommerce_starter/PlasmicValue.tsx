// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bKpefHuncX8cEW37wPMjAY
// Component: Pkcejd69N6B2
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: bKpefHuncX8cEW37wPMjAY/projectcss
import * as sty from "./PlasmicValue.module.css"; // plasmic-import: Pkcejd69N6B2/css

import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: 9bppR-KsPbFY/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wH-q_ZHHI5xE/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: yGKgemdy4vRT/icon

export type PlasmicValue__VariantMembers = {
  topBottom: "topBottom";
  center: "center";
  withButton: "withButton";
};

export type PlasmicValue__VariantsArgs = {
  topBottom?: SingleBooleanChoiceArg<"topBottom">;
  center?: SingleBooleanChoiceArg<"center">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
};

type VariantPropType = keyof PlasmicValue__VariantsArgs;
export const PlasmicValue__VariantProps = new Array<VariantPropType>(
  "topBottom",
  "center",
  "withButton"
);

export type PlasmicValue__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValue__ArgsType;
export const PlasmicValue__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "children2"
);

export type PlasmicValue__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultValueProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  topBottom?: SingleBooleanChoiceArg<"topBottom">;
  center?: SingleBooleanChoiceArg<"center">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
  className?: string;
}

function PlasmicValue__RenderFunc(props: {
  variants: PlasmicValue__VariantsArgs;
  args: PlasmicValue__ArgsType;
  overrides: PlasmicValue__OverridesType;
  dataFetches?: PlasmicValue__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__center]: hasVariant(variants, "center", "center"),
        [sty.root__topBottom]: hasVariant(variants, "topBottom", "topBottom"),
        [sty.root__withButton]: hasVariant(variants, "withButton", "withButton")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.freeBox__lt4M3, {
          [sty.freeBox__center__lt4M3XOKx]: hasVariant(
            variants,
            "center",
            "center"
          ),
          [sty.freeBox__topBottom__lt4M30D0C7]: hasVariant(
            variants,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(defaultcss.all, sty.freeBox___7Meoz)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon9Icon
                className={classNames(defaultcss.all, sty.svg__dSYg)}
                role={"img"}
              />
            ),

            value: args.slot
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__hcqQe, {
          [sty.freeBox__center__hcqQexOKx]: hasVariant(
            variants,
            "center",
            "center"
          ),
          [sty.freeBox__withButton__hcqQegNxsm]: hasVariant(
            variants,
            "withButton",
            "withButton"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text___0P8ZF
                )}
              >
                {"Worldwide Shipping"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__ldYgr
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__center]: hasVariant(
              variants,
              "center",
              "center"
            )
          })
        })}
      </p.Stack>

      {(hasVariant(variants, "withButton", "withButton") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__upzsB, {
            [sty.freeBox__center__upzsBxOKx]: hasVariant(
              variants,
              "center",
              "center"
            ),
            [sty.freeBox__withButton__upzsBgNxsm]: hasVariant(
              variants,
              "withButton",
              "withButton"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button
                children2={
                  <Icon5Icon
                    className={classNames(defaultcss.all, sty.svg__uid11)}
                    role={"img"}
                  />
                }
                className={classNames("__wab_instance", sty.button__ulsHr, {
                  [sty.button__withButton__ulsHrgNxsm]: hasVariant(
                    variants,
                    "withButton",
                    "withButton"
                  )
                })}
                colors={"black" as const}
                icons={"end" as const}
                rounded={"rounded" as const}
                size={"large" as const}
                slot={"Read our letter"}
              />
            ),

            value: args.children2,
            className: classNames(sty.slotTargetChildren2, {
              [sty.slotTargetChildren2__center]: hasVariant(
                variants,
                "center",
                "center"
              ),
              [sty.slotTargetChildren2__withButton]: hasVariant(
                variants,
                "withButton",
                "withButton"
              )
            })
          })}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValue__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValue__VariantsArgs;
    args?: PlasmicValue__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValue__Fetches;
  } & Omit<PlasmicValue__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValue__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValue__ArgProps,
      internalVariantPropNames: PlasmicValue__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */
