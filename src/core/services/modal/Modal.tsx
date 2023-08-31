import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Pressable } from 'react-native';
import ModalManager, { ShowModalArguments } from './ModalManager';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';
import { HEIGHT_DEVICE, WIDTH_DEVICE } from '../../../constant';
import { Col, Row } from '../../../components';

export function showModal({ ...args }: ShowModalArguments) {
  const ref = ModalManager.getDefault();
  if (ref) {
    ref._showModal(args);
  }
}

export function closeModal() {
  const ref = ModalManager.getDefault();
  if (ref) {
    ref._closeModal();
  }
}

interface CustomisableModalProps {
  modalProps?: any;
}

interface CustomisableModalState {
  visible?: boolean;
  children: any;
  dismissable?: boolean;
  screenHeight: number;
  screenWidth: number;
}

export default class CustomisableModal extends Component<CustomisableModalProps, CustomisableModalState> {
  private dimensionsSubscription: any;
  constructor(props: { modalProps?: any }) {
    super(props);

    this.state = {
      visible: false,
      children: null,
      dismissable: true,
      screenHeight: HEIGHT_DEVICE,
      screenWidth: WIDTH_DEVICE,
    };
  }

  componentDidMount() {
    ModalManager.register(this);
    this.dimensionsSubscription = Dimensions.addEventListener('change', ({ screen }) => {
      this.setState({
        screenHeight: screen.height,
        screenWidth: screen.width,
      });
    });
  }

  componentWillUnmount() {
    ModalManager.unregister(this);
    this.dimensionsSubscription?.remove();
  }

  _showModal = ({ children, dismissable = true }: ShowModalArguments) => {
    this.setState({ children, dismissable }, () => this.setState({ visible: true }));
  };

  _closeModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const { modalProps = {} } = this.props;

    const { children, visible, screenHeight, screenWidth, dismissable } = this.state;

    return (
      <Modal
        {...{ ...modalProps }}
        isVisible={visible}
        useNativeDriver
        supportedOrientations={['landscape', 'portrait']}
        deviceHeight={screenHeight}
        deviceWidth={screenWidth}
        style={styles.modal}
        onBackdropPress={() => (dismissable ? this._closeModal() : {})}
        customBackdrop={
          <TouchableWithoutFeedback onPress={() => (dismissable ? this._closeModal() : {})}>
            <BlurView style={styles.blurView} blurAmount={10} reducedTransparencyFallbackColor={'white'} />
          </TouchableWithoutFeedback>
        }>
        <Pressable onPress={() => (dismissable ? this._closeModal() : {})}>
          <Row justifyContent={'center'} alignContent={'center'}>
            {children}
          </Row>
        </Pressable>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  blurView: { flex: 1 },
  modal: { margin: 0 },
});
