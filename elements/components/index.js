import InlineStyle from './InlineStyle.js';
import Main from './Main.js';
import Nav from './Nav.js';

const Home = () => `
  ${InlineStyle({
    css: `
      .slider {
        height: 60px;
        overflow: hidden;
      }
      .slider > .item {
        height: 60px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        padding-left: 5px;
        animation-name: slideUp;
        animation-duration: 10s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
      }

      @keyframes slideUp {
        0%,
        12.66%,
        100% {
          transform: translate3d(0, 0, 0);
        }
        16.66%,
        29.32% {
          transform: translate3d(0, -60px, 0);
        }
        33.32%,
        45.98% {
          transform: translate3d(0, -120px, 0);
        }
        49.98%,
        62.64% {
          transform: translate3d(0, -180px, 0);
        }
        66.64%,
        79.3% {
          transform: translate3d(0, -240px, 0);
        }
        83.3%,
        95.96% {
          transform: translate3d(0, 0, 0);
        }
      }
    `,
  })}
  <div class="-translate-x-2 bg-gray-800 text-slate-50 px-1 hidden"></div>
  ${Nav({})} 
  ${Main()} 
`;

const html = Home();
document.body.innerHTML = html;

// const Head = ({ title = '', favicon = '', links = [], scripts = [] }) => `
//   <head>
//     <meta charset="UTF-8" />
//     <link
//       rel="icon"
//       type="image/svg+xml"
//       href="${favicon}"
//     />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     ${links.join('\n')}
//     ${scripts.join('\n')}

//     <title>${title}</title>
//   </head>
// `;

// const Body = ({
//   className = '',
//   id = 'root',
//   content = '',
//   links = [],
//   scripts = [],
// }) => `
//   <body class="${className}" id="${id}">
//     ${content}

//     ${links.join('\n')}
//     ${scripts.join('\n')}
//   </body>
// `;

// export default function App() {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//       ${Head({
//         title: 'Portfolio - Nazmuz Pranto',
//         favicon: '/assets/images/nsp-logo-v2.png',
//         links: [
//           '<link rel="stylesheet" href="/global.css" />',
//           '<link rel="stylesheet" href="/index.css" />',
//         ],
//       })}
//       ${Body({
//         className: 'max-w-screen-xl m-auto mt-0 mb-0',
//         scripts: [
//           '<script type="module" src="/elements/components/index.js"></script>',
//           '<script type="module" src="/index.js"></script>',
//         ],
//         content: Home(),
//       })}
//     </html>
//   `;
// }
