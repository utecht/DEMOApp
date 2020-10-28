import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SvgMentalHealth(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <G fill="#fff">
        <Path d="M322.989 263.265c28.814-1.423 46.544-19.997 46.544-49.192 0-2.182-.127-4.37-.38-6.538 19.325-12.344 27.636-28.87 27.636-54.486 0-25.609-8.312-42.136-27.636-54.485.253-2.169.38-4.356.38-6.538 0-29.195-17.73-47.769-46.545-49.192-7.717-14.4-22.812-23.336-40.271-23.578-10.18-.134-18.515 2.928-24.797 9.124a31.334 31.334 0 00-1.921 2.077 31.067 31.067 0 00-1.921-2.077c-6.283-6.196-14.633-9.26-24.797-9.124-17.457.243-32.55 9.176-40.272 23.578-28.814 1.423-46.544 19.997-46.544 49.192 0 2.182.128 4.37.38 6.538-19.325 12.344-27.636 28.87-27.636 54.486 0 25.609 8.312 42.136 27.636 54.485a56.483 56.483 0 00-.38 6.538c0 29.195 17.73 47.769 46.545 49.192 7.717 14.4 22.812 23.336 40.271 23.578.225.003.448.005.671.005 9.867 0 17.982-3.069 24.126-9.128a31.104 31.104 0 001.921-2.078 31.084 31.084 0 001.921 2.078c6.144 6.059 14.257 9.128 24.125 9.128.223 0 .447-.002.671-.005 17.459-.243 32.551-9.176 40.273-23.578zM246 240.684c0 11.065-2.063 18.948-5.964 22.795-2.363 2.33-5.799 3.434-10.476 3.366-10.395-.144-19.237-5.437-23.36-13.89a16.011 16.011 0 016.134-6.328 15.84 15.84 0 0112.117-1.599c5.331 1.434 10.819-1.73 12.251-7.064 1.433-5.334-1.73-10.819-7.064-12.252-9.287-2.493-18.987-1.215-27.315 3.601-5.808 3.359-10.465 8.155-13.603 13.906-17.426-1.236-26.254-11.025-26.254-29.146 0-2.304.22-4.613.654-6.87 1.135-5.911-1.594-11.889-6.783-14.872-15.598-8.98-21.126-19.259-21.126-39.281 0-20.024 5.528-30.304 21.12-39.278 5.195-2.986 7.923-8.963 6.788-14.883a36.352 36.352 0 01-.653-6.863c0-19.429 10.147-29.28 30.16-29.28h.12c.292 0 .583-.01.872-.027 5.121 2.154 8.005 7.863 6.528 13.42-1.419 5.337 1.757 10.814 7.094 12.234.861.229 1.725.338 2.576.338 4.422 0 8.467-2.956 9.658-7.433 3.274-12.31-1.264-24.905-10.544-32.46 4.695-5.898 12.145-9.446 20.631-9.564 4.684-.067 8.112 1.036 10.476 3.366C243.938 46.467 246 54.35 246 65.416zm65.854-10.723c1.419-5.337-1.757-10.814-7.094-12.234-5.336-1.42-10.815 1.757-12.234 7.094-3.274 12.311 1.264 24.905 10.544 32.46-4.695 5.898-12.146 9.446-20.631 9.564-4.685.08-8.113-1.036-10.476-3.366-3.901-3.847-5.963-11.73-5.963-22.795V65.416c0-11.065 2.063-18.948 5.964-22.795 2.363-2.33 5.79-3.434 10.476-3.366 10.395.144 19.237 5.437 23.36 13.89a16.011 16.011 0 01-6.134 6.328 15.839 15.839 0 01-12.117 1.599c-5.331-1.433-10.819 1.73-12.251 7.064-1.433 5.333 1.73 10.819 7.064 12.251a36.125 36.125 0 009.377 1.245c6.236 0 12.392-1.639 17.938-4.846 5.808-3.359 10.465-8.155 13.603-13.906 17.426 1.236 26.254 11.025 26.254 29.146 0 2.304-.22 4.613-.654 6.87-1.135 5.911 1.594 11.889 6.783 14.872 15.598 8.98 21.126 19.259 21.126 39.281 0 20.024-5.528 30.304-21.12 39.278-5.195 2.986-7.923 8.963-6.789 14.883.434 2.252.653 4.561.653 6.863 0 19.429-10.147 29.28-30.16 29.28h-.078c-.308-.001-.613.008-.917.026-5.118-2.154-8.001-7.863-6.524-13.418z" />
        <Path d="M199.278 132.583c-11.829 0-22.113 6.749-26.838 17.613-4.699 10.803-2.64 22.854 5.375 31.454.385.413.779.821 1.182 1.223a9.968 9.968 0 007.065 2.923 9.97 9.97 0 007.077-2.935c3.902-3.908 3.897-10.24-.011-14.142a26.636 26.636 0 01-.684-.708c-3.759-4.034-2.224-8.55-1.663-9.838.57-1.311 2.869-5.59 8.498-5.59 5.523 0 10-4.477 10-10-.001-5.523-4.478-10-10.001-10zM318.873 168.719c-3.909 3.902-3.913 10.234-.011 14.142a9.968 9.968 0 007.077 2.935 9.969 9.969 0 007.065-2.923c.403-.402.797-.811 1.184-1.225 8.013-8.597 10.071-20.648 5.372-31.451-4.725-10.864-15.009-17.613-26.838-17.613-5.523 0-10 4.477-10 10s4.477 10 10 10c5.629 0 7.928 4.279 8.498 5.59.561 1.288 2.096 5.804-1.661 9.835-.223.24-.452.477-.686.71zM166.665 288.354l-69.713-68.693v-73.959c0-16.709-13.594-30.303-30.303-30.303-.158 0-1.03.018-1.048.018a30.122 30.122 0 00-5.071.61v-7.393c0-16.534-12.673-30.082-28.852-30.843-8.602-.409-17.362 2.807-23.425 8.592C3.085 91.311.24 97.734.24 104.467c0 23.586-.144 133.467-.24 167.864-.002.812.004 1.618.02 2.423.468 24.509 11.33 48.303 29.8 65.279.158.146.321.286.489.421l77.976 62.897v79.396c0 5.523 4.477 10 10 10h70.292c5.523 0 10-4.477 10-10v-118.15c0-28.471-11.631-56.26-31.912-76.243zM66.229 135.407l.419-.008c5.681 0 10.303 4.622 10.303 10.303v62.556a32.18 32.18 0 00-16.423 1.591v-72.438a10.182 10.182 0 015.701-2.004zm112.348 337.341h-50.292V398.57a10 10 0 00-3.722-7.784l-81.438-65.689c-14.328-13.283-22.747-31.753-23.109-50.721a94.016 94.016 0 01-.016-1.991c.095-34.407.24-144.325.24-167.918 0-1.248.611-2.463 1.817-3.614 2.12-2.022 5.523-3.227 8.68-3.085 5.399.254 9.792 5.128 9.792 10.865v122.916a32.833 32.833 0 00-.802 3.715c-1.569 10.068 1.744 20.407 8.866 27.676l70.435 73.683c3.816 3.992 10.146 4.135 14.139.318 3.992-3.816 4.135-10.147.318-14.139l-70.48-73.73-.104-.106c-2.781-2.824-4.025-6.695-3.413-10.62a12.296 12.296 0 013.296-6.648c.32-.292.975-.885 1.31-1.187 4.962-3.9 11.999-3.46 16.457 1.065l.105.105 71.971 70.917c16.491 16.249 25.949 38.846 25.949 61.998v108.152zM511.76 104.467c0-6.733-2.845-13.156-8.012-18.085-6.063-5.785-14.815-8.993-23.425-8.592-16.179.761-28.853 14.309-28.853 30.843v7.392a29.992 29.992 0 00-5.057-.608c-.021 0-.902-.019-1.063-.019-16.71 0-30.303 13.594-30.303 30.303v73.959l-69.713 68.693c-20.28 19.983-31.912 47.772-31.912 76.244v118.15c0 5.523 4.477 10 10 10h70.292c5.523 0 10-4.477 10-10v-79.396l77.976-62.897c.168-.135.331-.275.489-.421 18.47-16.977 29.333-40.77 29.8-65.283.015-.801.021-1.607.019-2.421-.094-34.395-.238-144.276-.238-167.862zm-66.474 30.931l.489.009c2.081.083 4.037.773 5.696 2.004v72.433a32.183 32.183 0 00-16.423-1.587v-62.556c0-5.68 4.622-10.302 10.238-10.303zm46.698 138.975c-.362 18.972-8.781 37.442-23.109 50.725l-81.439 65.689a10.002 10.002 0 00-3.722 7.784v74.177h-50.292v-108.15c0-23.151 9.458-45.749 25.949-61.998l71.97-70.917.105-.105c4.461-4.528 11.508-4.967 16.453-1.07.335.302.997.902 1.318 1.194a12.262 12.262 0 013.292 6.644c.612 3.926-.631 7.797-3.413 10.621a6.576 6.576 0 00-.083.085l-35.524 36.945c-3.828 3.981-3.704 10.311.277 14.14 3.98 3.827 10.311 3.705 14.14-.277l35.49-36.91c7.128-7.27 10.444-17.613 8.874-27.686a32.77 32.77 0 00-.802-3.714V108.633c0-5.737 4.393-10.611 9.792-10.865 3.16-.142 6.56 1.063 8.68 3.085 1.206 1.15 1.817 2.366 1.817 3.614 0 23.594.145 133.511.24 167.917.004.668-.001 1.333-.013 1.989z" />
        <Path d="M398.53 321.88c-1.638-3.995-5.828-6.524-10.127-6.135-4.127.374-7.694 3.361-8.758 7.369-1.058 3.985.483 8.308 3.833 10.717 3.384 2.434 8.083 2.471 11.507.094 3.821-2.651 5.336-7.746 3.545-12.045z" />
      </G>
    </Svg>
  );
}

export default SvgMentalHealth;
