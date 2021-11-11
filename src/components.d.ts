/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyAccordion {
        "color": string;
        "description": string;
        "label": string;
        "width": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyTable {
    }
    interface PerfectCell {
    }
    interface PerfectRow {
    }
    interface PlainButton {
    }
}
declare global {
    interface HTMLMyAccordionElement extends Components.MyAccordion, HTMLStencilElement {
    }
    var HTMLMyAccordionElement: {
        prototype: HTMLMyAccordionElement;
        new (): HTMLMyAccordionElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTableElement extends Components.MyTable, HTMLStencilElement {
    }
    var HTMLMyTableElement: {
        prototype: HTMLMyTableElement;
        new (): HTMLMyTableElement;
    };
    interface HTMLPerfectCellElement extends Components.PerfectCell, HTMLStencilElement {
    }
    var HTMLPerfectCellElement: {
        prototype: HTMLPerfectCellElement;
        new (): HTMLPerfectCellElement;
    };
    interface HTMLPerfectRowElement extends Components.PerfectRow, HTMLStencilElement {
    }
    var HTMLPerfectRowElement: {
        prototype: HTMLPerfectRowElement;
        new (): HTMLPerfectRowElement;
    };
    interface HTMLPlainButtonElement extends Components.PlainButton, HTMLStencilElement {
    }
    var HTMLPlainButtonElement: {
        prototype: HTMLPlainButtonElement;
        new (): HTMLPlainButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-accordion": HTMLMyAccordionElement;
        "my-component": HTMLMyComponentElement;
        "my-table": HTMLMyTableElement;
        "perfect-cell": HTMLPerfectCellElement;
        "perfect-row": HTMLPerfectRowElement;
        "plain-button": HTMLPlainButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyAccordion {
        "color"?: string;
        "description"?: string;
        "label"?: string;
        "onTiggle"?: (event: CustomEvent<any>) => void;
        "width"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyTable {
    }
    interface PerfectCell {
    }
    interface PerfectRow {
    }
    interface PlainButton {
    }
    interface IntrinsicElements {
        "my-accordion": MyAccordion;
        "my-component": MyComponent;
        "my-table": MyTable;
        "perfect-cell": PerfectCell;
        "perfect-row": PerfectRow;
        "plain-button": PlainButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-accordion": LocalJSX.MyAccordion & JSXBase.HTMLAttributes<HTMLMyAccordionElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-table": LocalJSX.MyTable & JSXBase.HTMLAttributes<HTMLMyTableElement>;
            "perfect-cell": LocalJSX.PerfectCell & JSXBase.HTMLAttributes<HTMLPerfectCellElement>;
            "perfect-row": LocalJSX.PerfectRow & JSXBase.HTMLAttributes<HTMLPerfectRowElement>;
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
        }
    }
}
