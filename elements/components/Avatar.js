export default function Avatar({ src, alt, className = '', size = '' }) {
  if (size === 'LG') {
    return `
      <div class="profile-picture mb-2 ${className}">
        <img
          src="${src}"
          alt="${alt}"
          class="w-32 sm:w-40"
        />
      </div>
    `;
  }

  if (size === 'MD') {
    return `
      <div class="profile-picture mb-2 ${className}">
        <img
          src="/assets/images/profile-v3.png"
          alt="Profile Picture"
          class="w-28"
        />
      </div>
    `;
  }

  return `
    <div class="profile-picture mb-2 ${className}">
      <img
        src="${src}"
        alt="${alt}"
        class="w-16"
      />
    </div>
  `;
}
