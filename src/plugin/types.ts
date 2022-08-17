import { MoBrixEngineDispatch } from "mobrix-engine-types";
import { MoBrixDesignerPlugin } from "mobrix-designer-types";

export type FormsSettings = {
  modals?: Record<string, () => JSX.Element>;
  onClose?: (dispatch: MoBrixEngineDispatch) => void;
  getDarkMode?: (state: Record<string, any>) => boolean;
  getModalVisibility?: (state: Record<string, any>) => boolean;
  getFormType?: (state: Record<string, any>) => string;
};

export type FormsPlugin = MoBrixDesignerPlugin<{
  forms?: FormsSettings;
}>;
