import { paletteConstants } from "../constants/PaletteConstants";
import * as paletteService from "../services/PaletteService";
import * as alertActions from "./AlertActions";
import { history } from "../helpers/history";

export const paletteCreate = (hexcode, colorName, user) => {
  return (dispatch) => {
    dispatch(request({ hexcode }));

    paletteService.paletteCreate(hexcode, colorName, user).then(
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

export const paletteUpdate = (code, name, user_id, palette_id) => {
  return (dispatch) => {
    dispatch(request({ code }));

    paletteService.paletteUpdate(code, name, user_id, palette_id).then(
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

export const paletteDelete = (hexcode, colorName, user) => {
  return (dispatch) => {
    dispatch(request({ hexcode }));

    paletteService.paletteCreate(hexcode, colorName, user).then(
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