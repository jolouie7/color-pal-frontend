import { paletteConstants } from "../constants/PaletteConstants";

export const palettes = (state = {}, action) => {
  switch (action.type) {
    case paletteConstants.PALETTE_BEGIN:
      return {
        loading: true,
      };
    case paletteConstants.PALETTE_SUCCESS:
      return {
        items: action.palettes,
      };
    case paletteConstants.PALETTE_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};
