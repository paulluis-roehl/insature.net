import { fromHtml } from "hast-util-from-html";
import temml from "temml";

/**
 * Rehype plugin that renders remark-math's output (`code.language-math`)
 * as MathML via Temml.
 */

function toText(node) {
  if (node.type === "text") return node.value;
  return (node.children ?? []).map(toText).join("");
}

function isMathCode(node) {
  return (
    node.type === "element" &&
    node.tagName === "code" &&
    node.properties?.className?.includes("language-math")
  );
}

function isInlineMath(node) {
  return node.properties?.className?.includes("math-inline");
}

function mathNode(tex, displayMode) {
  const mathml = temml.renderToString(tex, { displayMode });
  return fromHtml(mathml, { fragment: true }).children[0];
}

function transform(node) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === "element" && child.tagName === "pre") {
      const code = child.children?.[0];
      if (isMathCode(code)) {
        node.children[i] = mathNode(toText(code), true);
        continue;
      }
    }
    if (isMathCode(child)) {
      node.children[i] = mathNode(toText(child), isInlineMath(child) === false);
      continue;
    }
    transform(child);
  }
}

export default function rehypeTemml() {
  return transform;
}
