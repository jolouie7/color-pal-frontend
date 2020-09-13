import { paletteConstants } from "../constants/PaletteConstants";
import * as paletteService from "../services/PaletteService";
import * as alertActions from "./AlertActions";
import { history } from "../helpers/history";

export const paletteCreate = (hexcode, colorName) => {
  return (dispatch) => {
    dispatch(request({ hexcode }));

    paletteService.paletteCreate(hexcode, colorName).then(
      (palette) => {
        dispatch(success(palette));
        history.push("/palettes");
        window.location.reload(true);
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(palette) {
    return { type: paletteConstants.PALETTE_BEGIN, palette };
  }
  function success(palette) {
    return { type: paletteConstants.PALETTE_SUCCESS, palette };
  }
  function failure(error) {
    return { type: paletteConstants.PALETTE_FAILURE, error };
  }
};