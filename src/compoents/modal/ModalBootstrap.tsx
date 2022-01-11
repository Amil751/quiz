import React from "react";
interface Props {
  downloadHandler: (data: any) => void;
  closeHandler: (data: any) => void;
  show: boolean;
}

export const ModalBootstrap = ({
  downloadHandler,
  closeHandler,
  show,
}: Props) => {
  return (
    <div
      className={`modal ${show && "d-block"} mt-5`}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              style={{ marginLeft: "95%" }}
              type="button"
              className="close border-0 rounded-circle"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Do you want to download</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeHandler}
            >
              Cancle
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={downloadHandler}
            >
              Donwload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
