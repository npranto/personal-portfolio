export default function InlineStyle({ css }) {
  return `
    <style>
      ${css}
    </style>
  `;
}
