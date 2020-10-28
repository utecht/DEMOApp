import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SvgTomography(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <G fill="#fff">
        <Path d="M492.282 169.51h-97.653c-10.856 0-19.689 8.833-19.689 19.689v73.25c0 10.872 8.833 19.718 19.689 19.718h11.521v111.672c0 6.824 5.552 12.376 12.376 12.376h49.89c6.823 0 12.375-5.552 12.375-12.376V282.167h11.492c10.872 0 19.718-8.846 19.718-19.718v-73.25c-.001-10.856-8.847-19.689-19.719-19.689zm-71.133 143.952h44.612v16.296h-44.612zm44.641 77.753h-44.641v-46.457h44.641zm0-92.753h-44.641v-16.295h44.641zM497 262.449c0 2.558-2.16 4.718-4.718 4.718h-97.653c-2.586 0-4.689-2.116-4.689-4.718v-73.25c0-2.542 2.147-4.689 4.689-4.689h97.653c2.558 0 4.718 2.147 4.718 4.689zM50.02 296.562H37.604c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H50.02c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM50.02 266.458H37.604c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H50.02c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" />
        <Path d="M173.99 9.69l-.039-.002-.038.002C127.647 9.7 84.021 27.839 51.09 60.78 18.14 93.72 0 137.36 0 183.64v211.05c0 6.35 5.17 11.52 11.53 11.52h47.94c-1.64 9.37-2.64 16.72-2.64 20.65 0 .033.004.064.005.097v29.076c0 6.792 5.514 12.318 12.29 12.318h16v21.67c0 6.776 5.514 12.29 12.29 12.29h153.071c6.793 0 12.319-5.514 12.319-12.29v-21.67h15.971c6.793 0 12.319-5.526 12.319-12.318v-29.086c0-.029.004-.058.004-.087 0-3.93-1-11.278-2.639-20.646l51.909-.004c6.37 0 11.56-5.17 11.56-11.52v-86.01c0-4.14-3.36-7.5-7.5-7.5-4.15 0-7.5 3.36-7.5 7.5v82.53l-51.249.004-.001-.004c-7.55-38.63-20.56-93.66-22.73-104.32v-10.55c24.38-23.41 39.57-56.31 39.57-92.7 0-44.804-23.052-84.318-57.913-107.333L260.135 49.4c46.078 28.821 76.794 80.008 76.794 138.24v86.43c0 4.14 3.35 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5v-86.43c0-47.34-18.57-91.98-52.27-125.68S221.325 9.701 173.99 9.69zm-7.539 15.182v30.453a127.59 127.59 0 00-50.154 13.452l-15.216-26.369c19.749-10.232 41.902-16.441 65.37-17.536zM62.26 391.21H15V183.64c0-56.041 29.16-105.402 73.101-133.714l15.219 26.373C68.459 99.313 45.41 138.831 45.41 183.64c0 36.39 15.19 69.3 39.57 92.71v10.55c-2.17 10.65-15.18 65.69-22.72 104.31zm185.546 96.102H100.125v-18.96h147.681zm27.914-67.952H187.9c-4.15 0-7.5 3.36-7.5 7.5 0 4.15 3.35 7.5 7.5 7.5h88.196v18.992H71.835V434.36h81.425c4.14 0 7.5-3.35 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5H72.21c.26-2.9 24.2-113.92 26.38-124.21h150.75c2.18 10.29 26.12 121.31 26.38 124.21zm-40.401-187.738c-.007-.001-.013.004-.02.004a32.016 32.016 0 00-4.26-.286H116.89c-1.442 0-2.86.099-4.251.285-.009.001-.021-.006-.03-.005a77.796 77.796 0 01-16.537-47.977c0-42.944 34.937-77.882 77.88-77.882s77.88 34.938 77.88 77.882c-.001 17.465-5.835 34.337-16.513 47.979zm12.631 31.618v16.909H99.98V263.24c0-9.32 7.59-16.9 16.91-16.9h114.15c9.32 0 16.91 7.58 16.91 16.9zm39.57-79.6c0 27.17-9.59 52.14-25.56 71.7-1.871-7.326-6.29-13.646-12.252-17.959a92.81 92.81 0 0017.123-53.738c0-51.215-41.666-92.882-92.88-92.882s-92.88 41.667-92.88 92.882a92.779 92.779 0 0017.152 53.741C92.26 241.7 87.842 248.023 85.97 255.35c-15.98-19.56-25.56-44.53-25.56-71.71 0-62.597 50.926-113.535 113.531-113.54h.019c62.616.006 113.56 50.944 113.56 113.54zM231.629 68.784a127.635 127.635 0 00-50.177-13.459V24.869c23.501 1.07 45.718 7.139 65.614 17.167z" />
        <G>
          <Path d="M443.47 406.215h-12.416c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h12.416c4.143 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgTomography;