import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SvgEar(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <G fill="#fff">
        <Path d="M256 0C158.805 0 79.701 79.087 79.701 176.299c0 9.421 7.646 17.067 17.067 17.067s17.067-7.646 17.067-17.067c0-78.387 63.778-142.165 142.165-142.165s142.165 63.778 142.165 142.165c0 51.251-19.951 70.741-47.667 97.792-30.174 29.474-67.721 66.133-67.721 145.237 0 32.29-26.266 58.539-58.556 58.539-32.273 0-58.539-26.249-58.539-58.539 0-9.438-7.646-17.067-17.067-17.067s-17.067 7.629-17.067 17.067c0 51.098 41.574 92.672 92.672 92.672s92.689-41.574 92.689-92.672c0-64.717 29.201-93.235 57.532-120.917 28.45-27.768 57.856-56.457 57.856-122.112C432.299 79.087 353.212 0 256 0z" />
        <Path d="M264.243 259.806c-5.069-19.849-17.562-36.506-35.14-46.916-14.285-8.499-30.583-12.049-47.104-10.342-9.37.973-16.179 9.387-15.189 18.756.973 9.37 9.199 16.077 18.756 15.189 9.148-.939 18.176 1.024 26.112 5.751 9.762 5.769 16.674 15.002 19.49 26.01 2.833 11.025 1.178 22.477-4.625 32.239-5.803 9.796-15.053 16.708-26.061 19.524-11.008 2.799-22.443 1.161-32.222-4.642-8.107-4.796-18.586-2.133-23.381 5.973-4.796 8.107-2.133 18.586 5.973 23.398 11.998 7.117 25.395 10.769 38.997 10.769a76.39 76.39 0 0019.063-2.424c19.849-5.069 36.523-17.562 46.967-35.157 10.48-17.629 13.433-38.263 8.364-58.128zM264.926 79.599c-54.903 0-99.567 44.681-99.567 99.584 0 9.421 7.646 17.067 17.067 17.067s17.067-7.646 17.067-17.067c0-36.096 29.355-65.451 65.434-65.451 36.062 0 65.417 29.355 65.417 65.451 0 9.421 7.629 17.067 17.067 17.067s17.067-7.646 17.067-17.067c-.002-54.904-44.666-99.584-99.552-99.584z" />
        <Path d="M199.185 172.356c-.324-9.421-8.124-16.776-17.63-16.486-9.421.324-16.811 8.209-16.486 17.63l1.519 45.397c.307 9.233 7.885 16.503 17.05 16.503.188 0 .375 0 .58-.017 9.421-.324 16.811-8.209 16.486-17.63l-1.519-45.397z" />
      </G>
    </Svg>
  );
}

export default SvgEar;