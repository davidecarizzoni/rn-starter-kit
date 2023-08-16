import React, { useState } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Col, Row, Text } from '../ui';
import { WIDTH_DEVICE } from '../../constant/dimension';
import { Theme } from '../../types/theme';
import { useStylesheet } from '../../hooks/useStylesheet';
import { closeModal } from '../../core/services/modal/Modal';

export type AlertModalProps = {
  text?: string;
  tipText?: string;
  title?: string;
  showBack?: boolean;
  cancelText?: string;
  onConfirm?: () => Promise<void> | void;
  confirmText?: string;
  checkbox?: JSX.Element;
};

export const AlertModal = ({
  text,
  title,
  showBack,
  cancelText,
  tipText,
  onConfirm,
  confirmText,
  checkbox,
}: AlertModalProps) => {
  const styles = useStylesheet(createStyles);
  const t = (l: string) => l;
  const [loading, setLoading] = useState(false);

  const onPressClose = () => {
    closeModal();
  };

  const onPressConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm?.();
      setLoading(false);
      onPressClose();
    } catch (e) {
      setLoading(false);
      console.log({ errorAlertPopupScreen: e });
    }
  };

  return (
    <Col style={styles.core}>
      <Text>{title}</Text>
      {!!text && <Text>{text}</Text>}
      {!!tipText && <Text>{tipText}</Text>}
      {checkbox}
      <Row style={styles.buttonRow}>
        {showBack && (
          <TouchableOpacity style={styles.button} onPress={onPressClose}>
            <Text>{cancelText || t('undo')}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={onPressConfirm}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text>{confirmText || t('ok')}</Text>
          )}
        </TouchableOpacity>
      </Row>
    </Col>
  );
};

const createStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    core: {
      width: WIDTH_DEVICE - 80,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      marginVertical: 10,
      width: 0.5,
      backgroundColor: 'rgba(60, 60, 67, 0.36)',
    },
    button: {
      flex: 1,
      paddingVertical: 13,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: 15,
      marginBottom: 10,
      fontSize: 14,
      paddingHorizontal: 30,
      textAlign: 'center',
      color: colors.primary,
    },
    text: {
      color: colors.primary,
      marginBottom: 3,
      textAlign: 'center',
      paddingHorizontal: 30,
    },
    buttonRow: {
      marginTop: 10,
      borderTopWidth: 0.5,
      borderTopColor: 'rgba(60, 60, 67, 0.36)',
    },
    buttonTextUndo: {
      color: colors.gray['400'],
    },
  });
