export default function SocialLink({ href, icon }) {
  return `
    <a href="${href}" target="_blank">
      ${icon}
    </a>
  `;
}
