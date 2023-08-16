export interface ShowModalArguments {
  children: any;
  dismissable: boolean;
}

export interface ModalRef {
  _showModal: ({ children, dismissable }: ShowModalArguments) => void;
  _closeModal: () => void;
}

class ModalManager {
  private _defaultModal: ModalRef | null = null;
  register(_ref: ModalRef) {
    this._defaultModal = _ref;
  }
  unregister(_ref: ModalRef) {
    this._defaultModal = null;
  }
  getDefault() {
    return this._defaultModal;
  }
}

export default new ModalManager();
