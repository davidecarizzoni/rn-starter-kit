import { AlertModal, AlertModalProps } from '../../../components';
import CustomisableModal, { showModal, closeModal } from './Modal';
export default CustomisableModal;

export const showAlertModal = ({
  showBack = true,
  dismissable = true,
  ...props
}: AlertModalProps & { dismissable?: boolean }) => {
  showModal({
    children: <AlertModal showBack={showBack} {...props} />,
    dismissable,
  });
};
