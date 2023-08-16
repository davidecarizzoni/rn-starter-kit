import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Col, Text } from '../ui';

export type SuccessModalProps = {
  title?: string;
  tipText?: string;
};
export const SuccessModal = ({ title, tipText }: SuccessModalProps) => {
  const { colors } = useTheme();
  return (
    <Col>
      <Text>dasdas</Text>
    </Col>
  );
};
