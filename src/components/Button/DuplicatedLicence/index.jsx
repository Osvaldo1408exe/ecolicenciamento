import { Modal as ModalFlow } from "flowbite-react";
import { InfoIcon } from "../../Icons";

export default function DuplicateLicence({ duplicar, cancelar }) {
    return (
      <ModalFlow show={true} size="sm" onClose={cancelar} popup>
        <ModalFlow.Header />
        <ModalFlow.Body>
          <div className="text-center">
            <div className="flex justify-center items-center pb-5">
              <InfoIcon />
            </div>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Licença já cadastrada, deseja duplicar essa licença?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-sm font-semibold ring-1 ring-inset ring-red-300"
                onClick={duplicar}
              >
                {"Sim, eu quero"}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm font-semibold ring-1 ring-inset ring-blue-300"
                onClick={cancelar}
              >
                Não, cancelar
              </button>
            </div>
          </div>
        </ModalFlow.Body>
      </ModalFlow>
    );
  }