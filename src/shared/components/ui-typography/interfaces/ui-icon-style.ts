import { IconType } from "shared/types/icon-type";

type PositionType = "before" | "after";

export interface UIIconStyle {
  icon: IconType;
  position?: PositionType;
}
