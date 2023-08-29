import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';

/**
 * @description Icon component
 * The available prefix depends on which icon set you use. free-solid-svg-icons uses fas.
 * Use the pro icon to get access to all icons in the Pro package. // FONTAWESOME_NPM_AUTH_TOKEN is required if you use pro icons
 */
export const Icon = ({ ...rest }: Props) => {
  return <FontAwesomeIcon {...rest} />;
};
