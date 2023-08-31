import { Ref, useMemo } from 'react';
import { Platform, StyleSheet, TextInput, TextInputProps, View, ViewProps } from 'react-native';
import { useStylesheet } from '../../hooks/useStylesheet';
import { IS_IOS } from '../../constant';
import { Theme } from '../../types';

export interface Props extends Omit<TextInputProps, 'placeholder'> {
  inputRef?: Ref<TextInput>;
  label: string;
  type?: 'text' | 'password';
  style?: ViewProps['style'];
  inputStyle?: TextInputProps['style'];
}

/**
 * A text input field
 */
export const TextField = ({ inputRef, label, type, style, inputStyle, numberOfLines = 1, autoCapitalize = 'none', ...rest }: TextInputProps & Props) => {
  const styles = useStylesheet(createStyles);

  const textInputProps: TextInputProps = useMemo(() => {
    switch (type) {
      case 'password':
        return {
          autoComplete: 'password',
          secureTextEntry: true,
        };
      default:
        return {};
    }
  }, [type]);

  return (
    <View
      style={[styles.container, rest.editable === false && styles.disabled, style]}
      accessibilityLabel={rest?.accessibilityLabel ?? label}
      accessible={true}
      importantForAccessibility="yes">
      <TextInput
        accessible={true}
        ref={inputRef}
        importantForAccessibility="no"
        autoCapitalize={autoCapitalize}
        placeholder={label}
        style={[
          styles.input,
          {
            textAlignVertical: numberOfLines === 1 ? 'center' : 'top',
            minHeight: IS_IOS ? (numberOfLines ?? 1) * 17 : undefined,
          },
          inputStyle,
        ]}
        numberOfLines={numberOfLines}
        {...textInputProps}
        {...rest}
      />
    </View>
  );
};

const createStyles = ({ colors, fontSizes, spacing }: Theme) =>
  StyleSheet.create({
    container: {
      paddingVertical: spacing[2],
      backgroundColor: 'red',
    },
    disabled: {
      opacity: 0.5,
    },
    input: {
      fontSize: fontSizes.md,
      borderBottomWidth: Platform.select({ android: 1 }),
      paddingHorizontal: spacing[5],
      paddingVertical: spacing[2],
    },
  });
