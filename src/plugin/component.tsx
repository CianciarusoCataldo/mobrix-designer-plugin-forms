import React from "react";
import { Modal } from "mobrix-ui";
import { MoBrixDesignerComponent } from "mobrix-designer-types";
import { FormsSettings } from "./types";
import { useSelector } from "react-redux";

const AppModal: MoBrixDesignerComponent<{ forms?: FormsSettings }> = ({
  creatorConfig,
  store,
}) => {
  const formsConfig = creatorConfig.forms || {};
  const modals = formsConfig.modals || {};

  const isVisible = useSelector(
    formsConfig.getModalVisibility || (() => false)
  );
  const dark = useSelector(formsConfig.getDarkMode || (() => false));
  const type = useSelector(formsConfig.getFormType || (() => null));

  const ModalContent = type ? modals[type] || (() => <div />) : () => <div />;

  return (
    <Modal
      dark={dark}
      onClose={() => {
        formsConfig.onClose && formsConfig.onClose(store?.dispatch!);
      }}
      hide={!isVisible}
    >
      <ModalContent />
    </Modal>
  );
};

export default AppModal;
