const Role = ({ className = '', content = '' }) => {
  return `
    <h2
      class="item flex text-2xl md:text-4xl font-extrabold mb-10 ${className}"
    >
      ${content}
    </h2>
  `;
};

export default function RoleSlider({ roles = [] }) {
  return `
    <div class="slider sm:mb-10">
      ${roles.map((role) => Role({ ...role })).join('\n')}
    </div>
  `;
}
