import { FormsPlugin } from "./types";

import AppModal from "./component";
import { createMoBrixDesignerPlugin } from "mobrix-designer-tools";

const formsPlugin: FormsPlugin = createMoBrixDesignerPlugin(
  "mobrix-designer-forms",
  () => ({
    externalComponent: AppModal,
    field: (creator) => {
      let formsConfig = creator.forms || {};
      let getFormType = formsConfig.getFormType;
      let getModalVisibility = formsConfig.getModalVisibility;

      let getDarkMode = formsConfig.getDarkMode;

      return {
        name: "forms",
        content: {
          modals: formsConfig.modals,
          getDarkMode: getDarkMode,
          getFormType: getFormType,
          getModalVisibility: getModalVisibility,
          onClose: formsConfig.onClose,
        },
      };
    },
  })
);

export default formsPlugin;
